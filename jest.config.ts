module.exports = {
  preset: "ts-jest",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(j|t)sx$": ["ts-jest"]
  },
  transformIgnorePatterns: ["node_modules"],
  moduleNameMapper: {
    "^.+\\.(css|sass|scss|less)$": "identity-obj-proxy"
  },
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"]
};
