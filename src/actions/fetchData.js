import axios from 'axios';
import { filmDataFetch, filmDataError, filmDataLoading } from './actions'

const API_KEY = 'b5f0098853db702baae85840063564e6'
const DOMAIN = 'https://api.themoviedb.org'
const DEFAULT_LANG = 'en-US'

function fetchData(link, options) {
    const url = `${DOMAIN}/${link}?api_key=${API_KEY}&language=${DEFAULT_LANG}`
    return (dispatch) => {
        axios.get(url, options)
                    .then((response) => {
                        console.log(response.data)
                        dispatch(filmDataFetch(response.data))
                        dispatch(filmDataLoading(false))
                    })
                    .catch((error) => {
                        console.log(error.message)
                        dispatch(filmDataError(error.message))
                    })
    }
}

// function fetchData(link, options) {
//     return
//         (dispatch) => {dispatch(itemsIsLoading(true))}
//
//         const url = `${DOMAIN}/${link}?api_key=${API_KEY}&language=${DEFAULT_LANG}`
//         console.log('fetchData start axios')
//         axios.get(url, options)
//                     .then((response) => {
//                         console.log(response.data)
//                         dispatch(itemsIsLoading(false))
//                         dispatch(itemsFetchDataSuccess(response.data))
//                     })
//                     .catch((error) => {
//                         console.log(error.message)
//                         dispatch(itemsIsLoading(false))
//                         dispatch(itemsHasErrored(true))
//                         dispatch(itemsErrorMessage(error.message))
//                     })
//         console.log('fetchData end axios')
// }


// `https://api.themoviedb.org/3/movie/32463?api_key=b5f0098853db702baae85840063564e6&language=en-US`

// function fetchData(link) {
//     const url = `${DOMAIN}/${link}?api_key=${API_KEY}&language=${DEFAULT_LANG}`
//     return fetch(url)
// }

// function fetchData(link) {
//     const url = `${DOMAIN}/${link}?api_key=${API_KEY}&language=${DEFAULT_LANG}`
//     const source = axios.CancelToken.source()
//     return axios.get(url, {
//         validateStatus: (status) => {
//             return status === 200; // Reject only if (false) the status code is not equal 200
//         },
//         cancelToken: source.token
//     })
// }

function makeUrl(link) {
   return `${DOMAIN}/${link}?api_key=${API_KEY}&language=${DEFAULT_LANG}`
}

export {makeUrl, fetchData}
