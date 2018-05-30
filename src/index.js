import React from 'react';
import {render} from 'react-dom';
import {HashRouter as Router, browserHistory} from 'react-router-dom';
import {Provider} from 'react-redux'
import configureStore from './store/configureStore'
import {syncHistoryWithStore} from 'react-router-redux'

import {itemsIsLoading, filmDataFetch, filmDataError, filmDataLoading} from './actions/actions.js'

import App from './components/App'
import 'bootstrap/scss/bootstrap.scss'

const store = configureStore(

) //initial state put here

// const history = syncHistoryWithStore(browserHistory, store)
// Router history={history}>
console.log(store.getState())
store.dispatch(filmDataFetch({id:'First data'}))
console.log(store.getState())
store.dispatch(filmDataFetch({id:'Second data'}))
store.dispatch(filmDataLoading(true))
console.log(store.getState())

render((
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>
), document.getElementById('root'));