import React from 'react'
import styles from './spotifyPlayer.module.css'

export default ({ src }) => {
  return (
    <div className={styles.container}>
      <iframe
        src={getEmbedSrc(src)}
        width="440"
        height="80"
        frameborder="0"
        allowtransparency="true"
        allow="encrypted-media"
        className={styles.player}
      />
    </div>
  )
}

function getEmbedSrc (src) {
  const url = new URL(src)
  return `${url.origin}/embed${url.pathname}`
}
