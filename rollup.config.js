import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import html from 'rollup-plugin-html'
import postcss from 'rollup-plugin-postcss'
import babel from 'rollup-plugin-babel'
import livereload from 'rollup-plugin-livereload'
import serve from 'rollup-plugin-serve'
import filesize from 'rollup-plugin-filesize'
import size from 'rollup-plugin-sizes'
import visualize from 'rollup-plugin-visualizer'
import { terser } from "rollup-plugin-terser"
import pkg from './package.json'

const dev = !!process.env.DEV
const analyzeBundle = !!process.env.ANALYZE_BUNDLE

const plugins = [
  babel({ exclude: 'node_modules/**' }),
  html(),
  postcss(),
  size(),
  filesize(),
]

dev && plugins.push(
  serve({ contentBase: ['dist', 'public'], host: '0.0.0.0', port: '8080' }),
  livereload({ watch: ['dist', 'public'] })
  )

analyzeBundle && plugins.push(
  visualize({ open: true })
)

const rollupConfig = [
  {
    input: 'src/skeleton.js',
    external: ['clappr'],
    output: {
      name: 'SkeletonPlugin',
      file: pkg.main,
      format: 'umd',
      globals: { 'clappr': 'Clappr' }
    },
    plugins: [
      resolve(),
      commonjs(),
      ...plugins
    ]
  },
  {
    input: 'src/skeleton.js',
    external: ['clappr'],
    output: [
      {
        name: 'SkeletonPlugin',
        file: 'dist/clappr-skeleton-plugin.min.js',
        format: 'umd',
        globals: { 'clappr': 'Clappr' }
      }
    ],
    plugins: [
      terser({ include: [/^.+\.min\.js$/] }),
      ...plugins
    ],
  },
  {
    input: 'src/skeleton.js',
	  external: ['clappr'],
	  output: [
      {
        name: 'SkeletonPlugin',
        file: pkg.module,
        format: 'esm',
        globals: { 'clappr': 'Clappr' }
      }
	  ],
	  plugins
  }
]

export default rollupConfig