
module.exports = {
  verbose: true,
  transform: {
    '^.+\\.js$': 'babel-jest',
    '^.+\\.html$': '<rootDir>/src/__mocks__/htmlMock.js',
  },
  moduleNameMapper: { '\\.(scss)$': '<rootDir>/src/__mocks__/styleMock.js' },
  collectCoverageFrom: ['src/*.js'],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
}
