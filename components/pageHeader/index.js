import React from 'react'
import { parseISO, format } from 'date-fns'

import calendarIcon from '../../public/icons/calendar.svg'
import backIcon from '../../public/icons/left-arrow.svg'
import Link from '../link'
import styles from './pageHeader.module.css'

const PageHeader = ({ title, timestamp }) => {
  const timestampFormatted = timestamp && format(parseISO(timestamp), "do LLL yyyy")
  return (
    <section className={styles.container}>
      <div className={styles.linkContainer}>
        <Link href="/"><img className={styles.backIcon} src={backIcon} /> Back</Link>
      </div>
      <h1>{title}</h1>
      {
        timestampFormatted && (
          <small><img className={styles.timestampIcon} src={calendarIcon} />{timestampFormatted}</small>
        )
      }
    </section>
  )
}

export default PageHeader
