import typescript from "@rollup/plugin-typescript";
import nodeResolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import { type RollupOptions } from "rollup";
import terser from "@rollup/plugin-terser";

const config: RollupOptions = {
  input: "./src/index.tsx",
  output: [
    {
      file: "./lib/index.js",
      format: "umd",
      name: "reactLibrary"
    },
    {
      file: "./lib/index-esm.js",
      format: "esm"
    }
  ],
  plugins: [
    nodeResolve(),
    commonjs(),
    typescript({ tsconfig: "./tsconfig.build.json" }),
    terser()
  ]
};

export default config;
