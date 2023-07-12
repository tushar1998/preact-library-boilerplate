module.exports = {
  preset: "ts-jest",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
  // moduleDirectories: ["node_modules"],
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(j|t)sx$": ["ts-jest"]
  },
  transformIgnorePatterns: ["node_modules"],
  moduleNameMapper: {
    "^react$": "preact/compat",
    "^react-dom$": "preact/compat",
    "^react-dom/test-utils$": "preact/test-utils",
    "^react/jsx-runtime$": "preact/jsx-runtime",
    "^.+\\.(css|sass|scss|less)$": "identity-obj-proxy"
  },
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"]
};
