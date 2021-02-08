import React, { useState } from 'react'
import Link from 'next/link'
import c from 'classnames'

import styles from './nav.module.css'
import NavLink from './navLink'
import bleakLogo from '../../public/img/bleak-icon.png'
import ArrowLeft from '../../public/icons/arrow-left.svg'
import BurgerMenu from '../../public/icons/burger-menu.svg'
import InstagramLogo from '../../public/icons/instagram.svg'
import SoundcloudLogo from '../../public/icons/musical-note.svg'

const Nav = ({ pathname }) => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <DesktopNav pathname={pathname} requestOpenMobileNav={() => setOpen(true)} />
      <MobileNav pathname={pathname} open={open} requestCloseMobileNav={() => setOpen(false)} />
    </>
  )
}

const DesktopNav = ({ pathname, requestOpenMobileNav }) => {
  return (
    <nav className={styles.background}>
      <div className={styles.navContainer}>
        <div className={c(styles.navSection)}>
          <div className={styles.desktopOnly}>
            <NavLink href='/music' className={c(styles.pageLink, { [styles.active]: pathname === '/music' })}>Music</NavLink>
            <NavLink href='/art' className={c(styles.pageLink, { [styles.active]: pathname === '/art' })}>Art</NavLink>
            <NavLink href='/stories' className={c(styles.pageLink, { [styles.active]: pathname === '/stories' })}>Stories</NavLink>
          </div>
          <button className={c(styles.mobileOnly, styles.iconButton)} onClick={requestOpenMobileNav}>
            <img src={BurgerMenu} className={styles.burgerMenuIcon} />
          </button>
        </div>

        <div className={c(styles.navSection, styles.textCentre, styles.navSectionCentre)}>
          <Link href='/'>
            <a className={styles.brandLink}>
              <img src={bleakLogo} style={{ width: '62px' }} alt='Bleak Narrative' />
            </a>
          </Link>
        </div>

        <div className={c(styles.navSection, styles.textRight)}>
          <div className={styles.desktopOnly}>
            <NavLink href='/about' className={c(styles.pageLink, { [styles.active]: pathname === '/about' })}>About</NavLink>
            <NavLink href='/community' className={c(styles.pageLink, { [styles.active]: pathname === '/community' })}>Community</NavLink>
            <a target='_blank' rel='noreferrer' href='https://soundcloud.com/bleaknarrative'>
              <img className={c(styles.iconLink, styles.soundcloud)} src={SoundcloudLogo} />
            </a>
            <a target='_blank' rel='noreferrer' href='https://instagram.com/bleaknarrative'>
              <img className={c(styles.iconLink, styles.instagram)} src={InstagramLogo} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

const MobileNav = ({ pathname, open, requestCloseMobileNav }) => {
  return (
    <>
      <div className={c(styles.mobileNavContainer, { [styles.mobileNavOpen]: open })}>
        <div className={styles.mobileNavHead}>
          <button className={c(styles.iconButton, styles.closeIconButton)} onClick={requestCloseMobileNav}>
            <img className={styles.closeIcon} src={ArrowLeft} />
          </button>
        </div>

        <ul className={styles.mobileNavLinkContainer}>
          <li>
            <NavLink onClick={requestCloseMobileNav} href='/music' className={c(styles.mobileNavLink, styles.pageLink, { [styles.active]: pathname === '/music' })}>Music</NavLink>
          </li>
          <li>
            <NavLink onClick={requestCloseMobileNav} href='/art' className={c(styles.mobileNavLink, styles.pageLink, { [styles.active]: pathname === '/art' })}>Art</NavLink>
          </li>
          <li>
            <NavLink onClick={requestCloseMobileNav} href='/stories' className={c(styles.mobileNavLink, styles.pageLink, { [styles.active]: pathname === '/stories' })}>Stories</NavLink>
          </li>
          <li>
            <NavLink onClick={requestCloseMobileNav} href='/about' className={c(styles.mobileNavLink, styles.pageLink, { [styles.active]: pathname === '/about' })}>About</NavLink>
          </li>
          <li>
            <NavLink onClick={requestCloseMobileNav} href='/community' className={c(styles.mobileNavLink, styles.pageLink, { [styles.active]: pathname === '/community' })}>Community</NavLink>
          </li>
        </ul>

        <hr className={styles.mobileNavDivider} />

        <ul className={styles.mobileNavLinkContainer}>
          <li>
            <NavLink
              onClick={requestCloseMobileNav}
              target='_blank'
              rel='noreferrer'
              href='https://soundcloud.com/bleaknarrative'
              className={c(styles.mobileNavLink, styles.pageLink, { [styles.active]: pathname === '/music' })}
            >
              Soundcloud
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={requestCloseMobileNav}
              target='_blank'
              rel='noreferrer'
              href='https://instagram.com/bleaknarrative'
              className={c(styles.mobileNavLink, styles.pageLink, { [styles.active]: pathname === '/music' })}
            >
              Instagram
            </NavLink>
          </li>
        </ul>
      </div>
      <div className={c(styles.mobileNavOverlay, { [styles.mobileNavOverlayOff]: !open })} onClick={requestCloseMobileNav} />
    </>
  )
}

export default Nav
