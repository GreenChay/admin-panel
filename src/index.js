import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { combineReducers } from 'redux';
import bars from './store/reducers';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import { createLogger } from 'redux-logger'

const logger = createLogger({
    collapsed: true,
});

const store = createStore(
    combineReducers({
        bars
    }),
    applyMiddleware(logger)
);

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();
