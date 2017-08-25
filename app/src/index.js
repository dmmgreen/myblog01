import React from 'react';
import ReactDOM from 'react-dom';
import './static/css/index.css';
import MyRoute from './components/router';
import reducers from './reducers';
import {createStore,applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';

const middleware=[thunk];
if(process.env.NODE_ENV!=='production'){
    middleware.push(createLogger());
}
const store=createStore(
    reducers,
    applyMiddleware(...middleware)
);

ReactDOM.render(
    <Provider store={store}>
        <MyRoute />
    </Provider>,
    document.getElementById('root')
);
