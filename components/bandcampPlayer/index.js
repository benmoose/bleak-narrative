import React from 'react'
import styles from './bandcampPlayer.module.css'

export default ({ src }) => {
  const { album, track } = splitBandcampSRC(src)
  return (
    <div className={styles.container}>
      <iframe style='border: 0; width: 100%; height: 120px;' src={`https://bandcamp.com/EmbeddedPlayer/album=${album}/size=large/bgcol=ffffff/linkcol=63b2cc/tracklist=false/artwork=small/track=${track}/transparent=true/`} seamless>
        <a href='https://dirtybirdrecords.bandcamp.com/album/sinking'>Sinking by VNSSA &amp; Lenny Kiser</a>
      </iframe>
    </div>
  )
}

function splitBandcampSRC (src) {
  const url = new URL(src)
  const pathParams = url.pathname.split('/').filter(part => part.includes('='))
  return Object.fromEntries(pathParams.map(param => param.split('=')))
}