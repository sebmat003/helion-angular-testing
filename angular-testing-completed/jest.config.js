module.exports = {
  preset: "jest-preset-angular",
  setupFilesAfterEnv: ["<rootDir>/setup-jest.ts"],
  transformIgnorePatterns: [
    "<rootDir>/node_modules/(?!lodash-es|@angular|@ngneat|ng2-charts|@ngrx)",
  ],
};
