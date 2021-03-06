import typescript from 'rollup-plugin-typescript2';
// import builtins from 'rollup-plugin-node-builtins';
import polyfills from 'rollup-plugin-node-polyfills';
// import globals from 'rollup-plugin-node-globals';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

/**
 * We're shipping a prebuilt browser-ready ES module PouchDB with find and
 * live-find plugins, because that's pretty hard to achieve in a standard user
 * build config.
 */

export default {
  input: 'src/index.ts',
  output: {
    file: 'dist/index.js',
    format: 'es',
    sourcemap: true,
  },
  plugins: [
    resolve({
      browser: true,
      preferBuiltins: false,
    }),
    typescript(),
    commonjs(),
    // globals(),
    // builtins(),
    polyfills(),
  ],
}