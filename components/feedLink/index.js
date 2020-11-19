import React from 'react'
import Link from 'next/link'
import { parseISO, format } from 'date-fns'
import PageLink from '../link'

import styles from './feedLink.module.css'
import rightArrowIcon from '../../public/icons/right-arrow.svg'

const FeedLink = ({ id, type, document }) => {
  const href = `/${type}/${document.uid}`
  const createdAt = format(parseISO(document.first_publication_date), "do LLL yyyy")
  const image = getThumbnail(type, document)
  return (
    <FeedLinkContent
      id={id}
      image={image}
      href={href}
      timestamp={createdAt}
      title={getTitle(type, document)}
      body={getBody(type, document)}
      linkText={getLinkText(type)}
    />
  )
}

const FeedLinkContent = ({ id, image, href, timestamp, title, body, linkText }) => {
  return (
    <Link href={href} key={id}>
      <div key={id} className={styles.container}>
        <img className={styles.img} src={image} />
        <section className={styles.textContainer}>
          <small className={styles.timestamp}>{timestamp}</small>
          <h2 className={styles.title}>{title}</h2>
          {
            body && (
              <p className={styles.snippet}>{getSnippet(body)}</p>
            )
          }
          <div className={styles.linkContainer}>
            <PageLink href={href}>{linkText} <img className={styles.linkArrowIcon} src={rightArrowIcon} /></PageLink>
          </div>
        </section>
      </div>
    </Link>
  )
}

function getTitle (type, document) {
  switch (type) {
    case "music":
      return document.data.title[0].text
    case "cratedigging":
      return "Crate digging " + format(parseISO(document.first_publication_date), "LLLL yy")
  }
  throw Error(`Cannot get feed-link title for ${type} type`)
}

function getBody (type, document) {
  switch (type) {
    case "music":
      return document.data.description[0].text
    case "cratedigging":
      return "Brand new collection of hidden gems for your listening pleasure."
  }
  throw Error(`Cannot get feed-link body for ${type} type`)
}

function getThumbnail (type, document) {
  switch (type) {
    case "music":
      return document.data.soundcloud_link.thumbnail_url
    case "cratedigging":
      return document.data.feed_image.url
  }
  throw Error(`Cannot get feed-link thumbnail for ${type} type`)
}

function getLinkText (type) {
  switch (type) {
    case "music":
      return "Listen to the mix"
    case "photo_gallery":
      return "See more"
    case "cratedigging":
      return "Explore the crate"
    default:
      return "Read more"
  }
}

function getSnippet (text) {
  if (!text) {
    return ""
  }
  const words = text.split(" ")
  if (words.length <= 32) {
    return text
  }
  return words.slice(0, 32).join(" ") + "..."
}

export default FeedLink
