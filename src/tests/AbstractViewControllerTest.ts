import {
    ViewControllerId,
    ControllerOptions,
    SkillViewController,
    RenderOptions,
    ViewController,
    renderUtil,
} from '@sprucelabs/heartwood-view-controllers'
import {
    AbstractSpruceFixtureTest,
    ArgsFromSvc,
    SpyScope,
    ViewControllerFixture,
} from '@sprucelabs/spruce-test-fixtures'

export default abstract class AbstractViewControllerTest extends AbstractSpruceFixtureTest {
    protected static vcDir?: string
    protected static controllerMap: Record<string, any> | undefined
    private static viewFixture?: ViewControllerFixture

    private static _scope?: SpyScope

    protected static get scope(): SpyScope {
        if (!this._scope) {
            this._scope = this.views.getScope()
        }
        return this._scope
    }

    protected static set scope(scope: SpyScope | undefined) {
        this._scope = scope
    }

    public static get views(): ViewControllerFixture {
        if (!this.viewFixture) {
            this.viewFixture = this.Fixture('view', {
                controllerMap: this.controllerMap,
                vcDir: this.vcDir,
            })
        }

        return this.viewFixture
    }

    public static set views(views: ViewControllerFixture | undefined) {
        this.viewFixture = views
    }

    protected static async beforeEach(): Promise<void> {
        this.viewFixture = undefined
        this._scope = undefined
        await super.beforeEach()
    }

    protected static Controller<N extends ViewControllerId>(
        name: N,
        options: ControllerOptions<N>
    ) {
        const controller = this.views.Controller(name, options)

        return controller
    }

    protected static getViewControllerFactory() {
        return this.views.getFactory()
    }

    protected static async load<Svc extends SkillViewController>(
        vc: Pick<Svc, 'load'>,
        args?: ArgsFromSvc<Svc>
    ) {
        return this.views.load(vc, args)
    }

    protected static render<Vc extends ViewController<any>>(
        vc: Vc,
        options?: RenderOptions | undefined
    ): ReturnType<Vc['render']> {
        return renderUtil.render(vc, options)
    }
}
