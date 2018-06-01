import {
    FILM_DATA_ERROR,
    FILM_DATA_FETCH,
    FILM_DATA_IS_LOADING,
    CONFIG_DATA_FETCH_LANG,
    CONFIG_DATA_FETCH_IMAGES,
    TOP_FILM_DATA_FETCH,
    TOP_FILM_DATA_IS_LOADING,
    TOP_FILM_DATA_ERROR
} from '../constants/constants'


export function filmDataReducer(state, action) {
    if (!state) state = {
        isLoading: true,
        errorMessage: '',
        data: {}
    }
    switch (action.type) {
        case FILM_DATA_FETCH:
            return {
                ...state,
                data: action.data
            };

        case FILM_DATA_IS_LOADING:
            return {
                ...state,
                isLoading: action.isLoading
            };

        case FILM_DATA_ERROR:
            return {
                ...state,
                errorMessage: action.errorMessage
            };

        default:
            return state;
    }
}

export function topFilmDataReducer(state, action) {
    if (!state) state = {
        isLoading: true,
        errorMessage: '',
        data: {}
    }

    switch (action.type) {
        case TOP_FILM_DATA_FETCH:
            return {
                ...state,
                data: action.data
            };

        case TOP_FILM_DATA_IS_LOADING:
            return {
                ...state,
                isLoading: action.isLoading
            };

        case TOP_FILM_DATA_ERROR:
            return {
                ...state,
                errorMessage: action.errorMessage
            };

        default:
            return state;
    }
}

export function configApiReducer(state, action) {
    if (!state) state = {
        images: {},
        lang: []
    }
    switch (action.type) {
        case CONFIG_DATA_FETCH_IMAGES:
            return {
                ...state,
                images: action.data
            }

        case CONFIG_DATA_FETCH_LANG:
            return {
                ...state,
                lang: action.data
            }

        default:
            return state;
    }
}


