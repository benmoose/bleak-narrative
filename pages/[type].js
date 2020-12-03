import Prismic from 'prismic-javascript'
import DefaultErrorPage from 'next/error'

import { prismicAPI } from '../utils/prismic'
import FeedLink from '../components/feedLink'

const BleakPageByType = ({ results, page, totalPages }) => {
  if (results.length === 0) {
    return <DefaultErrorPage statusCode={404} />
  }
  return (
    results.map(doc => {
      return (
        <FeedLink
          key={doc.uid}
          id={doc.uid}
          type={doc.type}
          document={doc}
        />
      )
    })
  )
}

export async function getStaticProps({ params }) {
  const pagesForType = await prismicAPI().then(api => api.query(
    Prismic.Predicates.at('document.type', params.type),
    {pageSize: 100},
  ))
  const { results, page, total_pages } = pagesForType
  const props = { results, page, totalPages: total_pages }
  return { props }
}

export async function getStaticPaths() {
  const types = ["music", "photos", "cratedigging", "story"]
  return {
    paths: types.map(type => ({ params: { type }})),
    fallback: false,
  }
}

export default BleakPageByType
