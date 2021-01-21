import React from 'react'
import NextLink from 'next/link'
import c from 'classnames'

import styles from './nav.module.css'
import Link from '../link'
import bleakLogo from '../../public/img/bleak-icon.png'
import soundcloudLogo from '../../public/icons/musical-note.svg'
import instagramLogo from '../../public/icons/instagram.svg'

const Nav = ({ type }) => {
  return (
    <nav className={styles.background}>
      <div className={styles.navContainer}>
        <div className={c(styles.navSection)}>
          <div className={styles.pageLinkContainer}>
            <Link href='/music' className={c(styles.pageLink, { [styles.active]: type === 'music' })}>Music</Link>
            <Link href='/photos' className={c(styles.pageLink, { [styles.active]: type === 'photos' })}>Art</Link>
            <Link href='/story' className={c(styles.pageLink, { [styles.active]: type === 'story' })}>Stories</Link>
          </div>
        </div>

        <div className={c(styles.navSection, styles.textCentre, styles.navSectionCentre)}>
          <NextLink href='/'>
            <a className={styles.brandLink}>
              <img src={bleakLogo} style={{ width: '62px' }} alt='Bleak Narrative' />
            </a>
          </NextLink>
        </div>

        <div className={c(styles.navSection, styles.textRight)}>
          <a target='_blank' href='https://soundcloud.com/bleaknarrative'>
            <img className={c(styles.iconLink, styles.soundcloud)} src={soundcloudLogo} />
          </a>
          <a target='_blank' href='https://instagram.com/bleaknarrative'>
            <img className={c(styles.iconLink, styles.instagram)} src={instagramLogo} />
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Nav
