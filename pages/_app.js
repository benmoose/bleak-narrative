import { Helmet } from 'react-helmet'
import Layout from '../enhancers/layout'

import 'react-bnb-gallery/dist/style.css'
import '../public/css/reboot.css'
import '../public/css/global.css'

export default Layout(({ Component, pageProps }) => {
  return (
    <>
      <Helmet>
        <title>Bleak Narrative</title>
        <link rel='apple-touch-icon' sizes='180x180' href='/img/apple-touch-icon.png' />
        <link rel='icon' type='image/png' href='/img/favicon-32x32.png' />
      </Helmet>
      <Component {...pageProps} />
    </>
  )
})
