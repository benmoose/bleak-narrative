import { Helmet } from 'react-helmet'
import 'react-bnb-gallery/dist/style.css'

import Layout from '../enhancers/layout'
import '../public/css/reboot.css'
import '../public/css/global.css'

export default Layout(({ Component, pageProps }) => {
  return (
    <>
      <Helmet>
        <title>Bleak Narrative</title>
        <link rel='icon' type='image/png' href='/img/bleak-fav.png' />
        <meta name='description' content="Artsy-fartsy, bleepy-bloopy music platform for underground schmucks. Don't take yourself too seriously and we'll get along just fine." />
        <meta name='robots' content='index, follow' />
        <script async defer data-domain='bleaknarrative.com' src='https://plausible.io/js/plausible.js' />
      </Helmet>
      <Component {...pageProps} />
    </>
  )
})
