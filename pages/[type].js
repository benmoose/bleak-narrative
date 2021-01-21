import Prismic from 'prismic-javascript'
import DefaultErrorPage from 'next/error'
import { useRouter } from 'next/router'

import FeedDescription from '../components/feedDescription'
import FeedLink from '../components/feedLink'
import { prismicAPI } from '../utils/prismic'

const typeDescription = {
  music: <p>We're all here for the music, right? Music heals our souls, creates connections, shapes our lives and stories, and becomes soundtracks for unforgettable, everlasting memories. We'll be posting DJ mixes from our SoundCloud every other week. The genres will vary greatly, from House, Electro and Disco, to Hard and Industrial Techno, Acid, Experimental and Ambient. As long as we keep it underground and professional, we're open to many styles. Each mix includes a tracklist so you'll have no problem finding that weird little tune you liked.</p>,
  story: <p>Friendships forming on the dance floor, love stories beginning at music festivals, the most surreal conversations with strangers in the chill area. Life-changing DJ sets, solo-adventures, club-hopping, friends disappearing for hours, or even not-so-happy cautionary club tales involving illicit substances. All of it goes here. If you're a true raver, you have at least a dozen "best time of my life" stories to tell, and we're all ears.</p>,
  photos: <p>Our gallery contains an array of club art (yes, that's a thing) ranging from photo exhibitions, drawings, sketches, old party flyers, and an in-house comics section. We're open to showcase your art and pictures, as long as it's related to club culture. You don't have to be a magnificent artist to be here (have you seen our drawings?), but we value creativity and boldness, and of course, a good story behind your pieces.</p>,
  cratedigging: <p>Our cratedigging series uncovers what Bleak's DJs are listening to. Expect underground gems, deep cuts and assorted eargasms.</p>,
}

const BleakPageByType = ({ results, page, totalPages }) => {
  if (results.length === 0) {
    return <DefaultErrorPage statusCode={404} />
  }

  const router = useRouter()
  const TypeDesc = <FeedDescription content={typeDescription[router.query.type]} />
  const Feed = results.map(doc => <FeedLink
    key={doc.uid}
    id={doc.uid}
    type={doc.type}
    document={doc}
  />)
  return [TypeDesc, Feed]
}

export async function getStaticProps ({ params }) {
  const pagesForType = await prismicAPI().then(api => api.query(
    Prismic.Predicates.at('document.type', params.type),
    { orderings: '[document.first_publication_date desc]', pageSize: 100 }
  ))
  const { results, page, total_pages } = pagesForType
  const props = { results, page, totalPages: total_pages }
  return { props }
}

export async function getStaticPaths () {
  const types = ['music', 'photos', 'cratedigging', 'story']
  return {
    paths: types.map(type => ({ params: { type } })),
    fallback: false
  }
}

export default BleakPageByType
