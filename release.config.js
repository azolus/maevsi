module.exports = {
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@semantic-release/changelog',
    ['@semantic-release/npm', {
      pkgRoot: './nuxt'
    }],
    '@semantic-release/github',
    ['@semantic-release/git', {
      'assets': ['CHANGELOG.md', './nuxt/package.json']
    }]
  ],
  tagFormat: '${version}'
}
