module.exports = {
  roots: ['<rootDir>/tests'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  moduleNameMapper: {
    '\\.(css|less)$': 'identity-obj-proxy'
  },
  setupFilesAfterEnv: ['<rootDir>enzyme.setup.js', '<rootDir>jest.setup.js'],
  snapshotSerializers: ['jest-serializer-html'],
  timers: 'real'
}
