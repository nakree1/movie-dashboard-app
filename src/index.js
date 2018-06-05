import React from 'react';
import {render} from 'react-dom';
import {HashRouter as Router, browserHistory} from 'react-router-dom';
import {Provider} from 'react-redux'
import configureStore from './store/configureStore'
import {syncHistoryWithStore} from 'react-router-redux'

import {configDataFetch, filmDataFetch, filmDataError, filmDataLoading} from './actions/actions.js'
import {fetchConfigApi} from "./actions/fetchData"


import App from './components/App'
import 'bootstrap/scss/bootstrap.scss'
import {filmDataRemove, filmDataSave} from "./actions/actions";


const store = configureStore(

) //initial state put here

// const history = syncHistoryWithStore(browserHistory, store)
// Router history={history}>
store.dispatch(filmDataLoading(true))
store.dispatch(fetchConfigApi())
store.dispatch(filmDataSave({id:123,title:"blah blah"}))
store.dispatch(filmDataSave({id:323,title:"blah11 blah"}))
store.dispatch(filmDataSave({id:423,title:"blah222 blah"}))
store.dispatch(filmDataRemove(323))
console.log(store.getState())

render((
    <Provider store={store}>
        <Router>
            <App/>
        </Router>
    </Provider>
), document.getElementById('root'));