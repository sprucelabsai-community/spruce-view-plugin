import { AbstractSkillViewController } from '@sprucelabs/heartwood-view-controllers'

export default class BookSkillViewController extends AbstractSkillViewController {
    public static id = 'book'
    public render() {
        return process.env.RENDER_OUTPUT as any
    }
}
