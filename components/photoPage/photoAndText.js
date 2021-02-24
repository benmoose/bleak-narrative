import Image from 'next/image'

import RichText from '../richText'
import styles from './photoAndText.module.css'

const PhotoAndText = ({ items, onClickHandler, urlToGalleryIndex }) => {
  return items.map((item, i) => {
    const onImageClick = () => onClickHandler(urlToGalleryIndex[item.image.url])
    const ImageC = getImageComponent({ imageURL: item.image.url, onImageClick })
    return (
      <div key={i} className={styles.container}>
        <div className={styles.imgContainer}>
          <ImageC />
        </div>
        <div className={styles.textContainer}>
          <RichText content={item.text} />
        </div>
      </div>
    )
  })
}

function getImageComponent ({ imageURL, imageAlt, onImageClick }) {
  const ImgC = () => <Image layout='fill' src={imageURL} alt={imageAlt} className={styles.image} />
  return onImageClick
    ? () => <a onClick={onImageClick}><ImgC /></a>
    : () => <ImgC />
}

export default PhotoAndText
