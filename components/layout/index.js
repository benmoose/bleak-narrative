import React from 'react'
import styles from 'layout.module.css'

export const Page = props => {
  return <div {...props} className={styles.maxPageWidth} />
}
