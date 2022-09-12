import AbstractSpruceError from '@sprucelabs/error'
import { MercuryClient, MercuryTestClient } from '@sprucelabs/mercury-client'
import { SpruceSchemas } from '@sprucelabs/mercury-types'
import { EventFeature } from '@sprucelabs/spruce-event-plugin'
import { eventAssertUtil } from '@sprucelabs/spruce-event-utils'
import { AuthService, Skill } from '@sprucelabs/spruce-skill-utils'
import { vcDiskUtil, fake } from '@sprucelabs/spruce-test-fixtures'
import { assert, assertUtil, errorAssert, test } from '@sprucelabs/test-utils'
import { ViewFeature } from '../../plugins/view.plugin'
import AbstractViewPluginTest from '../../tests/AbstractViewPluginTest'
import { DEMO_NUMBER } from '../../tests/constants'
import eventContracts, { CoreEventContract } from '../../tests/events.contract'
import EventFaker from '../support/EventFaker'

type RegisteredSkill = SpruceSchemas.Spruce.v2020_07_22.Skill

class Error extends AbstractSpruceError {}

@fake.login(DEMO_NUMBER)
export default class RegistringSkillViewsOnBootTest extends AbstractViewPluginTest {
	private static currentSkill: RegisteredSkill
	private static eventFaker: EventFaker

	protected static async beforeEach() {
		await super.beforeEach()

		this.currentSkill =
			await this.importEventContractSeedAndRegisterCurrentSkill()

		this.eventFaker = new EventFaker()

		MercuryTestClient.mixinContract(eventContracts[1])
	}

	@test()
	protected static async registersNothingToStart() {
		await this.eventFaker.fakeGetSkillViews(({ target }) => {
			throw new Error({
				//@ts-ignore
				code: 'SKILL_VIEWS_NOT_FOUND',
				namespace: target.namespace,
			})
		})

		const { skill } = await this.bootSkill()

		const results = await this.emitGetSkillViews(skill)

		eventAssertUtil.assertErrorFromResponse(results, 'SKILL_VIEWS_NOT_FOUND', {
			namespace: this.currentSkill.slug,
		})
	}

	@test()
	protected static async registersViewsOnBoot() {
		process.env.SHOULD_REGISTER_VIEWS = 'true'
		let passedTargetAndPayload: Record<string, any> | undefined

		await this.eventFaker.fakeRegisterSkillViews((targetAndPayload) => {
			passedTargetAndPayload = targetAndPayload
		})

		const skill = await this.GoodSkill()

		try {
			await this.bootSkill({ skill })
		} catch (err: any) {
			assert.fail(assertUtil.stringify(err))
		}

		assert.isTruthy(passedTargetAndPayload)

		delete passedTargetAndPayload.source

		assert.isEqualDeep(passedTargetAndPayload, {
			payload: {
				ids: ['book', 'book-form', 'spy'],
				//TODO find out better way to test source?
				source: passedTargetAndPayload.payload.source,
				theme: undefined,
			},
		})
	}

	@test()
	protected static async canControlRegisteringViewsWithEnvFlag() {
		const skill = await this.GoodSkill()
		const viewsPlugin = skill.getFeatureByCode('view') as ViewFeature

		//@ts-ignore
		viewsPlugin.importAndRegisterSkillViews = () => {
			assert.fail('should not be hit')
		}

		await this.bootSkill({ skill })
	}

	@test()
	protected static async throwsHelpfulMessageWithBadSkillView() {
		process.env.SHOULD_REGISTER_VIEWS = 'true'
		const skill = await this.BadSkill()
		const err = await assert.doesThrowAsync(() => this.bootSkill({ skill }))
		errorAssert.assertError(err, 'INVALID_VIEW_CONTROLLER')
	}

	@test()
	protected static async registersThemeWithSkillView() {
		let passedThemed: Record<string, any> | undefined

		await this.eventFaker.fakeRegisterSkillViews(({ payload }) => {
			passedThemed = payload.theme
		})

		process.env.SHOULD_REGISTER_VIEWS = 'true'
		const themeFile = vcDiskUtil.resolveThemeFile(
			this.resolveTestPathSrc('skill-with-theme', 'build')
		)

		assert.isString(themeFile)

		const expected = require(themeFile).default
		const skill = await this.GoodSkillWithTheme()

		AuthService.Auth(this.cwd).updateCurrentSkill(this.currentSkill)

		await this.bootSkill({ skill })

		assert.isEqualDeep(passedThemed, { name: 'Theme', props: expected })
	}

	private static async GoodSkillWithTheme() {
		return this.TestSkillWithViewFilesInPlace('skill-with-theme')
	}

	private static async BadSkill() {
		return this.TestSkillWithViewFilesInPlace('broken-skill')
	}

	private static async emitGetSkillViews(skill: Skill) {
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
