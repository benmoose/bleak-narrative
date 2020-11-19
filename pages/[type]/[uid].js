import Prismic from 'prismic-javascript'
import {useRouter} from 'next/router'

import CratediggingPage from '../../components/cratediggingPage'
import MusicPage from '../../components/musicPage'
import { prismicAPI } from '../../utils/prismic'

const Page = ({ document }) => {
  const router = useRouter()
  const PageComponent = pageComponentForType(router.query.type)
  return <PageComponent document={document} />
}

export async function getStaticProps({ params }) {
  const document = await prismicAPI().then(api => {
    return api.getByUID(params.type, params.uid)
  })
  const props = { document }
  return { props }
}

// `getStaticPaths` function tells Next which pages to export at build time
export async function getStaticPaths() {
  const allStories = await prismicAPI().then(api => {
    return api.query(
      Prismic.Predicates.any('document.type', ["music", "photo_gallery", "cratedigging"]),
      {pageSize: 100},
    )
  })
  return {
    paths: allStories.results.map(({ uid, type }) => ({ params: { uid, type } })),
    fallback: false,
  }
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
