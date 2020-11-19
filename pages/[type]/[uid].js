import Prismic from 'prismic-javascript'

import Page from '../../components/page'
import { prismicAPI } from '../../utils/prismic'

const BleakPage = ({ document }) => {
  return <Page document={document} />
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

export default BleakPage
