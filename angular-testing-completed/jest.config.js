module.exports = {
  preset: "jest-preset-angular",
  setupFilesAfterEnv: ["<rootDir>/setup-jest.ts"],
  moduleDirectories: ["node_modules", "<rootDir>"],
  transformIgnorePatterns: [
    "<rootDir>/node_modules/(?!lodash-es|@angular|@ngneat|ng2-charts|@ngrx)",
  ],
};
