import {
    FILM_DATA_ERROR,
    FILM_DATA_FETCH,
    FILM_DATA_IS_LOADING
} from '../constants/constants'


export function itemsIsLoading(bool) {
    return {
        type: ITEMS_IS_LOADING,
        isLoading: bool
    };
}

export function filmDataFetch(data) {
    return {
        type: FILM_DATA_FETCH,
        data: data
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

// export function itemsFetchDataSuccess(items) {
//     return {
//         type: 'ITEMS_FETCH_DATA_SUCCESS',
//         items
//     };
// }
//
// export function itemsHasErrored(bool) {
//     return {
//         type: 'ITEMS_HAS_ERRORED',
//         hasErrored: bool
//     };
// }
//
// export function itemsErrorMessage(str) {
//     return {
//         type: 'ITEMS_ERROR_MESSAGE',
//         errorMessage: str
//     };
// }