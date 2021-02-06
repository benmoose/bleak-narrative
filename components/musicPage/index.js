import React from 'react'

import SoundcloudPlayer from '../soundcloudPlayer'
import RichText from '../richText'
import PageHeader from '../pageHeader'

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
        body.map(slice => slice.items.map((sliceItem, i) => (
          <React.Fragment key={i}>
            <SoundcloudPlayer src={sliceItem.track.embed_url} />
            <RichText content={sliceItem.track_description} />
          </React.Fragment>
        )))
      }
    </>
  )
}

export default MusicPage
