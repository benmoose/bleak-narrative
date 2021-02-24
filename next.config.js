module.exports = {
  ...require('next-images')(),
  // redirect for legacy reasons since we often linked to
  // /home and /feed on the wix site
  async redirects () {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: false
      },
      {
        source: '/feed',
        destination: '/',
        permanent: false
      }
    ]
  },
  images: {
    domains: ['images.prismic.io']
  }
}
