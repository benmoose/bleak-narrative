import Prismic from 'prismic-javascript'

import { PRISMIC_DOC_TYPE_MUSIC, PRISMIC_DOC_TYPE_ART, PRISMIC_DOC_TYPE_STORIES, prismicAPI, getTitle, getLink } from '../utils/prismic'
import { LinkItem } from '../components/links'

const LinksPage = ({ latestDocuments, olderDocuments }) => {
  return (
    <>
      <h3>Latest clickies (:</h3>
      {getLinksForDocuments(latestDocuments)}

      <h3 style={{ marginTop: '50px' }}>From last week</h3>
      {getLinksForDocuments(olderDocuments)}
    </>
  )
}

function getLinksForDocuments (documents) {
  return documents.map(d => (
    <LinkItem
      key={d.uid}
      type={d.type}
      text={getTitle(d)}
      link={getLink(d)}
      timestamp={d.first_publication_date}
    />
  ))
}

export async function getStaticProps () {
  const linkDocument = await prismicAPI().then(function (api) {
    return api.getSingle('links')
  })

  const musicDocument = await prismicAPI().then(function (api) {
    return api.query(
      Prismic.Predicates.any('document.type', [PRISMIC_DOC_TYPE_MUSIC]),
      { orderings: '[document.first_publication_date desc]', pageSize: 2 }
    )
  })

  const artDocument = await prismicAPI().then(function (api) {
    return api.query(
      Prismic.Predicates.any('document.type', [PRISMIC_DOC_TYPE_ART]),
      { orderings: '[document.first_publication_date desc]', pageSize: 2 }
    )
  })

  const storyDocument = await prismicAPI().then(function (api) {
    return api.query(
      Prismic.Predicates.any('document.type', [PRISMIC_DOC_TYPE_STORIES]),
      { orderings: '[document.first_publication_date desc]', pageSize: 2 }
    )
  })

  const latestDocuments = [
    ...musicDocument.results.slice(0, 1),
    ...artDocument.results.slice(0, 1),
    ...storyDocument.results.slice(0, 1)
  ]

  const olderDocuments = [
    ...musicDocument.results.slice(1),
    ...artDocument.results.slice(1),
    ...storyDocument.results.slice(1)
  ]

  return { props: { linkDocument, latestDocuments, olderDocuments } }
}

export default LinksPage
