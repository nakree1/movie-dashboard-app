const API_KEY = 'b5f0098853db702baae85840063564e6'
const DOMAIN = 'https://api.themoviedb.org'
const DEFAULT_LANG = 'en-US'

// `https://api.themoviedb.org/3/movie/32463?api_key=b5f0098853db702baae85840063564e6&language=en-US`

function fetchData(link) {
    const url = `${DOMAIN}/${link}?api_key=${API_KEY}&language=${DEFAULT_LANG}`
    return fetch(url)
}

function makeUrl(link) {
   return `${DOMAIN}/${link}?api_key=${API_KEY}&language=${DEFAULT_LANG}`
}

export {makeUrl, fetchData}
