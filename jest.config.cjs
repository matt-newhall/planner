/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  // Jest Setup
  preset: "ts-jest",
  testEnvironment: "jsdom",

  // Coverage
  collectCoverage: true,
  collectCoverageFrom: ["apps/frontend/**/*.hook.{js,jsx,ts,tsx}"],
  coverageThreshold: {
    // Adjust/remove as necessary for your project
    global: {
      statements: 100,
      branches: 100,
      functions: 100,
      lines: 100,
    },
  },
  cacheDirectory: ".jest/cache",
  coverageDirectory: ".jest/coverage",

  moduleFileExtensions: ["ts", "tsx", "js"],
  moduleDirectories: ["apps/frontend/src", "node_modules"],

  // Not necessary, but add here if required
  // setupFiles: ['./jest/jest.setup.ts'],
}
