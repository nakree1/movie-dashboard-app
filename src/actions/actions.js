import {
    CONFIG_DATA_FETCH_IMAGES,
    CONFIG_DATA_FETCH_LANG,
    FILM_DATA_ERROR,
    FILM_DATA_FETCH,
    FILM_DATA_IS_LOADING,
    FILM_DATA_SAVE,
    FILM_DATA_REMOVE,
    MULTI_DATA_ERROR,
    MULTI_DATA_FETCH,
    MULTI_DATA_IS_LOADING, SEARCH_DATA_FETCH, SEARCH_DATA_REQUEST
} from '../constants/constants'

//Film Content

export function filmDataFetch(data) {
    return {
        type: FILM_DATA_FETCH,
        data: data
    };
}

export function filmDataSave(data) {
    return {
        type: FILM_DATA_SAVE,
        data: data
    };
}

export function filmDataRemove(id) {
    return {
        type: FILM_DATA_REMOVE,
        id: id
    };
}

export function filmDataError(error) {
    return {
        type: FILM_DATA_ERROR,
        errorMessage: error
    };
}

export function filmDataLoading(bool) {
    return {
        type: FILM_DATA_IS_LOADING,
        isLoading: bool
    };
}

//Top Content

export function multiDataFetch(data) {
    return {
        type: MULTI_DATA_FETCH,
        data: data
    };
}

export function multiDataLoading(bool) {
    return {
        type: MULTI_DATA_IS_LOADING,
        isLoading: bool
    };
}

export function multiDataError(error) {
    return {
        type: MULTI_DATA_ERROR,
        errorMessage: error
    };
}

//Search

export function searchData(data) {
    return {
        type: SEARCH_DATA_FETCH,
        data: data
    };
}

export function searchRequest(request) {
    return {
        type: SEARCH_DATA_REQUEST,
        request: request
    };
}


//App Init

export function configDataFetchImages(data) {
    return {
        type: CONFIG_DATA_FETCH_IMAGES,
        data: data
    };
}

export function configDataFetchLang(data) {
    return {
        type: CONFIG_DATA_FETCH_LANG,
        data: data
    };
}
