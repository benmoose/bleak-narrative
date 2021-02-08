import React from 'react'
import Prismic from 'prismic-javascript'
import Grid from '@material-ui/core/Grid'

import PageLink from '../components/link'
import SoundcloudPlayer from '../components/soundcloudPlayer'
import { HomePageJumbotron } from '../components/homePage'
import { prismicAPI } from '../utils/prismic'
import RichText from '../components/richText'

const Home = ({ recentDocuments, latestMusicDocument }) => {
  const musicData = latestMusicDocument.document.data
  const SCPlayer = musicData.body.map(slice => slice.items.map((sliceItem, i) => (
    <React.Fragment key={i}>
      <SoundcloudPlayer src={sliceItem.track.embed_url} />
    </React.Fragment>
  )))[0]

  const MusicContent = musicData.body.map(slice => slice.items.map((sliceItem, i) => (
    <React.Fragment key={i}>
      <RichText content={sliceItem.track_description} />
    </React.Fragment>
  )))[0]

  const AuthorLink = musicData.author_profile && musicData.author_profile.embed_url
    ? <PageLink target='_blank' href={musicData.author_profile.embed_url}>{musicData.author_name}</PageLink>
    : <strong>{musicData.author_name}</strong>

  return (
    <Grid container spacing={4}>
      <Grid item xs={12}>
        <HomePageJumbotron />
      </Grid>
    </Grid>
  )
}

export async function getStaticProps () {
  const allDocuments = await prismicAPI().then(function (api) {
    return api.query(
      Prismic.Predicates.any('document.type', ['music', 'art', 'stories']),
      { orderings: '[document.first_publication_date desc]', pageSize: 11 }
    )
  })

  const musicDocuments = await prismicAPI().then(function (api) {
    return api.query(
      Prismic.Predicates.any('document.type', ['music']),
      { orderings: '[document.first_publication_date desc]', pageSize: 1 }
    )
  })

  const latestMusicDocument = musicDocuments.results.map(preparePrismicResponse)[0]
  // filter out the featured music document so we don't repeat
  const recentDocuments = allDocuments.results.map(preparePrismicResponse).filter(el => el.uid !== latestMusicDocument.uid)
  return { props: { recentDocuments, latestMusicDocument } }
}

function preparePrismicResponse (document) {
  const { uid, type } = document
  return { uid, type, document }
}

export default Home
