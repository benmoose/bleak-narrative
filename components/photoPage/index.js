import React, { useState } from 'react'
import ReactBnbGallery from 'react-bnb-gallery'

import PageHeader from '../pageHeader'
import RichText from '../richText'
import PhotoWithCaption from './photoWithCaption'

const PhotoPage = ({ document }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [initialPhoto, setInitialPhoto] = useState(0)
  const photos = document.data.photos.map((galleryItem, i) => ({
    number: i,
    photo: galleryItem.image.url,
    thumbnail: galleryItem.image.thumbnail.url,
  }))
  const openGalleryOnPhoto = photoIndex => {
    setInitialPhoto(photoIndex)
    setIsOpen(true)
  }

  return (
    <>
      <PageHeader
        title={document.data.title[0].text}
        timestamp={document.first_publication_date}
        authorName={document.data.author_name}
        authorLink={document.data.author_profile && document.data.author_profile.embed_url}
      />
      <ReactBnbGallery
        activePhotoIndex={initialPhoto}
        show={isOpen}
        photos={photos}
        showThumbnails={false}
        onClose={() => setIsOpen(false)}
      />
      {
        document.data.photos.map(({ image, caption}, i) => {
          return (
            <PhotoWithCaption key={`${i}-${image.url}`} onImageClick={() => openGalleryOnPhoto(i)} imageURL={image.url} imageAlt={image.alt}>
              <RichText content={caption} />
            </PhotoWithCaption>
          )
        })
      }
    </>
  )
}

export default PhotoPage
