import Prismic from 'prismic-javascript'

export const PRISMIC_DOC_TYPE_MUSIC = 'music'
export const PRISMIC_DOC_TYPE_ART = 'art'
export const PRISMIC_DOC_TYPE_STORIES = 'stories'
export const PRISMIC_DOC_TYPES = [PRISMIC_DOC_TYPE_MUSIC, PRISMIC_DOC_TYPE_ART, PRISMIC_DOC_TYPE_STORIES]

const apiEndpoint = process.env.PRISMIC_API

export function prismicAPI () {
  return Prismic.api(apiEndpoint)
}
