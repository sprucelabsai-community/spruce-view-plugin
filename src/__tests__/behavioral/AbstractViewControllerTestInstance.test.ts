import globby from '@sprucelabs/globby'
import {
    cardSchema,
    formSchema,
    FormViewControllerImpl,
    vcAssert,
    ViewControllerId,
} from '@sprucelabs/heartwood-view-controllers'
import { validateSchemaValues, Schema } from '@sprucelabs/schema'
import { diskUtil } from '@sprucelabs/spruce-skill-utils'
import { assert, suite, test } from '@sprucelabs/test-utils'
import AbstractViewControllerTest from '../../tests/AbstractViewControllerTest'
// eslint-disable-next-line spruce/prohibit-import-from-build-folder
import BookSkillViewController from '../testDirsAndFiles/skill/build/skillViewControllers/Book.svc'
// eslint-disable-next-line spruce/prohibit-import-from-build-folder
import SpySkillViewController from '../testDirsAndFiles/skill/build/skillViewControllers/Spy.svc'

require('dotenv').config()

declare module '@sprucelabs/heartwood-view-controllers/build/types/heartwood.types' {
    interface ViewControllerMap {
        'view.book': BookSkillViewController
        'view.spy': SpySkillViewController
    }
}

@suite()
export default class AbstractViewControllerTestInstanceTest extends AbstractViewControllerTest {
    protected vcDir?: string

    protected async beforeEach() {
        await super.beforeEach()
        delete this.controllerMap
        this.vcDir = diskUtil.resolvePath(
            __dirname,
            '..',
            'testDirsAndFiles',
            'skill',
            'build'
        )
    }

    @test()
    protected hasControllerFactoryMethod() {
        assert.isFunction(this.Controller)
    }

    @test()
    protected hasScope() {
        debugger
        assert.isEqual(this.scope, this.views.getScope())
        const scope = {}

        //@ts-ignore
        this.scope = scope
        assert.isEqual(this.scope, scope)
    }

    @test()
    protected scopeIsReset() {
        assert.isEqual(this.scope, this.views.getScope())
    }

    @test()
    protected registeringSkillViewsFalseByDefault() {
        assert.isEqual(process.env.SHOULD_REGISTER_VIEWS, 'false')
    }

    @test()
    protected async throwsErrorWithBadDir() {
        const oldDir = this.vcDir
        this.vcDir = 'taco'
        const err = assert.doesThrow(() => this.Controller('view.book', {}))
        assert.doesInclude(err.message, /.spruce/)
        this.vcDir = oldDir
    }

    @test()
    protected async buildController() {
        const vc = this.Controller('view.book', {})

        assert.isTruthy(vc)
        const model = vc.render()
        assert.isTruthy(model)
    }

    @test()
    protected async canBuildControllersSourcedFromTsFiles() {
        this.cwd = await this.copySkillFromTestDirToTmpDir2('skill')
        this.vcDir = this.resolvePath(this.cwd, 'build')

        const matches = await globby(this.resolvePath('build', '**/*.js'), {
            dot: true,
        })
        for (const source of matches) {
            const destination = source.replace('.js', '.ts')
            diskUtil.moveFile(source, destination)
        }

        const vc = this.Controller('view.book', {})
        assert.isTruthy(vc)
        const model = vc.render()
        assert.isTruthy(model)
    }

    @test('can render card', 'card', cardSchema)
    @test('can render form', 'form', formSchema, {
        id: 'test',
        schema: { id: 'test', fields: {} },
        setValue: () => {},
        sections: [{}],
    })
    protected async canRenderSkillViewController(
        id: ViewControllerId,
        schema: Schema,
        options: any = {}
    ) {
        const model = this.render(this.Controller(id, options))
        validateSchemaValues(schema, model)
    }

    @test()
    protected async canLoadSvc() {
        const spySvc = this.Controller('view.spy', {})
        await this.load(spySvc)
    }

    @test('can pass through args 1')
    @test('can pass through args 2', { hello: 'again' })
    protected async canPassArgsThroughToLoad(args = { hello: 'world' }) {
        const spySvc = this.Controller('view.spy', {})
        await this.load(spySvc, args)
        assert.isEqualDeep(spySvc.loads.pop()?.args, args)
    }

    @test()
    protected async usesThisControllerMapIfPresent() {
        //@ts-ignore
        assert.doesThrow(() => this.Controller('cheesey', {}))

        this.controllerMap = {
            cheesey: FormViewControllerImpl,
        }

        //@ts-ignore
        this.views = undefined

        //@ts-ignore
        const vc = this.Controller('cheesey', {})
        assert.isTrue(vc instanceof FormViewControllerImpl)
    }

    @test()
    protected canUsevcAssert() {
        this.controllerMap = {
            [`view.spy`]: SpySkillViewController,
        }

        const svc = this.Controller('view.spy', {})
        vcAssert.assertSkillViewRendersCard(svc)
    }

    @test()
    protected sharesVcFactory() {
        const factory = this.getViewControllerFactory()
        const fixture = this.Fixture('view')
        assert.isEqual(factory, fixture.getFactory())
    }

    private async copySkillFromTestDirToTmpDir2(
        testDirName: string
    ): Promise<string> {
        const destination = this.resolvePath(
            process.cwd(),
            'build',
            '__tests__',
            '/testDirsAndFiles/',
            `${new Date().getTime()}`
        )
        const source = this.resolvePath(
            process.cwd(),
            'build',
            '__tests__',
            '/testDirsAndFiles/',
            testDirName
        )

        await diskUtil.copyDir(source, destination)
        return destination
    }
}
