import Cookies from 'js-cookie'

export function setCookies (name, value) {
  return Cookies.set(name, value)
}

export function getCookies (name) {
  return Cookies.get(name)
}

export function removeCookies (name) {
  return Cookies.remove(name)
}
