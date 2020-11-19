import React from 'react'
import Prismic from 'prismic-javascript'

import {prismicAPI} from '../utils/prismic'
import FeedLink from '../components/feedLink'

const Home = props => {
  return props.feedLinks.map(doc => {
    return (
      <FeedLink
        key={doc.uid}
        id={doc.uid}
        type={doc.type}
        document={doc.document}
      />
    )
  })
}

export async function getStaticProps() {
  const prismicResponse = await prismicAPI().then(function(api) {
    return api.query(
      Prismic.Predicates.any('document.type', ["music", "cratedigging"]),
      { orderings : '[document.first_publication_date desc]' },
    )
  })

  const feedLinks = prismicResponse.results.map(document => {
    const { uid, type } = document
    return { uid, type, document }
  }).filter(el => !!el)
  return { props: { feedLinks } }
}

export default Home
