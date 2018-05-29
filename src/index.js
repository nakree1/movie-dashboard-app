import React from 'react';
import {render} from 'react-dom';
import {HashRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux'
import configureStore from './store/configureStore'

import App from './components/App'
import 'bootstrap/scss/bootstrap.scss'

const store = configureStore() //initial state put here

render((
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>
), document.getElementById('root'));