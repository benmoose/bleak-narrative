import React from 'react'
import { parseISO, format } from 'date-fns'
import NextLink from 'next/link'
import c from 'classnames'

import Lips from '../../public/icons/lip-icon.png'
import Eye from '../../public/icons/eye-icon.png'
import styles from './pageHeader.module.css'

const PageHeader = ({ title, timestamp, authorName, authorLink, authorImage }) => {
  const timestampFormatted = timestamp && format(parseISO(timestamp), 'do LLL yyyy')
  return (
    <section className={styles.container}>
      {
        authorImage && (
          <img className={c(styles.authorImage, 'image')} src={authorImage} alt={authorName} />
        )
      }
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.metadataContainer}>
          {
            timestampFormatted && (
              <small className={styles.metadata}><img className={styles.metadataIcon} src={Eye} />{timestampFormatted}</small>
            )
          }
          {
            authorName && (
              <small className={styles.metadata}><img className={c(styles.metadataIcon, styles.authorIcon)} src={Lips} />By {getAuthor(authorName, authorLink)}</small>
            )
          }
        </div>
      </div>
    </section>
  )
}

function getAuthor (authorName, authorLink) {
  return authorLink
    ? (
      <NextLink href={authorLink}>
        <a target='_blank' className={styles.authorLink}>{authorName}</a>
      </NextLink>
      )
    : authorName
}

export default PageHeader
