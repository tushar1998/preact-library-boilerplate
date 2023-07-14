module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ["standard-with-typescript", "plugin:react/recommended"],
  parserOptions: {
    project: "./tsconfig.json",
    ecmaVersion: "latest",
    sourceType: "module"
  },
  plugins: ["react"],
  rules: {
    "@typescript-eslint/quotes": [
      "error",
      "double",
      { allowTemplateLiterals: true }
    ],
    "@typescript-eslint/semi": ["error", "always"],
    "@typescript-eslint/no-floating-promises": ["error", { ignoreVoid: true }],
    "react/react-in-jsx-scope": "off"
  },
  settings: {
    react: {
      version: "18",
      pragma: "h"
    }
  },
  overrides: [
    {
      env: {
        node: true
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        // project: "./tsconfig.json",
        sourceType: "script"
      }
    }
  ],
  ignorePatterns: ["node_modules", "dist", "lib", "build"]
};
