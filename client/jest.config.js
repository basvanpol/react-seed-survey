module.exports = {
    // Automatically clear mock calls and instances between every test
    clearMocks: true,

    // A list of paths to directories that Jest should use to search for files in
    roots: [
        "<rootDir>/src"
    ],

    // The test environment that will be used for testing
    testEnvironment: "node",
    setupFilesAfterEnv: ["<rootDir>/src/setupEnzyme.ts"],

    // The regexp pattern or array of patterns that Jest uses to detect test files
    testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",

    // Mapping styling files to objects
    moduleNameMapper: {
        "\\.(scss|less)$": "identity-obj-proxy"
    }
};