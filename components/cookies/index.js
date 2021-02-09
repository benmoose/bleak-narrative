import React, { useState } from 'react'
import NextLink from 'next/link'
import c from 'classnames'

import { setCookieConsent } from '../../utils/cookies'
import styles from './cookies.module.css'

const CookieConsent = () => {
  const [hide, setHidden] = useState(false)
  const dialogDismissed = () => {
    setCookieConsent()
    setHidden(true)
  }
  return (
    <div className={c(styles.container, { [styles.hide]: hide })}>
      <p>Bleak doesn't use cookies, though the embedded music players like those from Soundcloud & Spotify might.</p>
      <p>We also don't use Google Analytics on our site 👊</p>
      <div className={styles.buttonContainer}>
        <button className={styles.primary} onClick={dialogDismissed}>Got it</button>
        <NextLink href='/privacy'><a className={styles.secondary}>Learn more</a></NextLink>
      </div>
    </div>
  )
}

export default CookieConsent
