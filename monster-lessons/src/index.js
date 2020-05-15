import React from 'react';
import ReactDOM from 'react-dom';
import {createStore ,applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import './index.css';
import App from './App';
import reducer from './reducers';
import * as serviceWorker from './serviceWorker';
import { Router , Route, hashHistory} from 'react-router'
const store = createStore(reducer,composeWithDevTools(applyMiddleware(thunk)));
ReactDOM.render(
 <Provider store={store}>
     <Router history={hashHistory}>
         <Route path="/" component={App}/>
     </Router>
 </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

