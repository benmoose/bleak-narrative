import c from 'classnames'
import { useRouter } from 'next/router'

import { isServer } from '../../utils/env'
import Nav from '../../components/nav'
import PageFooter from '../../components/pageFooter'
import CookieConsent from '../../components/cookies'
import { hasCookieConsent } from '../../utils/cookies'
import styles from './layout.module.css'

/**
 * Wraps the page in a layout with navigation and footer.
 */
const WithLayout = Page => props => {
  const router = useRouter()

  return (
    <>
      <div className={styles.navContainer}>
        <div className={c(styles.navInner, styles.maxPageWidth)}>
          <Nav pathname={router.asPath} />
        </div>
      </div>
      <main className={c(styles.main, styles.maxPageWidth)}>
        <Page {...props} />
      </main>
      <div className={styles.footer}>
        <div className={styles.maxPageWidth}>
          <PageFooter />
        </div>
      </div>
      {
        !isServer() && !hasCookieConsent() && <CookieConsent />
      }
    </>
  )
}

export default WithLayout
