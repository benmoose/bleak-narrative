import Prismic from 'prismic-javascript'
import { Helmet } from 'react-helmet'

import Page from '../../components/page'
import { prismicAPI, getTitle, getAuthorName } from '../../utils/prismic'

const BleakPage = ({ document }) => {
  return (
    <>
      <Helmet>
        <title>{`${getTitle(document)} by ${getAuthorName(document)}`}</title>
      </Helmet>
      <Page document={document} />
    </>
  )
}

export async function getStaticProps ({ previewData, params }) {
  const document = await prismicAPI().then(api => {
    return api.getByUID(params.type, params.uid, previewData)
  })
  const props = { document }
  return { props }
}

// `getStaticPaths` function tells Next which pages to export at build time
export async function getStaticPaths () {
  const allStories = await prismicAPI().then(api => {
    return api.query(
      Prismic.Predicates.any('document.type', ['music', 'art', 'stories']),
      { pageSize: 100 }
    )
  })
  return {
    paths: allStories.results.map(({ uid, type }) => ({ params: { uid, type } })),
    fallback: false
  }
}

export default BleakPage
