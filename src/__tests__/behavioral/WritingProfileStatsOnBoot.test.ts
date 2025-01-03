import { diskUtil } from '@sprucelabs/spruce-skill-utils'
import { fake } from '@sprucelabs/spruce-test-fixtures'
import { test, assert } from '@sprucelabs/test-utils'
import AbstractViewPluginTest from '../../tests/AbstractViewPluginTest'

@fake.login()
export default class WritingProfileStatsOnBootTest extends AbstractViewPluginTest {
    @test()
    protected static async writesProfileStatsIfEnvSet() {
        const destinationDir = diskUtil.createRandomTempDir()
        process.env.VIEW_PROFILER_STATS_DESTINATION_DIR = destinationDir

        await this.importEventContractSeedAndRegisterSkill()

        const skill = await this.GoodSkill()
        await this.bootSkill({ skill })

        const expected = this.resolvePath(destinationDir, 'stats.json')

        assert.isTrue(diskUtil.doesFileExist(expected))
    }
}
