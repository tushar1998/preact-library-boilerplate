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
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
  collectCoverage: true,
  // collectCoverageFrom: ["src/**/*.{ts|tsx}"],
  // coveragePathIgnorePatterns: ["src/**/*.{test|spec}.{ts|tsx}"],
  // coverageReporters: ["lcov"],
  coverageThreshold: {
    global: {
      branches: 85,
      functions: 85,
      lines: 85,
      statements: 85
    }
  }
};
