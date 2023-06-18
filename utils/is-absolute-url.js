const ABSOLUTE_URL_REGEX = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/
const WINDOWS_PATH_REGEX = /^[a-zA-Z]:\\/

const isAbsoluteUrl = (url) => {
  if (WINDOWS_PATH_REGEX.test(url)) {
    return false
  }

  return ABSOLUTE_URL_REGEX.test(url)
}

export default isAbsoluteUrl
