import { PRISMIC_DOC_TYPE_MUSIC, PRISMIC_DOC_TYPE_ART, PRISMIC_DOC_TYPE_STORIES, prismicAPI } from '../utils/prismic'
import Links from '../components/links'
import Prismic from 'prismic-javascript'

const LinksPage = ({ linkDocument }) => {
  const links = linkDocument.data.body.map((slice, i) => (
    <Links key={`${i}-${slice.slice_type}`} items={slice.items} />
  ))
  return (
    <>
      <h3>Clicky stuffs :)</h3>
      {links}
    </>
  )
}

export async function getStaticProps () {
  const linkDocument = await prismicAPI().then(function (api) {
    return api.getSingle('links')
  })

  const musicDocument = await prismicAPI().then(function (api) {
    return api.query(
      Prismic.Predicates.any('document.type', [PRISMIC_DOC_TYPE_MUSIC]),
      { orderings: '[document.first_publication_date desc]', pageSize: 1 }
    )
  })

  const artDocument = await prismicAPI().then(function (api) {
    return api.query(
      Prismic.Predicates.any('document.type', [PRISMIC_DOC_TYPE_ART]),
      { orderings: '[document.first_publication_date desc]', pageSize: 1 }
    )
  })

  const storyDocument = await prismicAPI().then(function (api) {
    return api.query(
      Prismic.Predicates.any('document.type', [PRISMIC_DOC_TYPE_STORIES]),
      { orderings: '[document.first_publication_date desc]', pageSize: 1 }
    )
  })

  const latestDocuments = [...musicDocument.results, ...artDocument.results, ...storyDocument.results]

  return { props: { linkDocument, latestDocuments } }
}

export default LinksPage
