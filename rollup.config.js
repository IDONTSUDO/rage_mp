/* eslint-disable */
import nodeResolve from 'rollup-plugin-node-resolve';
import multiEntry from "rollup-plugin-multi-entry";

import pkg from './package.json';
import env from "./env.json"
const config = {
    input: './src/**/*.js',
    external: [...Object.keys(pkg.dependencies), 'os'],
    output: [{
        file: env.out,
        format: 'iife',
    }],
    plugins: [multiEntry(), nodeResolve()]
};

export default config;