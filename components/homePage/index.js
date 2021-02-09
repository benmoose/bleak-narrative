import React from 'react'
import styles from './homePage.module.css'
import Grid from '@material-ui/core/Grid'

import DevTad from '../../public/img/websiteannouncementdoodle.png'

export const HomePageJumbotron = () => {
  return (
    <Grid container spacing={4} alignItems='center'>
      <Grid item xs={12} sm={6}>
        <img src={DevTad} className={styles.img} alt='Club culture banner' />
      </Grid>
      <Grid item xs={12} sm={6}>
        <p className={styles.subtitle}>Bleep Bloop</p>
        <h1 className={styles.title}>Our new website is nearly ready!</h1>
        <p>Follow us on <a className={styles.link} rel='nofollow' href='https://instagram.com/bleaknarrative'>Instagram</a> to get notified!</p>
      </Grid>
    </Grid>
  )
}
