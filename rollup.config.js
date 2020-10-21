import { createBabelInputPluginFactory } from '@rollup/plugin-babel'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import html from 'rollup-plugin-html'
import postcss from 'rollup-plugin-postcss'
import filesize from 'rollup-plugin-filesize'
import size from 'rollup-plugin-sizes'
import visualize from 'rollup-plugin-visualizer'
import { terser } from 'rollup-plugin-terser'
import pkg from './package.json'

const analyzeBundle = !!process.env.ANALYZE_BUNDLE
const minimize = !!process.env.MINIMIZE

const babelPluginForUMDBundle = createBabelInputPluginFactory()
const babelPluginForESMBundle = createBabelInputPluginFactory()
const babelPluginOptions = { presets: [['@babel/preset-env', { modules: false }]], exclude: 'node_modules/**', babelHelpers: 'bundled' }

const plugins = [
  html(),
  postcss(),
  size(),
  filesize(),
  analyzeBundle && visualize({ open: true }),
]

const mainBundle = {
  input: 'src/skeleton.js',
  external: ['@clappr/core'],
  output: [
    {
      name: 'SkeletonPlugin',
      file: pkg.main,
      format: 'umd',
      globals: { '@clappr/core': 'Clappr' },
    },
    minimize && {
      name: 'SkeletonPlugin',
      file: 'dist/clappr-skeleton-plugin.min.js',
      format: 'umd',
      globals: { '@clappr/core': 'Clappr' },
      plugins: terser(),
    },
  ],
  plugins: [babelPluginForUMDBundle(babelPluginOptions), resolve(), commonjs(), ...plugins],
}

const esmBundle = {
  input: 'src/skeleton.js',
  external: ['@clappr/core', /@babel\/runtime/],
  output: {
    name: 'SkeletonPlugin',
    file: pkg.module,
    format: 'esm',
    globals: { '@clappr/core': 'Clappr' },
  },
  plugins: [
    babelPluginForESMBundle({
      ...babelPluginOptions,
      plugins: ['@babel/plugin-transform-runtime'],
      babelHelpers: 'runtime',
    }),
    ...plugins,
  ],
}

export default [mainBundle, esmBundle]
