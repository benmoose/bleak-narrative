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
      </Helmet>
      <Component {...pageProps} />
    </>
  )
})
