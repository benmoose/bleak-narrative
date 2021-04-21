import React from 'react'
import Prismic from 'prismic-javascript'
import DefaultErrorPage from 'next/error'
import { useRouter } from 'next/router'

import MusicDoodle from '../public/img/typedoodle.png'
import StoriesDoodle from '../public/img/storiesdodle.png'
import ArtDoodle from '../public/img/artdoodle.png'
import { PageDoodle } from '../components/page'
import FeedList from '../components/feedList'
import { prismicAPI } from '../utils/prismic'

const typeDescription = {
  music: <p>Original mixes by DJs from all corners of the world every Monday at 6pm CET. Cratedigging by friends, foes, lovers, and exes now and then. Live streams, dead streams, you name it: anything that makes a sound you’ll find here!</p>,
  stories: <p>Friendships forming on the dance floor, surreal conversations with strangers in the chill area, or even not-so-happy cautionary club tales involving illicit substances. No matter if you’re the superstar DJ or the light-bulb-changer at the local bar - this space is open for all narratives to be told.</p>,
  art: <p>Photographs, illustrations, sketches, videos, old party flyers, our in-house comics section, and more. Here we showcase artists producing pieces that resonate with us and have us longing to go clubbing together again.</p>
}

const doodleByType = {
  music: MusicDoodle,
  stories: StoriesDoodle,
  art: ArtDoodle
}

const BleakPageByType = ({ results, page, totalPages }) => {
  if (results.length === 0) {
    return <DefaultErrorPage statusCode={404} />
  }

  const router = useRouter()
  return (
    <>
      <PageDoodle src={doodleByType[router.query.type]} width={900} height={214} />
      <FeedList
        documents={results}
        title={<h2>{sentenceCase(router.query.type)}</h2>}
        desc={typeDescription[router.query.type]}
      />
    </>
  )
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
