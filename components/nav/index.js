import React from 'react'
import Link from 'next/link'
import c from 'classnames'

import styles from './nav.module.css'
import bleakLogo from '../../public/img/bleak-icon.png'
import soundcloudLogo from '../../public/icons/soundcloud.svg'

const Nav = () => {
  return (
    <nav className={styles.background}>
      <div className={styles.navContainer}>
        <div className={styles.navSection}></div>
        <div className={c(styles.navSection, styles.textCentre)}>
          <Link href="/">
            <a className={styles.brandLink}>
              <img src={bleakLogo} style={{width: "62px"}} alt="Bleak Narrative" />
            </a>
          </Link>
        </div>
        <div className={c(styles.navSection, styles.textRight)}>
          <a target="_blank" href="https://soundcloud.com/bleaknarrative">
            <img className={styles.soundcloud} src={soundcloudLogo} />
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Nav
