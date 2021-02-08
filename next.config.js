module.exports = {
  ...require('next-images')(),
  async redirects () {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: false
      }
    ]
  }
}
