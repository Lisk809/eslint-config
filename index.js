const { defineConfig } = require('eslint-define-config')
const { isPackageExists } = require('local-pkg')

const isTsProject = isPackageExists('typescript')

const preset = isTsProject ? '@kigoo/eslint-config-ts' : '@kigoo/eslint-config-vanilla'

module.exports = defineConfig({
  extends: [preset],
})
