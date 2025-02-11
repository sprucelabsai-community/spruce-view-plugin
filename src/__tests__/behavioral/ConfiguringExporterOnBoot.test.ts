import {
    SpyViewControllerExporter,
    ViewControllerExporter,
} from '@sprucelabs/heartwood-view-controllers'
import { diskUtil } from '@sprucelabs/spruce-skill-utils'
import { fake } from '@sprucelabs/spruce-test-fixtures'
import { test, assert } from '@sprucelabs/test-utils'
import AbstractViewPluginTest from '../../tests/AbstractViewPluginTest'

@fake.login()
export default class WritingProfileStatsOnBootTest extends AbstractViewPluginTest {
    protected static async beforeEach(): Promise<void> {
        await super.beforeEach()
        ViewControllerExporter.Class = SpyViewControllerExporter
        delete SpyViewControllerExporter.instance

        const destinationDir = diskUtil.createRandomTempDir()
        process.env.VIEW_PROFILER_STATS_DESTINATION_DIR = destinationDir
        delete process.env.SHOULD_VIEWS_GENERATE_SOURCE_MAPS
    }

    @test()
    protected static async writesProfileStatsIfEnvSet() {
        await this.bootGoodSkill()

        const expected = this.resolvePath(
            process.env.VIEW_PROFILER_STATS_DESTINATION_DIR!,
            'stats.json'
        )
        const config = this.getConfig()

        assert.isTrue(
            config?.stats as boolean,
            'Stats not set in webpack config'
        )

        assert.isTrue(diskUtil.doesFileExist(expected))
    }

    @test()
    protected static async enablesSourceMappingIfEnvIsTrue() {
        process.env.SHOULD_VIEWS_GENERATE_SOURCE_MAPS = 'true'
        await this.bootGoodSkill()
        const config = this.getConfig()
        assert.isEqual(config?.devtool, 'inline-source-map')
    }

    @test()
    protected static async shouldNotSourceMapIfEnvDoesNotExist() {
        await this.bootGoodSkill()
        const config = this.getConfig()
        assert.isFalsy(config?.devtool)
    }

    @test()
    protected static async shouldNotSourceMapIfEnvIsFalse() {
        process.env.SHOULD_VIEWS_GENERATE_SOURCE_MAPS = 'false'
        await this.bootGoodSkill()
        const config = this.getConfig()
        assert.isFalsy(config?.devtool)
    }

    private static getConfig() {
        return this.exporter.getConfig()
    }

    private static async bootGoodSkill() {
        await this.importEventContractSeedAndRegisterSkill()

        const skill = await this.GoodSkill()
        await this.bootSkill({ skill })
    }

    private static get exporter(): SpyViewControllerExporter {
        const exporter = SpyViewControllerExporter.instance
        assert.isTruthy(exporter, 'No exporter was created')
        return exporter
    }
}
