const cookieConsentKey = 'bleak:cookies:dialogue-acknowledged'

export const hasCookieConsent = () => {
  return !!window.localStorage.getItem(cookieConsentKey)
}

export const setCookieConsent = () => {
  window.localStorage.setItem(cookieConsentKey, 'true')
  return true
}
