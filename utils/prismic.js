import Prismic from 'prismic-javascript'

const apiEndpoint = process.env.PRISMIC_API

export function prismicAPI(){
  return Prismic.api(apiEndpoint)
}
