import typescript from "@rollup/plugin-typescript";
import alias from "@rollup/plugin-alias";
import nodeResolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
// import terser from "@rollup/plugin-terser";

export default {
  input: "./src/index.tsx",
  output: [
    {
      file: "./lib/index.js",
      format: "umd",
      name: "preactLibrary"
    },
    {
      file: "./lib/index-esm.js",
      format: "esm"
    }
  ],
  plugins: [
    alias({
      entries: [
        { find: "react", replacement: "preact/compat" },
        { find: "react-dom", replacement: "preact/compat" },
        { find: "react-dom/test-utils", replacement: "preact/test-utils" },
        { find: "react/jsx-runtime", replacement: "preact/jsx-runtime" }
      ]
    }),
    nodeResolve(),
    commonjs(),
    typescript({ tsconfig: "./tsconfig.build.json" })
    // terser(),
  ]
};
