import resolve from "@rollup/plugin-node-resolve";
import { terser } from "rollup-plugin-terser";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import postcss from "rollup-plugin-postcss";

export default [
    {
        input: "src/index.ts",
        output: [
            {
                file: "./dist/cjs/index.js",
                format: "cjs",
            },
            {
                file: "./dist/esm/index.js",
                format: "esm",
            },
        ],
        plugins: [postcss(), resolve(), commonjs(), typescript(), terser()],
        external: ["react", "react-dom", /@emotion.*$/],
    },
    {
        input: "dist/esm/index.d.ts",
        output: [{ file: "dist/index.d.ts", format: "esm" }],
        external: [/\.css$/],
        plugins: [dts()],
    },
];
