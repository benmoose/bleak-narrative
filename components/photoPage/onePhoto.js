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
      >
        {item.caption.length > 0 && <RichText content={item.caption} />}
      </PhotoWithCaption>
    )
  })
}

const PhotoWithCaption = ({ imageURL, imageAlt, children, onImageClick }) => {
  const ImageC = getImageComponent({ imageURL, imageAlt, onImageClick })
  return (
    <section className={styles.container}>
      <div className={styles.galleryItem}>
        <div className={styles.imgContainer}>
          <ImageC />
        </div>
        {
          children && (
            <div className={styles.captionContainer}>
              <img className={styles.captionIcon} src={CaptionIcon} />
              {children}
            </div>
          )
        }
      </div>
    </section>
  )
}

function getImageComponent ({ imageURL, imageAlt, onImageClick }) {
  const ImgC = () => <img src={imageURL} alt={imageAlt} className={styles.img} />
  if (!onImageClick) {
    return ImgC
  }
  return () => (
    <a onClick={onImageClick}>
      <ImgC />
    </a>
  )
}

export default OnePhotos
