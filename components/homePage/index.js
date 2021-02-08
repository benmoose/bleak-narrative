import React from 'react'
import styles from './homePage.module.css'

import Banner from '../../public/img/homepagebanner.png'
import BannerSlim from '../../public/img/homepagebanner-slim.png'

export const HomePageJumbotron = () => {
  return (
    <div className={styles.container}>
      <img src={BannerSlim} className={styles.img} alt='Club culture banner' />
      <div className={styles.jumbotronTextContainer}>
        <h2 className={styles.jumbotronTextSm}>Bleeps & Bloops &middot; Sounds & Stories</h2>
        <h1 className={styles.jumbotronTextLg}>A Home for Underground Club Culture</h1>
      </div>
      <img src={Banner} className={styles.img} alt='Club culture banner' />
    </div>
  )
}

export const HrTitle = ({ children }) => {
  return (
    <div className={styles.hrContainer}>
      <p className={styles.hrTitle}>{children}</p>
      <hr className={styles.hr} />
    </div>
  )
}
