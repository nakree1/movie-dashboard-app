import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'

import
{
    filmDataReducer,
    multiDataReducer,
    savedDataReducer,
    configApiReducer, searchReducer

} from './reducers'

export default combineReducers({
    configApi: configApiReducer,
    cachedFilm: filmDataReducer,
    cachedFilms: multiDataReducer,
    savedFilms: savedDataReducer,
    search: searchReducer,
    routing: routerReducer
});

