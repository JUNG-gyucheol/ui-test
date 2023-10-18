import { nodeResolve } from '@rollup/plugin-node-resolve'
import babel from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import url from '@rollup/plugin-url'
import { terser } from 'rollup-plugin-terser'
import pkg from './package.json' assert { type: 'json' }

export default {
  input: 'src/index.ts',
  output: [
    { file: pkg.main, format: 'cjs', interop: 'compat' },
    { file: pkg.module, format: 'es', interop: 'compat' },
  ],
  external: ['react', 'react-collapsed', 'styled-components', 'styled-system'],
  plugins: [url(), typescript(), commonjs(), terser()],
}
