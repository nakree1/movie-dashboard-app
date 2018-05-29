import {combineReducers} from 'redux'
import {items, itemsIsLoading, itemsHasErrored, itemsErrorMessage} from './items'

export default combineReducers({
    items,
    itemsHasErrored,
    itemsErrorMessage,
    itemsIsLoading
});