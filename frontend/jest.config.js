const nextJest = require('next/jest');
const createJestConfig = nextJest({ dir: './' });

const customJestConfig = {
  moduleNameMapper: {
    '^__mocks__/(.*)$': '<rootDir>/__mocks__/$1',
    '^utils/(.*)$': '<rootDir>/utils/$1',
    '^hooks/(.*)$': '<rootDir>/hooks/$1',
    '^types/(.*)$': '<rootDir>/types/$1',
    '^assets/(.*)$': '<rootDir>/assets/$1',
    '^providers/(.*)$': '<rootDir>/providers/$1',
    '^propTypes/(.*)$': '<rootDir>/propTypes/$1',
    '^components/(.*)$': '<rootDir>/components/$1',
    '^@atoms/(.*)$': '<rootDir>/components/atoms/$1',
    '^@molecules/(.*)$': '<rootDir>/components/molecules/$1',
    '^@organisms/(.*)$': '<rootDir>/components/organisms/$1',
    '^@sections/(.*)$': '<rootDir>/components/sections/$1',
    '^@templates/(.*)$': '<rootDir>/components/templates/$1',
  },
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
};

module.exports = createJestConfig(customJestConfig);
