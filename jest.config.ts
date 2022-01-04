const Configuration = {
  moduleFileExtensions: ['js', 'json', 'ts'],
  rootDir: 'src',
  testRegex: '.*\\.spec\\.ts$',
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
  // moduleNameMapper: {
  //   '^~(.*)$': '<rootDir>/src/$1',
  // },
  collectCoverageFrom: ['**/*.(t|j)s'],
  coveragePathIgnorePatterns: [
    '.*\\.(interface|module|schema|entity|repository|dto).ts',
    'index.ts',
    'main.ts',
  ],
  coverageDirectory: '../coverage',
  testEnvironment: 'node',
}

export default Configuration
