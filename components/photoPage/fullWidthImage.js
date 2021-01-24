import styles from './fullWidthImage.module.css'

const FullWidthImage = ({ items, onClickHandler, urlToGalleryIndex }) => {
  return items.map(item => {
    const Img = getImageComponent({
      className: 'image',
      imageURL: item.image.url,
      imageAlt: item.image.alt,
      onImageClick: () => onClickHandler(urlToGalleryIndex[item.image.url])
    })
    return <Img />
  })
}

export default FullWidthImage

function getImageComponent ({ imageURL, imageAlt, onImageClick, ...props }) {
  const ImgC = () => <img src={imageURL} alt={imageAlt} {...props} />
  return onImageClick
    ? () => <button className={styles.imageButton} onClick={onImageClick}><ImgC /></button>
    : () => <ImgC />
}
