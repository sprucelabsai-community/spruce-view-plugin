import { MercuryClientFactory } from '@sprucelabs/mercury-client'
import { plugin as eventPlugin } from '@sprucelabs/spruce-event-plugin'
import { eventContractUtil } from '@sprucelabs/spruce-event-utils'
import { SkillFactoryOptions } from '@sprucelabs/spruce-skill-booter'
import { diskUtil } from '@sprucelabs/spruce-skill-utils'
import { AbstractSpruceFixtureTest } from '@sprucelabs/spruce-test-fixtures'
import { assert } from '@sprucelabs/test-utils'
import plugin from '../plugins/view.plugin'
import coreEventContracts from './events.contract'

export default abstract class AbstractViewPluginTest extends AbstractSpruceFixtureTest {
	protected static async beforeEach() {
		await super.beforeEach()
	}

	protected static Skill(options?: SkillFactoryOptions) {
		const { plugins = [eventPlugin, plugin] } = options ?? {}

		return super.Skill({
			plugins,
			...options,
		})
	}

	protected static resolveTestPathSrc(...pathAfterTestDirsAndFiles: string[]) {
		return this.resolvePath(
			__dirname,
			'..',
			'..',
			'src',
			'__tests__',
			'testDirsAndFiles',
			...pathAfterTestDirsAndFiles
		)
	}

	protected static async seedAndRegisterCurrentSkill() {
		const currentSkill = await this.Fixture('skill').seedDemoSkill({
			name: 'my skill with events',
		})

		process.env.SKILL_ID = currentSkill.id
		process.env.SKILL_API_KEY = currentSkill.apiKey
		return currentSkill
	}

	protected static async TestSkillWithViewFilesInPlace(testDir: string) {
		const skill = await this.SkillFromTestDir(testDir)
		const source = this.resolveTestPathSrc(testDir, 'src')
		const destination = diskUtil.resolvePath(skill.rootDir, 'src')
		await diskUtil.copyDir(source, destination)
		return skill
	}

	protected static async GoodSkill() {
		return this.TestSkillWithViewFilesInPlace('skill')
	}

	protected static async importEventContractSeedAndRegisterCurrentSkill() {
		const combined = eventContractUtil.unifyContracts(coreEventContracts as any)

		assert.isTruthy(combined)

		MercuryClientFactory.setDefaultContract(combined)

		return await this.seedAndRegisterCurrentSkill()
	}
}
