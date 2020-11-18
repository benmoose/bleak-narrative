import React from 'react'
import { parseISO, format } from 'date-fns'

import SoundcloudPlayer from '../../components/soundcloudPlayer'
import calendarIcon from '../../public/icons/calendar.svg'
import linkIcon from '../../public/icons/link.svg'
import Link from '../link'
import StoryContent from './storyContent'
import styles from './story.module.css'

export default ({ title, timestamp, content, embed }) => {
  const hasSoundcloudMedia = embed && embed.embed_url
  const timeFormatted = format(parseISO(timestamp), "do LLL yyyy")
  return (
    <main>
      <div className={styles.postHeader}>
        <Link href="/">Back</Link>
      </div>
      <h1>{title}</h1>
      <small><img className={styles.timestampIcon} src={calendarIcon} />{timeFormatted}</small>
      {hasSoundcloudMedia && (
        <SoundcloudPlayer src={embed.embed_url} />
      )}
      <StoryContent content={content} />
      <div className={styles.soundcloudFooterLink}>
        <Link href={embed.embed_url}>
          Listen on SoundCloud <img className={styles.externalLinkIcon} src={linkIcon} />
        </Link>
      </div>
    </main>
  )
}
