import {Helmet} from 'react-helmet'
import Layout from '../enhancers/layout'

import '../public/css/reboot.css'
import '../public/css/global.css'

export default Layout(({ Component, pageProps }) => {
  return (
    <>
      <Helmet>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Permanent+Marker&family=Noto+Sans+HK&family=Ubuntu+Mono:wght@400;700&display=swap" rel="stylesheet" />
      </Helmet>
      <Component {...pageProps} />
    </>
  )
})
