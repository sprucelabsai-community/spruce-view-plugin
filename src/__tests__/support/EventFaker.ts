import { eventFaker } from '@sprucelabs/spruce-test-fixtures'

export default class EventFaker {
	public async fakeGetSkillViews(
		cb?: (targetAndPayload: Record<string, any>) => void
	) {
		await eventFaker.on(
			//@ts-ignore
			'heartwood.get-skill-views::v2021_02_11',
			//@ts-ignore
			(targetAndPayload) => {
				cb?.(targetAndPayload)
			}
		)
	}

	public async fakeRegisterSkillViews(
		cb?: (targetAndPayload: Record<string, any>) => void
	) {
		await eventFaker.on(
			//@ts-ignore
			'heartwood.register-skill-views::v2021_02_11',
			//@ts-ignore
			(targetAndPayload) => {
				cb?.(targetAndPayload)

				return {
					totalRegistered: 0,
				}
			}
		)
	}
}
