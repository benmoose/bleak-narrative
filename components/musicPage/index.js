import React from 'react'

import linkIcon from '../../public/icons/link.svg'
import SoundcloudPlayer from '../soundcloudPlayer'
import Link from '../link'
import RichText from '../richText'
import PageHeader from '../pageHeader'
import styles from './musicPage.module.css'

const MusicPage = ({ document }) => {
  const title = document.data.title[0].text
  const content = document.data.description
  const soundcloudLink = document.data.soundcloud_link
  const artistImage = document.data.artist_image

  const hasSoundcloudMedia = soundcloudLink && soundcloudLink.embed_url
  const hasArtistImage = artistImage && artistImage.url
  return (
    <>
      <PageHeader
        title={title}
        timestamp={document.first_publication_date}
        authorName={document.data.author_name}
        authorLink={document.data.author_profile && document.data.author_profile.embed_url}
      />
      {hasSoundcloudMedia && (
        <div className={styles.soundcloudContainer}>
          <SoundcloudPlayer src={soundcloudLink.embed_url} />
        </div>
      )}
      <RichText content={content} />
      <div className={styles.soundcloudFooterLink}>
        <Link href={soundcloudLink.embed_url}>
          Listen on SoundCloud <img className={styles.externalLinkIcon} src={linkIcon} />
        </Link>
      </div>
    </>
  )
}

export default MusicPage
