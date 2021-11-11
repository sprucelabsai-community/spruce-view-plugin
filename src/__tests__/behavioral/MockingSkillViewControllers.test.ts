import { skillViewSchema } from '@sprucelabs/heartwood-view-controllers'
import { validateSchemaValues } from '@sprucelabs/schema'
import { test } from '@sprucelabs/test'
import AbstractViewControllerTest from '../../tests/AbstractViewControllerTest'
import MockSkillViewController from '../../tests/MockSkillViewController'

export default class MockingSkillViewControllersTest extends AbstractViewControllerTest {
	protected static controllerMap = {
		mock: MockSkillViewController,
	}

	@test()
	protected static async canRenderkMockSkillViewController() {
		const vc = this.Controller('mock' as any, {})
		const model = this.render(vc)

		validateSchemaValues(skillViewSchema, model)
	}
}
