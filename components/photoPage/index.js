import PageHeader from '../pageHeader'
import RichText from '../richText'
import PhotoWithCaption from './photoWithCaption'

const PhotoPage = ({ document }) => {
  return (
    <>
      <PageHeader
        title={document.data.title[0].text}
        timestamp={document.first_publication_date}
        authorName={document.data.author_name}
        authorLink={document.data.author_profile && document.data.author_profile.embed_url}
      />
      {
        document.data.photos.map(({ image, caption}) => {
          return <PhotoWithCaption image={image} caption={caption} />
        })
      }
    </>
  )
}

export default PhotoPage
