import React from 'react'
import Prismic from 'prismic-javascript'

import FeedList from '../components/feedList'
import { prismicAPI } from '../utils/prismic'

const Home = props => {
  return <FeedList items={props.items.map(item => item.document)} />
}

export async function getStaticProps () {
  const prismicResponse = await prismicAPI().then(function (api) {
    return api.query(
      Prismic.Predicates.any('document.type', ['music', 'art', 'stories']),
      { orderings: '[document.first_publication_date desc]' }
    )
  })

  const items = prismicResponse.results.map(document => {
    const { uid, type } = document
    return { uid, type, document }
  }).filter(el => !!el)
  return { props: { items } }
}

export default Home
