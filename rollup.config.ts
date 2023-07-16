import typescript from "@rollup/plugin-typescript";
import alias from "@rollup/plugin-alias";
import nodeResolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import { type RollupOptions } from "rollup";
import postcss from "rollup-plugin-postcss";
// import terser from "@rollup/plugin-terser";

const appendStyles = (css: string): string => {
  return `const styleFunction = () => {
  const shadowHost = document.getElementById("preact-library");

  const findAndAppend = (rootElement, element) => {
    const findStyle = rootElement.getElementById("preact-library-style");
    if(!findStyle){
      const style = document.createElement("style");
      style.setAttribute("type", "text/css");
      style.setAttribute("id", "preact-library-style");
      style.innerHTML = ${css};
      if(element){
        document[element].appendChild(style);
        return;
      }
      rootElement.prepend(style);
      return;
    }
    findStyle.innerHTML = findStyle.innerHTML.concat(${css});
    return;
  }

  if(!shadowHost) {
    findAndAppend(document, "head");
    return;
  }

  const shadowRoot = shadowHost.shadowRoot;
  findAndAppend(shadowRoot);
};

document.addEventListener("DOMContentLoaded", styleFunction);`;
};

const config: RollupOptions = {
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
    typescript({ tsconfig: "./tsconfig.build.json" }),
    postcss({
      modules: true,
      autoModules: true,
      extensions: [".css", ".scss", ".module.scss", ".module.css"],
      inject: appendStyles
    })
    // terser()
  ]
};

export default config;
