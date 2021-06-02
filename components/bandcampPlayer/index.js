import React from 'react'
import styles from './bandcampPlayer.module.css'

export default ({ embed }) => {
  return (
    <div className={styles.container} dangerouslySetInnerHTML={{ __html: embed }} />
  )
}
