import c from 'classnames'
import Image from 'next/image'

import CaptionIcon from '../../public/icons/triangle-up.svg'
import RichText from '../richText'
import styles from './onePhoto.module.css'

const OnePhotos = ({ items, onClickHandler, urlToGalleryIndex }) => {
  return items.map((item, i) => {
    return (
      <PhotoWithCaption
        key={`${i}-${item.image.url}`}
        imageAlt={item.alt}
        imageURL={item.image.url}
        onImageClick={() => onClickHandler(urlToGalleryIndex[item.image.url])}
        dimensions={item.image.dimensions}
      >
        {item.caption.length > 0 && <RichText content={item.caption} />}
      </PhotoWithCaption>
    )
  })
}

const PhotoWithCaption = ({ imageURL, imageAlt, children, onImageClick, dimensions }) => {
  if (!dimensions || !dimensions.width || !dimensions.height) {
    throw Error(`Image '${imageURL}' is missing required 'dimensions' properties`)
  }
  const ImageC = getImageComponent({ imageURL, imageAlt, onImageClick, dimensions })
  return (
    <section className={styles.container}>
      <div className={c(styles.galleryItem, { [styles.galleryItemFull]: !children })}>
        <div className={styles.imgContainer}>
          <ImageC />
        </div>
        {
          children && (
            <div className={styles.captionContainer}>
              <Image width={24} height={14} className={styles.captionIcon} src={CaptionIcon} />
              {children}
            </div>
          )
        }
      </div>
    </section>
  )
}

function getImageComponent ({ imageURL, imageAlt, onImageClick, dimensions }) {
  const ImgC = () => <Image width={dimensions.width} height={dimensions.height} src={imageURL} alt={imageAlt} className={styles.img} />
  return onImageClick
    ? () => <a onClick={onImageClick}><ImgC /></a>
    : () => <ImgC />
}

export default OnePhotos
