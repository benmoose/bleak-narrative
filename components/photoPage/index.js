import React, { useState } from 'react'
import ReactBnbGallery from 'react-bnb-gallery'

import PageHeader from '../pageHeader'
import RichText from '../richText'
import OnePhoto from './onePhoto'
import TwoPhotos from './twoPhotos'
import ThreePhotos from './threePhotos'
import PhotoAndText from './photoAndText'
import FullWidthImage from './fullWidthImage'
import Video from './video'

const SLICE_TYPES = ['one_photo', 'two_photos', 'three_photos', 'photo___text', 'full_width_image', 'video']

const PhotoPage = ({ document }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [initialPhoto, setInitialPhoto] = useState(0)

  const urlToGalleryIndex = getPhotoURLToGalleryIndexMap(document.data.body)
  const photos = getPhotosDataForGallery(document.data.body).map(img => ({
    i: urlToGalleryIndex[img.url],
    photo: img.url,
    thumbnail: img.thumbnail ? img.thumbnail.url : null
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
            case 'photo___text':
              return <PhotoAndText key={i} items={slice.items} onClickHandler={openGalleryOnPhoto} urlToGalleryIndex={urlToGalleryIndex} />
            case 'full_width_image':
              return <FullWidthImage items={slice.items} onClickHandler={openGalleryOnPhoto} urlToGalleryIndex={urlToGalleryIndex} />
            case 'video':
              return <Video items={slice.items} />
            default:
              throw Error(`No component for photo-page body slice of type ${slice.slice_type}`)
          }
        }).map((C, i) => <WithSpacing key={i}>{C}</WithSpacing>)
      }
    </>
  )
}

const WithSpacing = props => <div style={{ marginBottom: '50px' }} {...props} />

function getPhotosDataForGallery (body) {
  const photox = []
  body
    .filter(item => SLICE_TYPES.includes(item.slice_type))
    .map(item =>
      item.items.forEach(galleryItem => {
        if (item.slice_type === 'one_photo') {
          photox.push(galleryItem.image)
        } else if (item.slice_type === 'two_photos') {
          photox.push(galleryItem.image_1)
          photox.push(galleryItem.image_2)
        } else if (item.slice_type === 'three_photos') {
          photox.push(galleryItem.image_1)
          photox.push(galleryItem.image_2)
          photox.push(galleryItem.image_3)
        } else if (item.slice_type === 'photo___text') {
          photox.push(galleryItem.image)
        } else if (item.slice_type === 'full_width_image') {
          photox.push(galleryItem.image)
        }
      })
    )
  return photox
}

function getPhotoURLToGalleryIndexMap (body) {
  const photox = {}
  let counter = 0
  body
    .filter(item => SLICE_TYPES.includes(item.slice_type))
    .map(item =>
      item.items.forEach(galleryItem => {
        if (item.slice_type === 'one_photo') {
          photox[galleryItem.image.url] = counter++
        } else if (item.slice_type === 'two_photos') {
          photox[galleryItem.image_1.url] = counter++
          photox[galleryItem.image_2.url] = counter++
        } else if (item.slice_type === 'three_photos') {
          photox[galleryItem.image_1.url] = counter++
          photox[galleryItem.image_2.url] = counter++
          photox[galleryItem.image_3.url] = counter++
        } else if (item.slice_type === 'photo___text') {
          photox[galleryItem.image.url] = counter++
        } else if (item.slice_type === 'full_width_image') {
          photox[galleryItem.image.url] = counter++
        }
      })
    )
  return photox
}

export default PhotoPage
