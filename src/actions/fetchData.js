import axios from 'axios';
import {
    configDataFetchImages,
    filmDataError,
    filmDataFetch,
    filmDataLoading,
    topFilmDataError,
    topFilmDataFetch,
    topFilmDataLoading
} from './actions'
import {API_KEY, DEFAULT_LANG, DOMAIN} from "../constants/constants"


function fetchDataFilm(link, options) {
    const url = `${DOMAIN}/${link}?api_key=${API_KEY}&language=${DEFAULT_LANG}`
    return (dispatch) => {
        axios.get(url, options)
            .then((response) => {
                dispatch(filmDataFetch(response.data))
                dispatch(filmDataLoading(false))
            })
            .catch((error) => {
                console.log(error.message)
                dispatch(filmDataError(error.message))
            })
    }
}

function fetchDataTop(page = 1, options) {
    const link = '3/movie/top_rated'
    const url = `${DOMAIN}/${link}?api_key=${API_KEY}&language=${DEFAULT_LANG}&page=${page}`
    return (dispatch) => {
        axios.get(url, options)
            .then((response) => {
                console.log(response.data)
                dispatch(topFilmDataFetch(response.data))
                dispatch(topFilmDataLoading(false))
            })
            .catch((error) => {
                console.log(error.message)
                dispatch(topFilmDataError(error.message))
            })
    }
}

function fetchConfigApi(options) {
    const url = `${DOMAIN}/3/configuration?api_key=${API_KEY}`
    return (dispatch) => {
        axios.get(url, options)
            .then((response) => {
                // console.log('fetchConfigApi:')
                // console.log(response.data.images)
                dispatch(configDataFetchImages(response.data.images))
            })
            .catch((error) => {
                console.log('fetchConfigApi:')
                console.log(error.message)
                setTimeout((options) => fetchConfigApi(options), 1000)
            })
    }
}

function makeUrl(link) {
    return `${DOMAIN}/${link}?api_key=${API_KEY}&language=${DEFAULT_LANG}`
}

export {makeUrl, fetchDataFilm, fetchDataTop, fetchConfigApi}
