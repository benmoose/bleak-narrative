import PageHeader from '../pageHeader'
import RichText from '../richText'

const StoryPage = ({ document }) => {
  return (

    <>
      <PageHeader
        title={document.data.title[0].text}
        authorName={document.data.author_name}
        authorLink={document.data.author_profile.embed_url}
        timestamp={document.first_publication_date}
      />
      <RichText content={document.data.story_content} />
    </>
  )
}

export default StoryPage
