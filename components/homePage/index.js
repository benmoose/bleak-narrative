import React from 'react'
import Grid from '@material-ui/core/Grid'
import styles from './homePage.module.css'

import Doodle from '../../public/img/homepagebanner.png'

export const HomePageJumbotron = () => {
  return (
    <Grid container spacing={4} alignItems='center'>
      <Grid item xs={12} sm={6}>
        <img src={Doodle} className={styles.img} alt='Club culture banner' />
      </Grid>
      <Grid item xs={12} sm={6}>
        <p className={styles.subtitle}>Bleep Bloop</p>
        <h1 className={styles.title}>Short 'n snappy title, Andrea</h1>
        <p>Subtitle here with stuff maybe..?</p>
      </Grid>
    </Grid>
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
