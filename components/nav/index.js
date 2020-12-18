import React from 'react'
import NextLink from 'next/link'
import c from 'classnames'

import styles from './nav.module.css'
import Link from '../link'
import bleakLogo from '../../public/img/bleak-icon.png'
import soundcloudLogo from '../../public/icons/soundcloud.svg'

const Nav = () => {
  return (
    <nav className={styles.background}>
      <div className={styles.navContainer}>
        <div className={styles.navSection} />
        <div className={c(styles.navSection, styles.textCentre)}>
          <NextLink href='/'>
            <a className={styles.brandLink}>
              <img src={bleakLogo} style={{ width: '62px' }} alt='Bleak Narrative' />
            </a>
          </NextLink>
        </div>
        <div className={c(styles.navSection, styles.textRight)}>
          <a target='_blank' href='https://soundcloud.com/bleaknarrative'>
            <img className={styles.soundcloud} src={soundcloudLogo} />
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Nav
