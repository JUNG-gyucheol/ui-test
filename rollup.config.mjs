import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import url from '@rollup/plugin-url'
import { terser } from 'rollup-plugin-terser'
import pkg from './package.json' assert { type: 'json' }
import * as react from 'react'

export default {
  input: 'src/index.ts',
  output: [
    { file: pkg.main, format: 'cjs', sourcemap: true, interop: 'compat' },
    { file: pkg.module, format: 'es', sourcemap: true, interop: 'compat' },
  ],
  plugins: [url(), typescript(), commonjs(), terser()],
}
