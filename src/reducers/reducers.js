import {
    FILM_DATA_ERROR,
    FILM_DATA_FETCH,
    FILM_DATA_IS_LOADING
} from '../constants/constants'

export function itemsIsLoadingReducer(state = false, action) {
    switch (action.type) {
        case 'ITEMS_IS_LOADING':
            return action.isLoading;

        default:
            return state;
    }
}

export function filmDataReducer(state, action) {
    if (!state) state = {
        isLoading: false,
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



// export function itemsHasErroredReducer(state = false, action) {
//     switch (action.type) {
//         case 'ITEMS_HAS_ERRORED':
//             return action.hasErrored;
//
//         default:
//             return state;
//     }
// }
// export function itemsErrorMessageReducer(state = '', action) {
//     switch (action.type) {
//         case 'ITEMS_ERROR_MESSAGE':
//             return action.errorMessage
//
//         default:
//             return state;
//     }
// }
//
// export function itemsReducer(state = [], action) {
//     switch (action.type) {
//         case 'ITEMS_FETCH_DATA_SUCCESS':
//             return action.items;
//
//         default:
//             return state;
//     }
// }