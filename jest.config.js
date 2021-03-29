const { pathsToModuleNameMapper } = require('ts-jest/utils')
const { compilerOptions } = require('./tsconfig')

module.exports = {
    preset: 'jest-preset-angular',
    roots: ['./src'],
    testMatch: ['demo.spec.ts', '**/+(*.)+(spec).+(ts)'],
    setupFilesAfterEnv: ['./src/test.ts'],
    collectCoverage: true,
    verbose: true,
    coverageReporters: ['html'],
    coverageDirectory: '../coverage-ut/front-end',
    moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths || {}, {
        prefix: './'
    })
}