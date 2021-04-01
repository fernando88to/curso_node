// configuração do testes funcionais
const { resolve } = require('path');
const root = resolve(__dirname, '..');
// pega as configurações globais
const rootConfig = require(`${root}/jest.config.js`);

// sobrescreve as configurações globais localizadas no arquio jest.config.js
// merge de objetos
module.exports = {...rootConfig, ...{
        rootDir: root,
        displayName: "end2end-tests",
        setupFilesAfterEnv: ["<rootDir>/test/jest-setup.ts"],
        testMatch: ["<rootDir>/test/**/*.test.ts"],
    }}