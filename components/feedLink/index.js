import React from 'react'
import Link from 'next/link'
import { parseISO, format } from 'date-fns'

import styles from './feedLink.module.css'

const FeedLink = ({ type, document }) => {
  const href = `/${type}/${document.uid}`
  return (
    <FeedLinkContent
      type={type}
      href={href}
      timestamp={document.data.publication_date_override || document.first_publication_date}
      authorName={document.data.author_name}
      authorProfile={document.data.author_profile}
      image={getThumbnail(type, document)}
      title={getTitle(type, document)}
    />
  )
}

const FeedLinkContent = ({ image, href, timestamp, title, authorName, authorProfile, type }) => {
  const publicationDate = format(parseISO(timestamp), 'do LLL yyyy')
  return (
    <div className={styles.container}>
      <div className={styles.containerA}>
        <Link href={href}>
          <a className={styles.imgContainer}><img className={styles.img} src={image} /></a>
        </Link>
        <section className={styles.textContainer}>
          <h2 className={styles.title}>
            <Link href={href}>
              <a className={styles.titleLink}>
                {title}
              </a>
            </Link>
          </h2>
          <div className={styles.author}>
            by {getAuthorLink(authorName, authorProfile)}
          </div>
          <div className={styles.metadata}>
            {publicationDate} / <Link href={`/${type}`}><a className={styles.typeLink}>{type}</a></Link>
          </div>
        </section>
      </div>
    </div>
  )
}

function getTitle (type, document) {
  switch (type) {
    case 'music':
      return document.data.title[0].text
    case 'art':
      return document.data.title[0].text
    case 'stories':
      return document.data.title[0].text
  }
  throw Error(`Cannot get feed-link title for ${type} type`)
}

function getThumbnail (type, document) {
  switch (type) {
    case 'music':
      return getMusicThumbnail(document)
    case 'art':
      return document.data.feed_thumbnail.url
    case 'stories':
      return document.data.feed_thumbnail.url
  }
  throw Error(`Cannot get feed-link thumbnail for ${type} type`)
}

function getAuthorLink (authorName, authorProfile) {
  if (authorProfile && authorProfile.embed_url) {
    return <Link href={authorProfile.embed_url}><a target='_blank'>{authorName}</a></Link>
  }
  return authorName
}

function getMusicThumbnail (document) {
  const documentData = document.data
  if (documentData.feed_thumbnail.url) {
    return documentData.feed_thumbnail.url
  }
  if (documentData.body.length > 0) {
    const firstSlice = documentData.body[0]
    if (firstSlice.items.length > 0) {
      return firstSlice.items[0].track.thumbnail_url
    }
  }
  throw Error(`No thumbnail found for music feed item ${document.uid}.`)
}

export default FeedLink
