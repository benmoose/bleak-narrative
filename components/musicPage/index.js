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

  const hasSoundcloudMedia = soundcloudLink && soundcloudLink.embed_url
  return (
    <main>
      <PageHeader title={title} timestamp={document.first_publication_date} />
      {hasSoundcloudMedia && (
        <SoundcloudPlayer src={soundcloudLink.embed_url} />
      )}
      <RichText content={content} />
      <div className={styles.soundcloudFooterLink}>
        <Link href={soundcloudLink.embed_url}>
          Listen on SoundCloud <img className={styles.externalLinkIcon} src={linkIcon} />
        </Link>
      </div>
    </main>
  )
}

export default MusicPage
