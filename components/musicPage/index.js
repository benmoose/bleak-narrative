import React from 'react'

import RichText from '../richText'
import PageHeader from '../pageHeader'
import SoundcloudPlayer from '../soundcloudPlayer'
import SpotifyPlayer from '../spotifyPlayer'
import BandcampPlayer from '../bandcampPlayer'
import { YouTubeVideo } from '../video'

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
        body.map(getSliceComponent)
      }
    </>
  )
}

function getSliceComponent (slice) {
  if (slice.slice_type === 'music_player') {
    const items = slice.items
    return items.map((sliceItem, i) => {
      const AudioPlayer = getAudioPlayer(sliceItem)
      return (
        <React.Fragment key={i}>
          <AudioPlayer src={sliceItem.track.embed_url} />
          <RichText content={sliceItem.track_description} />
        </React.Fragment>
      )
    })
  } else if (slice.slice_type === 'text') {
    return <RichText content={slice.primary.content} />
  } else if (slice.slice_type === 'external_video') {
    return <YouTubeVideo items={slice.items} />
  }
}

function getAudioPlayer (slice) {
  const provider = slice.track.provider_name
  if (provider === 'SoundCloud') {
    return SoundcloudPlayer
  }
  if (provider === 'Spotify') {
    return SpotifyPlayer
  }
  if (provider === 'Bandcamp') {
    return BandcampPlayer
  }
  throw Error(`Unknown audio provider '${provider}'`)
}

export default MusicPage
