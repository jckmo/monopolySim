import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import gameReducer from './reducers/gameReducer';

const BASE_URL = 'http://localhost:3001'
const store = createStore(gameReducer, applyMiddleware(thunk))

export default BASE_URL

ReactDOM.render(
  <Provider store={store}>    
    <App />
  </Provider>,
  document.getElementById('root')
);
