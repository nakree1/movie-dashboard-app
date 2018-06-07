import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'

import
{
    filmDataReducer,
    topFilmDataReducer,
    savedDataReducer,
    configApiReducer, searchReducer

} from './reducers'

export default combineReducers({
    configApi: configApiReducer,
    cachedFilm: filmDataReducer,
    cachedTop: topFilmDataReducer,
    savedFilms: savedDataReducer,
    search: searchReducer,
    routing: routerReducer
});

