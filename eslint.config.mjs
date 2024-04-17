import { buildEsLintConfig } from 'eslint-config-spruce'

export default buildEsLintConfig({
	ignores: [
		'build/**',
		'esm/**',
		'node_modules/**',
		'src/tests/events.contract.ts',
		'**/testDirsAndFiles/**',
	],
})
