import React from 'react'
import Link from 'next/link'
import { parseISO, format } from 'date-fns'

import PageLink from '../link'
import styles from './feedLink.module.css'
import rightArrowIcon from '../../public/icons/right-arrow.svg'

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
          <div className={styles.metadata}>
            {publicationDate} / <Link href={`/${type}`}><a className={styles.typeLink}>{type}</a></Link> / {getAuthorLink(authorName, authorProfile)}
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

function getBody (type, document) {
  switch (type) {
    case 'music':
      return 'document.data.description[0].text'
    case 'art':
      return ''
    case 'stories':
      return document.data.body.map(s => (
        s.items.map(item => {
          return item.text
            ? item.text.map(t => t.text).filter(x => !!x)
            : ''
        })
      )).join(' ')
  }
  throw Error(`Cannot get feed-link body for ${type} type`)
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

function getLinkText (type) {
  switch (type) {
    case 'music':
      return 'Listen to the mix'
    case 'art':
      return 'Visit the gallery'
    default:
      return 'Read more'
  }
}

function getAuthorLink (authorName, authorProfile) {
  if (authorProfile && authorProfile.embed_url) {
    return <Link href={authorProfile.embed_url}><a className={styles.authorLink} target='_blank'>{authorName}</a></Link>
  }
  return authorName
}

function snippetFromText (text) {
  if (!text) {
    return ''
  }
  const words = text.split(' ')
  if (words.length <= 32) {
    return text
  }
  return words.slice(0, 32).join(' ') + '...'
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
