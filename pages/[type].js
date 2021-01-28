import Prismic from 'prismic-javascript'
import DefaultErrorPage from 'next/error'
import { useRouter } from 'next/router'

import FeedDescription from '../components/feedDescription'
import FeedLink from '../components/feedLink'
import { prismicAPI } from '../utils/prismic'

const typeDescription = {
  music: <p>We're all here for the music, right? We publish original mixes from DJs and artists coming from all corners of the world, representing all electronic music styles, every Monday at 6pm CET.</p>,
  stories: <p>Friendships forming on the dance floor, surreal conversations with strangers in the chill area, or even not-so-happy cautionary club tales involving illicit substances. No matter if you’re the superstar DJ or the light-bulb-changer at the local bar - this space is open for all narratives to be told.</p>,
  art: <p>Photographs, illustrations, sketches, videos, old party flyers, our in-house comics section, and more. You don’t need to be a magnificent artist to be featured here (have you seen our drawings?), but your pieces need to be related to club culture, and they need to tell a damn good story.</p>
}

const BleakPageByType = ({ results, page, totalPages }) => {
  if (results.length === 0) {
    return <DefaultErrorPage statusCode={404} />
  }

  const router = useRouter()
  const TypeDesc = (
    <>
      <h2>{sentenceCase(router.query.type)}</h2>
      <FeedDescription content={typeDescription[router.query.type]} />
    </>
  )
  const Feed = results.map(doc => (
    <FeedLink
      key={doc.uid}
      id={doc.uid}
      type={doc.type}
      document={doc}
    />
  ))
  return [TypeDesc, Feed]
}

export async function getStaticProps ({ params }) {
  const pagesForType = await prismicAPI().then(api => api.query(
    Prismic.Predicates.at('document.type', params.type),
    { orderings: '[document.first_publication_date desc]', pageSize: 100 }
  ))
  const { results, page } = pagesForType
  const props = { results, page, totalPages: pagesForType.total_pages }
  return { props }
}

export async function getStaticPaths () {
  const types = ['music', 'art', 'stories']
  return {
    paths: types.map(type => ({ params: { type } })),
    fallback: false
  }
}

export default BleakPageByType

function sentenceCase (text) {
  return text.charAt(0).toUpperCase() + text.slice(1)
}
