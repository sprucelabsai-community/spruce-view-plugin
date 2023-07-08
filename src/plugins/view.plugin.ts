import AbstractSpruceError from '@sprucelabs/error'
import { ViewControllerExporter } from '@sprucelabs/heartwood-view-controllers'
import { MercuryClient } from '@sprucelabs/mercury-client'
import { EventFeature } from '@sprucelabs/spruce-event-plugin'
import {
	BootCallback,
	diskUtil,
	Log,
	SettingsService,
	Skill,
	SkillFeature,
} from '@sprucelabs/spruce-skill-utils'
import {
	vcDiskUtil,
	ViewHealthCheckItem,
} from '@sprucelabs/spruce-test-fixtures'

require('dotenv').config()

export class ViewFeature implements SkillFeature {
	private skill: Skill
	private _isBooted = false
	private log: Log
	private bootHandler?: BootCallback
	private exporter!: ViewControllerExporter
	private viewsSource!: string | false
	private exportDestination?: string

	public constructor(skill: Skill) {
		this.skill = skill
		this.log = skill.buildLog('View.Feature')
	}
	public onBoot(cb: BootCallback): void {
		this.bootHandler = cb
	}

	public async execute(): Promise<void> {
		this.exporter = ViewControllerExporter.Exporter(this.skill.rootDir)
		this.viewsSource = vcDiskUtil.resolveCombinedViewsPath(
			diskUtil.resolvePath(this.skill.rootDir, 'src')
		)

		if (process.env.SHOULD_REGISTER_VIEWS !== 'false') {
			await this.exportAndRegister()
		} else if (process.env.VIEW_PROFILER_STATS_DESTINATION_DIR) {
			await this.export()
		}

		await this.bootHandler?.()

		this._isBooted = true

		if (this.isWatching) {
			this.log.info('Watching for view changes...')
			await new Promise(() => {})
		}
	}

	private async exportAndRegister() {
		if (this.viewsSource) {
			this.log.info('Importing local views.')
			await this.export()
			await this.registerSource()
		}
	}

	private async registerSource() {
		if (this.exportDestination) {
			const source = diskUtil.readFile(this.exportDestination)
			const events = this.skill.getFeatureByCode('event') as EventFeature
			const client = (await events.connectToApi()) as MercuryClient<any>
			const { ids, theme } = vcDiskUtil.loadViewControllers(
				this.skill.activeDir
			)
			this.log.info(
				`Bundled ${ids.length} view controllers. Registering now...`
			)

			await client.emitAndFlattenResponses(
				'heartwood.register-skill-views::v2021_02_11',
				{
					payload: {
						source,
						ids,
						theme,
					},
				}
			)

			this.log.info('Done registering view controllers.')
		}
	}

	private async export() {
		if (!this.viewsSource) {
			return
		}
		const destination = diskUtil.resolvePath(
			diskUtil.createRandomTempDir(),
			'bundle.js'
		)

		this.exportDestination = destination

		debugger

		await this.exporter?.export({
			source: this.viewsSource,
			destination,
			profilerStatsDestination: process.env.VIEW_PROFILER_STATS_DESTINATION_DIR,
			shouldWatch: this.isWatching,
			onDidIncrementallyBuild: (err) => {
				if (err) {
					this.log.error('Incremental build error', err.stack ?? err.message)
				} else {
					this.log.info('Incremental build complete!')
					void this.registerSource()
				}
			},
			onWillIncrementallyBuild: () => {
				this.log.info('Changes detected... Building differences.')
			},
		})

		this.log.info('Bundling local views.')
	}

	public async checkHealth(): Promise<ViewHealthCheckItem> {
		let svcs: any[] = []
		let vcs: any[] = []

		try {
			const loaded = vcDiskUtil.loadViewControllers(this.skill.activeDir, {
				shouldThrowOnError: false,
			})
			svcs = loaded.svcs
			vcs = loaded.vcs
			// eslint-disable-next-line no-empty
		} catch {}

		const errors: AbstractSpruceError[] = []

		const map = (svc: any) => {
			const item: any = {
				id: svc.id,
			}

			if (svc.error) {
				item.error = svc.error
				errors.push(svc.error)
			}

			return item
		}

		const health: ViewHealthCheckItem = {
			status: 'passed',
			skillViewControllers: svcs.map(map),
			viewControllers: vcs.map(map),
		}

		if (errors.length > 0) {
			health.errors = errors
		}

		return health
	}

	public async isInstalled(): Promise<boolean> {
		const settings = new SettingsService(this.skill.rootDir)
		return settings.isMarkedAsInstalled('view')
	}

	public async destroy() {
		await this.exporter.kill()
	}

	public isBooted() {
		return this._isBooted
	}

	private get isWatching() {
		return process.env.SHOULD_WATCH_VIEWS === 'true'
	}
}

export default (skill: Skill) => {
	const feature = new ViewFeature(skill)
	skill.registerFeature('view', feature)
}
