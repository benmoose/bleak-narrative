import PageHeader from '../pageHeader'
import RichText from '../richText'
import PhotoAndText from './photo-and-text'
import styles from './storyPage.module.css'

const StoryPage = ({ document }) => {
  return (
    <>
      <PageHeader
        title={document.data.title[0].text}
        authorName={document.data.author_name}
        authorLink={document.data.author_profile.embed_url}
        timestamp={document.first_publication_date}
      />
      {document.data.body.map(getComponentForSlice)}
    </>
  )
}

const TextItems = ({ item }) => <RichText content={item.text} />
const FullWidthImageItems = ({ item }) => <img className={styles.image} src={item.image.url} />

const SLICE_TYPE_COMPONENTS = {
  "text": TextItems,
  "image___text": PhotoAndText,
  "full_width_image": FullWidthImageItems,
}

function getComponentForSlice (slice) {
  const C = SLICE_TYPE_COMPONENTS[slice.slice_type]

  if (!C) {
    throw Error(`No component for story-page slice type '${slice.slice_type}'`)
  }
  return slice.items.map(item => C({ item }))
}

export default StoryPage
