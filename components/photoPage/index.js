import React, { useState } from 'react'
import ReactBnbGallery from 'react-bnb-gallery'

import PageHeader from '../pageHeader'
import RichText from '../richText'
import OnePhoto from './onePhoto'
import TwoPhotos from './twoPhotos'
import ThreePhotos from './threePhotos'

const SLICE_TYPES = ['one_photo', 'two_photos', 'three_photos']

const PhotoPage = ({ document }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [initialPhoto, setInitialPhoto] = useState(0)

  const urlToGalleryIndex = getPhotoURLToGalleryIndexMap(document.data.body)
  const photos = getPhotosDataForGallery(document.data.body).map(img => ({
    i: urlToGalleryIndex[img.url],
    photo: img.url,
    thumbnail: img.thumbnail.url
  }))

  const openGalleryOnPhoto = photoIndex => {
    setInitialPhoto(photoIndex)
    setIsOpen(true)
  }

  return (
    <>
      <PageHeader
        title={document.data.title[0].text}
        timestamp={document.data.publication_date_override || document.first_publication_date}
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
        document.data.body.map((slice, i) => {
          switch (slice.slice_type) {
            case 'text':
              return <RichText key={i} content={slice.primary.content} />
            case 'one_photo':
              return <OnePhoto key={i} items={slice.items} onClickHandler={openGalleryOnPhoto} urlToGalleryIndex={urlToGalleryIndex} />
            case 'two_photos':
              return <TwoPhotos key={i} items={slice.items} onClickHandler={openGalleryOnPhoto} urlToGalleryIndex={urlToGalleryIndex} />
            case 'three_photos':
              return <ThreePhotos key={i} items={slice.items} onClickHandler={openGalleryOnPhoto} urlToGalleryIndex={urlToGalleryIndex} />
            default:
              throw Error(`No component for photo-page body slice of type ${slice.slice_type}`)
          }
        })
      }
    </>
  )
}

function getPhotosDataForGallery (body) {
  const photox = []
  body
    .filter(item => SLICE_TYPES.includes(item.slice_type))
    .map(item => {
      item.items.map(galleryItem => {
        if (item.slice_type === 'one_photo') {
          photox.push(galleryItem.image)
        } else if (item.slice_type === 'two_photos') {
          photox.push(galleryItem.image_1)
          photox.push(galleryItem.image_2)
        } else if (item.slice_type === 'three_photos') {
          photox.push(galleryItem.image_1)
          photox.push(galleryItem.image_2)
          photox.push(galleryItem.image_3)
        }
      })
    })
  return photox
}

function getPhotoURLToGalleryIndexMap (body) {
  const photox = {}
  let counter = 0
  body
    .filter(item => SLICE_TYPES.includes(item.slice_type))
    .map(item => {
      item.items.map(galleryItem => {
        if (item.slice_type === 'one_photo') {
          photox[galleryItem.image.url] = counter++
        } else if (item.slice_type === 'two_photos') {
          photox[galleryItem.image_1.url] = counter++
          photox[galleryItem.image_2.url] = counter++
        } else if (item.slice_type === 'three_photos') {
          photox[galleryItem.image_1.url] = counter++
          photox[galleryItem.image_2.url] = counter++
          photox[galleryItem.image_3.url] = counter++
        }
      })
    })
  return photox
}

export default PhotoPage
