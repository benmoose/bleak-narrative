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
        href={`/${doc.type}/${doc.uid}`}
        document={doc.document}
      />
    )
  })
}

export async function getStaticProps() {
  const prismicResponse = await prismicAPI().then(function(api) {
    return api.query(Prismic.Predicates.any('document.type', ["music", "photo_gallery"]))
  })

  const feedLinks = prismicResponse.results.map(document => {
    console.log("R", document)
    const titleData = document.data.title
    if (titleData.length === 0) {
      return null
    }
    const { uid, type } = document
    return { uid, type, document }
  }).filter(el => !!el).reverse()
  return { props: { feedLinks } }
}

export default Home
