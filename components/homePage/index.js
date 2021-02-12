import React from 'react'
import Image from 'next/image'
import Grid from '@material-ui/core/Grid'

import styles from './homePage.module.css'
import Doodle from '../../public/img/homedoodle.png'

export const HomePageJumbotron = () => {
  return (
    <Grid container spacing={6} alignItems='center'>
      <Grid item xs={12} sm={5}>
        <div className={styles.imgContainer}>
          <Image priority src={Doodle} layout='fill' alt='Club culture banner' className={styles.img} />
        </div>
      </Grid>
      <Grid item xs={12} sm={7}>
        <p className={styles.subtitle}>Bleeps & Bloops, Sounds & Stories</p>
        <h1 className={styles.title}>Welcum to<br />Bleak Narrative</h1>
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
