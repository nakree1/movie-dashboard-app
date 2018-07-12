import {
    FILM_DATA_ERROR,
    FILM_DATA_FETCH,
    FILM_DATA_IS_LOADING,
    CONFIG_DATA_FETCH_LANG,
    CONFIG_DATA_FETCH_IMAGES,
    MULTI_DATA_FETCH,
    MULTI_DATA_IS_LOADING,
    MULTI_DATA_ERROR, FILM_DATA_SAVE, FILM_DATA_REMOVE, SEARCH_DATA_FETCH, SEARCH_DATA_REQUEST
} from '../constants/constants'


export function savedDataReducer(state = [], action) {
    switch (action.type) {
        case FILM_DATA_SAVE:
            if (state.find((item) => (item.id === action.data.id)) !== undefined) return state
            return [...state, action.data]

        case FILM_DATA_REMOVE:
            return state.filter((item) => {return item.id !== action.id})


        default:
            return state;
    }


}

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

export function multiDataReducer(state, action) {
    if (!state) state = {
        isLoading: false,
        errorMessage: '',
        data: {}
    }

    switch (action.type) {
        case MULTI_DATA_FETCH:
            return {
                ...state,
                data: action.data,
                isLoading: false
            };

        case MULTI_DATA_IS_LOADING:
            return {
                ...state,
                isLoading: true
            };

        case MULTI_DATA_ERROR:
            return {
                ...state,
                errorMessage: action.errorMessage,
                isLoading: false
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

export function searchReducer(state, action) {
    if (!state) state = {
        data: {},
        request: ''
    }
    switch (action.type) {
        case SEARCH_DATA_FETCH:
            return {
                ...state,
                data: action.data
            }

        case SEARCH_DATA_REQUEST:
            return {
                ...state,
                request: action.request
            }


        default:
            return state;
    }
}


