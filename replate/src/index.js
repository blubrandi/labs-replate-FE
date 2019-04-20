import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { reducer } from './reducers'
import thunk from 'redux-thunk'

import './index.css';

import App from './App';

const store = createStore(reducer, applyMiddleware(thunk));
window.reduxStore = store;
const rootElement = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);


