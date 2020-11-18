import React from 'react'
import styles from './spotifyPlayer.module.css'

export default ({ uri }) => {
  return (
    <div className={styles.container}>
      <iframe
        src={`https://open.spotify.com/embed/track/${parseSpotifyURI(uri)}`}
        width="440"
        height="80"
        frameborder="0"
        allowtransparency="true"
        allow="encrypted-media"
      />
    </div>
  )
}

function parseSpotifyURI (spotifyURI) {
  const parts  = spotifyURI.split(":")
  return parts[parts.length - 1]
}
