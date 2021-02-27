import Prismic from 'prismic-javascript'

export const PRISMIC_DOC_TYPE_MUSIC = 'music'
export const PRISMIC_DOC_TYPE_ART = 'art'
export const PRISMIC_DOC_TYPE_STORIES = 'stories'
export const PRISMIC_DOC_TYPES = [PRISMIC_DOC_TYPE_MUSIC, PRISMIC_DOC_TYPE_ART, PRISMIC_DOC_TYPE_STORIES]

const apiEndpoint = process.env.PRISMIC_API

export function prismicAPI () {
  return Prismic.api(apiEndpoint)
}

export function getTitle (document) {
  switch (document.type) {
    case 'music':
      return document.data.title[0].text
    case 'art':
      return document.data.title[0].text
    case 'stories':
      return document.data.title[0].text
  }
  throw Error(`Cannot get feed-link title for ${document.type} type`)
}

export function getLink (document) {
  if (!PRISMIC_DOC_TYPES.includes(document.type)) {
    throw Error(`Cannot get link for unknown document '${document.type}'`)
  }
  return `/${document.type}/${document.uid}`
}

export function getAuthorName (document) {
  return document.data.author_name
}
