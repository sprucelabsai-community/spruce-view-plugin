import { MercuryClient } from '@sprucelabs/mercury-client'
import { SpruceSchemas } from '@sprucelabs/mercury-types'
import { EventFeature } from '@sprucelabs/spruce-event-plugin'
import {
	eventAssertUtil,
	eventResponseUtil,
} from '@sprucelabs/spruce-event-utils'
import { AuthService, Skill } from '@sprucelabs/spruce-skill-utils'
import { vcDiskUtil, login } from '@sprucelabs/spruce-test-fixtures'
import { assert, assertUtil, test } from '@sprucelabs/test'
import { errorAssertUtil } from '@sprucelabs/test-utils'
import { ViewFeature } from '../../plugins/view.plugin'
import AbstractViewPluginTest from '../../tests/AbstractViewPluginTest'
import { DEMO_NUMBER } from '../../tests/constants'
import { CoreEventContract } from '../../tests/events.contract'

type RegisteredSkill = SpruceSchemas.Spruce.v2020_07_22.Skill

@login(DEMO_NUMBER)
export default class RegistringSkillViewsOnBootTest extends AbstractViewPluginTest {
	private static currentSkill: RegisteredSkill

	protected static async beforeEach() {
		await super.beforeEach()
		this.currentSkill =
			await this.importEventContractSeedAndRegisterCurrentSkill()
	}

	@test()
	protected static async registersNothingToStart() {
		const { skill } = await this.bootSkill()
		const results = await this.getSkillViews(skill)

		eventAssertUtil.assertErrorFromResponse(results, 'SKILL_VIEWS_NOT_FOUND', {
			namespace: this.currentSkill.slug,
		})
	}

	@test()
	protected static async registersViewsOnBoot() {
		process.env.SHOULD_REGISTER_VIEWS = 'true'

		const skill = await this.GoodSkill()

		try {
			await this.bootSkill({ skill })
		} catch (err: any) {
			assert.fail(assertUtil.stringify(err))
		}

		const results = await this.getSkillViews(skill)
		const registered = eventResponseUtil.getFirstResponseOrThrow(results)

		assert.isEqualDeep(registered.ids, ['book', 'book-form', 'spy'])
		assert.isFalsy(registered.theme)
	}

	@test()
	protected static async canControlRegisteringViewsWithEnvFlag() {
		const skill = await this.GoodSkill()
		const viewsPlugin = skill.getFeatureByCode('view') as ViewFeature

		//@ts-ignore
		viewsPlugin.importAndRegisterSkillViews = () => {
			throw Error('should not be hit')
		}

		await this.bootSkill({ skill })
	}

	@test()
	protected static async throwsHelpfulMessageWithBadSkillView() {
		process.env.SHOULD_REGISTER_VIEWS = 'true'
		const skill = await this.BadSkill()
		const err = await assert.doesThrowAsync(() => this.bootSkill({ skill }))
		errorAssertUtil.assertError(err, 'INVALID_VIEW_CONTROLLER')
	}

	@test()
	protected static async registersThemeWithSkillView() {
		process.env.SHOULD_REGISTER_VIEWS = 'true'
		const themeFile = vcDiskUtil.resolveThemeFile(
			this.resolveTestPathSrc('skill-with-theme', 'build')
		)

		assert.isString(themeFile)

		const expected = require(themeFile).default
		const skill = await this.GoodSkillWithTheme()

		AuthService.Auth(this.cwd).updateCurrentSkill(this.currentSkill)

		await this.bootSkill({ skill })

		const results = await this.getSkillViews(skill)
		const registered = eventResponseUtil.getFirstResponseOrThrow(results)

		assert.isTruthy(registered.theme)
		assert.doesInclude(registered.theme.props, expected)
	}

	private static async GoodSkillWithTheme() {
		return this.TestSkillWithViewFilesInPlace('skill-with-theme')
	}

	private static async BadSkill() {
		return this.TestSkillWithViewFilesInPlace('broken-skill')
	}

	private static async getSkillViews(skill: Skill) {
		const client = await this.connectToApi(skill)

		return await client.emit('heartwood.get-skill-views::v2021_02_11', {
			target: {
				namespace: this.currentSkill.slug,
			},
		})
	}

	private static async connectToApi(skill: Skill) {
		const events = skill.getFeatureByCode('event') as EventFeature
		const client =
			(await events.connectToApi()) as MercuryClient<CoreEventContract>
		return client
	}
}
