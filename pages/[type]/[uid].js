import Prismic from 'prismic-javascript'
import {useRouter} from 'next/router'

import { prismicAPI } from '../../utils/prismic'
import Story from '../../components/story'

const StoryPage = ({ content }) => {
  const router = useRouter()
  return (
    <Story
      title={content.data.title[0].text}
      timestamp={content.first_publication_date}
      content={content.data.description}
      embed={content.data.soundcloud_link}
    />
  )
}

export async function getStaticProps({ params }) {
  const pageContent = await prismicAPI().then(api => {
    return api.getByUID(params.type, params.uid)
  })
  const props = { content: pageContent }
  return { props }
}

// `getStaticPaths` function tells Next which pages to export at build time
export async function getStaticPaths() {
  const allStories = await prismicAPI().then(api => {
    return api.query(
      Prismic.Predicates.any('document.type', ["music", "photo_gallery"]),
      {pageSize: 100},
    )
  })
  return {
    paths: allStories.results.map(({ uid, type }) => ({ params: { uid, type } })),
    fallback: false,
  }
}

export default StoryPage
