module.exports = {
  moduleFileExtensions: ['js', 'json', 'ts'],
  rootDir: 'src',
  testRegex: '.*\\.spec\\.ts$',
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
  collectCoverageFrom: ['**/*.(t|j)s'],
  coverageDirectory: '../coverage',
  testEnvironment: 'node',
  moduleNameMapper: {
    '^@application/(.*)$': '<rootDir>/application/$1',
    '^@domain/(.*)$': '<rootDir>/domain/$1',
    '^@infrastructure/(.*)$': '<rootDir>/infrastructure/$1',
    '^@entities/(.*)$': '<rootDir>/domain/entities/$1',
    '^@interfaces/(.*)$': '<rootDir>/domain/interfaces/$1',
    '^@use-cases/(.*)$': '<rootDir>/application/use-cases/$1',
    '^@dtos/(.*)$': '<rootDir>/application/dtos/$1',
    '^@adapters/(.*)$': '<rootDir>/infrastructure/adapters/$1',
    '^@repositories/(.*)$': '<rootDir>/infrastructure/persistence/repositories/$1',
  },
};
