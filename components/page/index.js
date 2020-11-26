import CratediggingPage from '../cratediggingPage'
import MusicPage from '../musicPage'
import PhotoPage from '../photoPage'
import StoryPage from '../storyPage'

const Page = ({ document }) => {
  console.log(document.type, document)
  const PageComponent = pageComponentForType(document.type)
  return <PageComponent document={document} />
}

function pageComponentForType (type) {
  switch (type) {
    case "music":
      return MusicPage
    case "cratedigging":
      return CratediggingPage
    case "photos":
      return PhotoPage
    case "story":
      return StoryPage
  }
  throw Error(`No page component for ${type} page type`)
}

export default Page
