import React from 'react'
import url from 'url'

import styles from './soundcloudPlayer.module.css'

export default ({ src }) => {
  return (
    <div className={styles.container}>
      <iframe
        style={{
          width: "100%",
          height: "166px",
        }}
        scrolling="no"
        frameBorder="no"
        src={generateSoundcloudSRC(src)}
      />
    </div>
  )
}

function generateSoundcloudSRC (soundcloudLink) {
  const parts = url.parse(soundcloudLink)
  const cleanLink = encodeURIComponent(`https://${parts.host}${parts.pathname}`)
  return `https://w.soundcloud.com/player/?url=${cleanLink}&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=true&show_teaser=true`
}
