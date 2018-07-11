import React from 'react';
import {render} from 'react-dom';
import {HashRouter as Router, browserHistory} from 'react-router-dom';
import {Provider} from 'react-redux'
import configureStore from './store/configureStore'
import {syncHistoryWithStore} from 'react-router-redux'

import {configDataFetch, filmDataFetch, filmDataError, filmDataLoading} from './actions/actions.js'
import {fetchConfigApi} from "./actions/fetchData"


import App from './components/App'
import './index.scss'
import 'bootstrap/scss/bootstrap.scss'
import {filmDataRemove, filmDataSave} from "./actions/actions";


const store = configureStore(

) //initial state put here

// const history = syncHistoryWithStore(browserHistory, store)
// Router history={history}>
store.dispatch(filmDataLoading(true))
store.dispatch(fetchConfigApi())
store.dispatch(filmDataSave({
    id:424,
    title:"Schindler's List",
    imageLink:"http://image.tmdb.org/t/p//w342/yPisjyLweCl1tbgwgtzBCNCBle.jpg"
}))
store.dispatch(filmDataSave({
    id:299536,
    title:"Avengers: Infinity War",
    imageLink:"http://image.tmdb.org/t/p//w342/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg"
}))
store.dispatch(filmDataSave({
    id:155,
    title:"The Dark Knight",
    imageLink:"http://image.tmdb.org/t/p//w342/1hRoyzDtpgMU7Dz4JF22RANzQO7.jpg"
}))
// console.log(store.getState())

render((
    <Provider store={store}>
        <Router>
            <App/>
        </Router>
    </Provider>
), document.getElementById('root'));