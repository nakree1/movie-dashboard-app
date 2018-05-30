import {combineReducers} from 'redux'
import { routerReducer } from 'react-router-redux'

import
{
    filmDataReducer,
    itemsIsLoadingReducer,

} from './reducers'

export default combineReducers({
    cachedFilm: filmDataReducer,
    routing: routerReducer
});

