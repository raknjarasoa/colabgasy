// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  // All imported modules in your tests should be mocked automatically
  // automock: false,

  // Respect "browser" field in package.json when resolving modules
  // browser: false,

  // The directory where Jest should store its cached dependency information
  // cacheDirectory: "/tmp/jest_rs",

  // Automatically clear mock calls and instances between every test
  // clearMocks: false,

  // The directory where Jest should output its coverage files
  coverageDirectory: 'coverage',

  // A list of reporter names that Jest uses when writing coverage reports
  // coverageReporters: [
  //   "json",
  //   "text",
  //   "lcov",
  //   "clover"
  // ],

  // Make calling deprecated APIs throw helpful error messages
  // errorOnDeprecated: false,

  // A set of global variables that need to be available in all test environments
  /*globals: {
    'ts-jest': {
      tsConfigFile: 'tsconfig.json'
    }
  },*/

  // An array of file extensions your modules use
  moduleFileExtensions: ['ts', 'tsx', 'js'],

  // Activates notifications for test results
  // notify: false,

  // An enum that specifies notification mode. Requires { notify: true }
  // notifyMode: "always",

  // A preset that is used as a base for Jest's configuration
  preset: 'jest-preset-angular',

  // Use this configuration option to add custom reporters to Jest
  // reporters: undefined,

  // Automatically reset mock state between every test
  // resetMocks: false,

  // Reset the module registry before running each individual test
  // resetModules: false,

  // A path to a custom resolver
  // resolver: null,

  // The root directory that Jest should scan for tests and modules within
  // rootDir: null,

  // A list of paths to directories that Jest should use to search for files in
  roots: ['src'],

  // The path to a module that runs some code to configure or set up the testing framework before each test
  setupTestFrameworkScriptFile: '<rootDir>/src/setupJest.ts',

  // The test environment that will be used for testing
  // testEnvironment: "jest-environment-jsdom",

  // The glob patterns Jest uses to detect test files
  //testMatch: ['**/__tests__/*.+(ts|tsx|js)'],

  // An array of regexp pattern strings that are matched against all test paths, matched tests are skipped
  // testPathIgnorePatterns: [
  //   "/node_modules/"
  // ],

  // A map from regular expressions to paths to transformers
  /*transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest'
  }*/

  // An array of regexp pattern strings that are matched against all source file paths, matched files will skip transformation
  // transformIgnorePatterns: [
  //   "/node_modules/"
  // ],

  // Whether to use watchman for file crawling
  // watchman: true,
  coveragePathIgnorePatterns: ["jestGlobalMocks.ts"]
};
