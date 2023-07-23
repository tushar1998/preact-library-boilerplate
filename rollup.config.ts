import typescript from "@rollup/plugin-typescript";
import nodeResolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import { type RollupOptions } from "rollup";
import terser from "@rollup/plugin-terser";
import del from "rollup-plugin-delete";

const config: RollupOptions = {
  input: "./src/index.tsx",
  output: [
    {
      file: "./lib/index-esm.js",
      format: "esm"
    },
    {
      file: "./lib/index.js",
      format: "cjs"
    }
  ],
  plugins: [
    del({ targets: "lib/*", runOnce: true }),
    nodeResolve(),
    commonjs(),
    typescript({ tsconfig: "./tsconfig.build.json" }),
    terser()
  ],
  external: ["react"]
};

export default config;
