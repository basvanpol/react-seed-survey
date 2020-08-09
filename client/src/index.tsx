import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import styles from './index.scss';
import { createStore } from 'redux';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import reducers from './store/reducers';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

const store = configureStore({
  reducer: reducers
})

//createStore(reducers);

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App></App>
    </BrowserRouter>
  </Provider>
)


ReactDOM.render(app, document.getElementById('root'));
