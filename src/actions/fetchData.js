import axios from 'axios';
import {
    configDataFetchImages,
    filmDataError,
    filmDataFetch,
    filmDataLoading,
    searchRequest,
    searchData,
    topFilmDataError,
    topFilmDataFetch,
    topFilmDataLoading
} from './actions'
import {API_KEY, DEFAULT_LANG, DOMAIN} from "../constants/constants"
import groupData from "./groupData";

function fetchAnyData(link, options) {
    const url = `${DOMAIN}/3/${link}?api_key=${API_KEY}&language=${DEFAULT_LANG}`
    return axios.get(url, options)
            .then((response) => {
                console.log(response.data)
                return response.data
            })
            .catch((error) => {
                console.log(error.message)
                return {}
})
}

function fetchSearch(queryData, page = 1, options) {
    // let query = {
    //     request: null,
    //     type: null,
    //     data: null
    // }
    let query = {},
        link,
        url

    if (typeof queryData === 'string') {
        query.type = 'multi'
        query.request = queryData
    } else {
        query = queryData
    }

    console.log(`query is:`)
    console.log(query)
    switch (query.type) {
        case 'multi':
            link = '3/search/multi'
            url = `${DOMAIN}/${link}?api_key=${API_KEY}&language=${DEFAULT_LANG}&query=${query.request}&page=${page}`
            break

        case 'genres':
            link = '3/discover/movie'
            const genres = query.data
            url = `${DOMAIN}/${link}?api_key=${API_KEY}&language=${DEFAULT_LANG}&sort_by=vote_average.asc&page=${page}&with_genres=${genres}`
            break
    }

    return (dispatch) => {
        axios.get(url, options)
            .then((response) => {
                dispatch(searchRequest(query))
                if (query.type === 'multi') {
                    dispatch(searchData(groupData(response.data)))
                }
                if (query.type === 'genres') {
                    dispatch(searchData(response.data))
                }

                console.log('Data Fetch Url:')
                console.log(url)
                console.log('Data Fetch Response:')
                console.log(response.data)
            })
            .catch((error) => {
                console.log(error.message)
                // dispatch(filmDataError(error.message))
                // dispatch(filmDataLoading(false))
                // setTimeout((link, options) => fetchDataFilm(link, options), 1000)
            })
    }

}


function fetchDataFilm(link, options, delay = 1000) {
    const url = `${DOMAIN}/${link}?api_key=${API_KEY}&language=${DEFAULT_LANG}`
    delay = delay * 2
    return (dispatch) => {
        dispatch(filmDataLoading(true))
        axios.get(url, options)
            .then((response) => {
                dispatch(filmDataFetch(response.data))
                dispatch(filmDataLoading(false))
            })
            .catch((error) => {
                console.log(error.message)
                dispatch(filmDataError(error.message))
                dispatch(filmDataLoading(false))
                setTimeout((link, options, delay) => fetchDataFilm(link, options, delay), delay)
            })
    }
}

function fetchDataTop(page = 1, options) {
    const link = '3/movie/top_rated'
    const url = `${DOMAIN}/${link}?api_key=${API_KEY}&language=${DEFAULT_LANG}&page=${page}`
    return (dispatch) => {
        // dispatch(topFilmDataLoading(true))
        axios.get(url, options)
            .then((response) => {
                console.log(response.data)
                dispatch(topFilmDataFetch(response.data))
                dispatch(topFilmDataLoading(false))
            })
            .catch((error) => {
                console.log(error.message)
                dispatch(topFilmDataError(error.message))
                dispatch(topFilmDataLoading(false))
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

export {makeUrl, fetchDataFilm, fetchDataTop, fetchConfigApi, fetchSearch, fetchAnyData}
