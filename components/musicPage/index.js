import React from 'react'

import RichText from '../richText'
import PageHeader from '../pageHeader'
import SoundcloudPlayer from '../soundcloudPlayer'
import SpotifyPlayer from '../spotifyPlayer'

const MusicPage = ({ document }) => {
  const title = document.data.title[0].text
  const body = document.data.body

  return (
    <>
      <PageHeader
        title={title}
        timestamp={document.data.publication_date_override || document.first_publication_date}
        authorName={document.data.author_name}
        authorLink={document.data.author_profile && document.data.author_profile.embed_url}
        authorImage={document.data.artist_image.url}
      />

      {
        body.map(slice => slice.items.map((sliceItem, i) => {
          const AudioPlayer = getAudioPlayer(sliceItem)
          return (
            <React.Fragment key={i}>
              <AudioPlayer src={sliceItem.track.embed_url} />
              <RichText content={sliceItem.track_description} />
            </React.Fragment>
          )
        }))
      }
    </>
  )
}

function getAudioPlayer (item) {
  const provider = item.track.provider_name
  if (provider === 'SoundCloud') {
    return SoundcloudPlayer
  }
  if (provider === 'Spotify') {
    return SpotifyPlayer
  }
  throw Error(`Unknown audio provider '${provider}'`)
}

export default MusicPage
