import React from 'react'
import Grid from '@material-ui/core/Grid'
import Image from 'next/image'

import styles from './homePage.module.css'
import DevTad from '../../public/img/websiteannouncementdoodle.png'

export const HomePageJumbotron = () => {
  return (
    <Grid container spacing={4} alignItems='center'>
      <Grid item xs={12} sm={6}>
        <Image priority src={DevTad} alt='Doodle of Tad frantically coding away...' width={380} height={380} className={styles.img} />
      </Grid>
      <Grid item xs={12} sm={6}>
        <p className={styles.subtitle}>Bleep Bloop</p>
        <h1 className={styles.title}>Our new website is nearly ready!</h1>
        <p>Follow us on <a className={styles.link} rel='nofollow' href='https://instagram.com/bleaknarrative'>Instagram</a> to get notified!</p>
      </Grid>
    </Grid>
  )
}
