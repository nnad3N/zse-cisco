module.exports = {
  collectCoverageFrom: ['**/*.{js,jsx,ts,tsx}', '!**/*.d.ts', '!**/node_modules/**'],
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '^__mocks__/(.*)$': '<rootDir>/__mocks__/$1',
    '^utils/(.*)$': '<rootDir>/utils/$1',
    '^types/(.*)$': '<rootDir>/types/$1',
    '^assets/(.*)$': '<rootDir>/assets/$1',
    '^providers/(.*)$': '<rootDir>/providers/$1',
    '^components/(.*)$': '<rootDir>/components/$1',
    '^@atoms/(.*)$': '<rootDir>/components/atoms/$1',
    '^@molecules/(.*)$': '<rootDir>/components/molecules/$1',
    '^@organisms/(.*)$': '<rootDir>/components/organisms/$1',
    '^@sections/(.*)$': '<rootDir>/components/sections/$1',
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/.next/'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }],
  },
  transformIgnorePatterns: ['/node_modules/', '^.+\\.module\\.(css|sass|scss)$'],
};
