import React from 'react'
import { parseISO, format } from 'date-fns'
import NextLink from 'next/link'

import calendarIcon from '../../public/icons/calendar.svg'
import backIcon from '../../public/icons/left-arrow.svg'
import Link from '../link'
import styles from './pageHeader.module.css'

const PageHeader = ({ title, timestamp, authorName, authorLink }) => {
  const timestampFormatted = timestamp && format(parseISO(timestamp), "do LLL yyyy")
  return (
    <section className={styles.container}>
      <div className={styles.linkContainer}>
        <Link href="/"><img className={styles.backIcon} src={backIcon} /> Back</Link>
      </div>
      <h1>{title}</h1>
      <div className={styles.metadataContainer}>
        {
          timestampFormatted && (
            <small className={styles.metadata}><img className={styles.timestampIcon} src={calendarIcon} />{timestampFormatted}</small>
          )
        }
        {
          timestampFormatted && authorName && <small className={styles.metadata}>/</small>
        }
        {
          authorName && (
            <small className={styles.metadata}>By {getAuthor(authorName, authorLink)}</small>
          )
        }
      </div>
    </section>
  )
}

function getAuthor (authorName, authorLink) {
  if (!authorLink) {
    return authorName
  }
  return (
    <NextLink href={authorLink}>
      <a target="_blank" className={styles.authorLink}>{authorName}</a>
    </NextLink>
  )
}

export default PageHeader
