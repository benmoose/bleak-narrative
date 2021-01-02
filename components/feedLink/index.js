import React from 'react'
import Link from 'next/link'
import { parseISO, format } from 'date-fns'

import PageLink from '../link'
import styles from './feedLink.module.css'
import rightArrowIcon from '../../public/icons/right-arrow.svg'

const FeedLink = ({ id, type, document }) => {
  const href = `/${type}/${document.uid}`
  const createdAt = format(parseISO(document.first_publication_date), 'do LLL yyyy')
  return (
    <FeedLinkContent
      id={id}
      type={type}
      href={href}
      timestamp={createdAt}
      image={getThumbnail(type, document)}
      title={getTitle(type, document)}
      body={getBody(type, document)}
      linkText={getLinkText(type)}
    />
  )
}

const FeedLinkContent = ({ id, image, href, timestamp, title, body, linkText, type }) => {
  return (
    <div className={styles.container}>
      <div className={styles.containerA}>
        <Link href={href}>
          <a><img className={styles.img} src={image} /></a>
        </Link>
        <section className={styles.textContainer}>
          <h2 className={styles.title}>
            <Link href={href} key={id}><a className={styles.titleLink}>{title}</a></Link>
          </h2>
          <small className={styles.timestamp}>{timestamp} / <Link href={`/${type}`}><a className={styles.typeLink}>{type}</a></Link></small>
          {
            body && (
              <p className={styles.snippet}>{snippetFromText(body)}</p>
            )
          }
          <div className={styles.linkContainer}>
            <PageLink href={href}>
              {linkText} <img className={styles.linkArrowIcon} src={rightArrowIcon} />
            </PageLink>
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
    case 'photos':
      return document.data.title[0].text
    case 'cratedigging':
      return 'Crate digging ' + format(parseISO(document.first_publication_date), 'LLLL yy')
    case 'story':
      return document.data.title[0].text
  }
  throw Error(`Cannot get feed-link title for ${type} type`)
}

function getBody (type, document) {
  switch (type) {
    case 'music':
      return document.data.description[0].text
    case 'photos':
      return ''
    case 'cratedigging':
      return `${document.data.tracks.length} hidden gems for your listening pleasure, uncovered by by ${document.data.author_name}.`
    case 'story':
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
      return document.data.soundcloud_link.thumbnail_url
    case 'photos':
      return document.data.feed_thumbnail.url
    case 'cratedigging':
      return document.data.feed_image.url
    case 'story':
      return document.data.feed_thumbnail.url
  }
  throw Error(`Cannot get feed-link thumbnail for ${type} type`)
}

function getLinkText (type) {
  switch (type) {
    case 'music':
      return 'Listen to the mix'
    case 'photos':
      return 'Visit the gallery'
    case 'cratedigging':
      return 'Explore the crate'
    default:
      return 'Read more'
  }
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

export default FeedLink
