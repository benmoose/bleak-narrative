import React from 'react'

import SoundcloudPlayer from '../soundcloudPlayer'
import SpotifyPlayer from '../spotifyPlayer'
import RichText from '../richText'
import styles from './cratediggingPage.module.css'

const CratediggingTrack = ({ track, description }) => {
  const TrackPlayer = getProviderEmbedComponent(track.provider_name)
  return (
    <article className={styles.container}>
      <TrackPlayer src={track.embed_url} />
      <RichText content={description} />
    </article>
  )
}

function getProviderEmbedComponent (providerName) {
  switch (providerName) {
    case "SoundCloud":
      return SoundcloudPlayer
    case "Spotify":
      return SpotifyPlayer
  }
  throw Error(`No player for provider '${providerName}'`)
}

export default CratediggingTrack