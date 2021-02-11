import Image from 'next/image'
import styles from './page.module.css'

import MusicPage from '../musicPage'
import PhotoPage from '../photoPage'
import StoryPage from '../storyPage'

const Page = ({ document }) => {
  const PageComponent = pageComponentForType(document.type)
  return <PageComponent document={document} />
}

function pageComponentForType (type) {
  switch (type) {
    case 'music':
      return MusicPage
    case 'art':
      return PhotoPage
    case 'stories':
      return StoryPage
  }
  throw Error(`No page component for ${type} page type`)
}

export const PageDoodle = ({ src, width, height }) => {
  return (
    <div className={styles.pageDoodle}>
      <Image priority src={src} width={width} height={height} alt="Bleak's doodle for the page" />
    </div>
  )
}

export default Page
