const STORAGE_ITEM = 'secret'
const PRIVATE_KEY = 'fQrTt5wnVemGOjPgNT2G'
const PASSWORD = 'ben'

export function privateGuard (to, from, next) {
  if (localStorage.getItem(STORAGE_ITEM) === PRIVATE_KEY) return next()
  let i = 0
  while (window.prompt('Restricted Page, please enter the password:') !== PASSWORD) {
    if (++i >= 3) return next({ name: 'Home' })
  }
  localStorage.setItem(STORAGE_ITEM, PRIVATE_KEY)
  return next()
}
