export default {
  testEnvironment: "node",
  collectCoverage: true,
  collectCoverageFrom: [
    "src/**/*.js",
    "!src/**/.internal/**"
  ],
  coveragePathIgnorePatterns: [
    "/node_modules/",
    "/src/.internal/"
  ],
  testPathIgnorePatterns: [
    "/node_modules/",
    "/src/.internal/"
  ]
};