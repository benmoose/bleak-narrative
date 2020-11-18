import React from 'react'
import Link from 'next/link'
import { parseISO, format } from 'date-fns'
import PageLink from '../link'

import styles from './feedLink.module.css'
import rightArrowIcon from '../../public/icons/right-arrow.svg'

const FeedLink = ({ id, type, href, document }) => {
  const createdAtRelative = format(parseISO(document.first_publication_date), "do LLL yyyy")
  return (
    <Link href={href}>
      <div key={id} className={styles.container}>
        <img className={styles.img} src={getThumbnail(type, document)} />
        <section className={styles.textContainer}>
          <small className={styles.timestamp}>
            {createdAtRelative}
          </small>
          <h1 className={styles.title}>{document.data.title[0].text}</h1>
          {
            !!document.data.description && (
              <p className={styles.snippet}>{getSnippet(document.data.description[0].text)}</p>
            )
          }
          <div className={styles.linkContainer}>
            <PageLink href={href}>{getLinkText(type)} <img className={styles.linkArrowIcon} src={rightArrowIcon} /></PageLink>
          </div>
        </section>
      </div>
    </Link>
  )
}

function getThumbnail (type, document) {
  switch (type) {
    case "music":
      return document.data.soundcloud_link.thumbnail_url
    case "photo_gallery":
      return document.data.hero_image.url
  }
}

function getLinkText (type) {
  switch (type) {
    case "music":
      return "Listen to the mix"
    case "photo_gallery":
      return "See more"
    default:
      return "Read more"
  }
}

function getSnippet (text) {
  if (!text) {
    return ""
  }
  return text.split(" ").slice(0, 32).join(" ") + "..."
}

export default FeedLink
