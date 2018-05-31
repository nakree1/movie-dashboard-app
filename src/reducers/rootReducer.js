import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'

import
{
    filmDataReducer,
    topFilmDataReducer,
    configApiReducer

} from './reducers'

export default combineReducers({
    configApi: configApiReducer,
    cachedFilm: filmDataReducer,
    cachedTop: topFilmDataReducer,
    routing: routerReducer
});

