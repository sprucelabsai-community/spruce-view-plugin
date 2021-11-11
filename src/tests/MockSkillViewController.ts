import {
	AbstractSkillViewController,
	SpruceSchemas,
} from '@sprucelabs/heartwood-view-controllers'

export default class MockSkillViewController extends AbstractSkillViewController {
	public render(): SpruceSchemas.HeartwoodViewControllers.v2021_02_11.SkillView {
		return {
			layouts: [{}],
		}
	}
}
