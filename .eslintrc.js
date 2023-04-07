process.env.ESLINT_TSCONFIG = 'tsconfig.json'

module.exports = {
  extends: '@antfu',
  ignorePatterns: [
    '/vendor',
    'composer.lock',
    '*.scss',
  ],
}
