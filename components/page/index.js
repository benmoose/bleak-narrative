import CratediggingPage from '../cratediggingPage'
import MusicPage from '../musicPage'

const Page = ({ document }) => {
  const PageComponent = pageComponentForType(document.type)
  return <PageComponent document={document} />
}

function pageComponentForType (type) {
  switch (type) {
    case "music":
      return MusicPage
    case "cratedigging":
      return CratediggingPage
  }
  throw Error(`No page component for ${type} page type`)
}

export default Page
