import React from 'react'
import Link from 'next/link'
import { parseISO, format } from 'date-fns'
import c from 'classnames'

import { getTitle } from '../../utils/prismic'
import PageLink from '../link'
import styles from './feedItem.module.css'

const FeedItem = ({ type, document, minimal }) => {
  const href = `/${type}/${document.uid}`
  return (
    <FeedLinkContent
      type={type}
      href={href}
      timestamp={document.data.publication_date_override || document.first_publication_date}
      authorName={document.data.author_name}
      authorProfile={document.data.author_profile}
      title={getTitle(document)}
      image={getThumbnail(type, document)}
      smallText={minimal}
      minimal={minimal}
    />
  )
}

const FeedLinkContent = ({ image, href, timestamp, title, authorName, authorProfile, type, minimal }) => {
  const publicationDate = format(parseISO(timestamp), 'do LLL yyyy')
  const H = minimal ? props => <h4 {...props} /> : props => <h3 {...props} />
  return (
    <div className={c(styles.container, { [styles.containerMinimal]: !!minimal })}>
      <div className={styles.containerA}>
        {
          image && (
            <Link href={href}>
              <a className={styles.imgContainer}><img className={styles.img} src={image} /></a>
            </Link>
          )
        }
        <section className={c(styles.textContainer, { [styles.paddingLeft]: !!image })}>
          <H className={styles.title}>
            <Link href={href}>
              <a className={styles.titleLink}>
                {title}
              </a>
            </Link>
          </H>
          <div className={c(styles.author, { [styles.authorSmallText]: minimal })}>
            by {getAuthorLink(authorName, authorProfile)}
          </div>
          <div className={styles.metadata}>
            {publicationDate} / <PageLink href={`/${type}`}>{type}</PageLink>
          </div>
        </section>
      </div>
    </div>
  )
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
    return <PageLink href={authorProfile.embed_url} target='_blank'>{authorName}</PageLink>
  }
  return authorName
}

function getMusicThumbnail (document) {
  const documentData = document.data
  if (documentData.feed_thumbnail.url) {
    return documentData.feed_thumbnail.url
  }
  if (documentData.body.length > 0) {
    const firstSlice = documentData.body.find(slice => slice.slice_type === 'music_player')
    if (firstSlice.items.length > 0) {
      return firstSlice.items[0].track.thumbnail_url
    }
  }
  throw Error(`No thumbnail found for music feed item ${document.uid}.`)
}

export default FeedItem
