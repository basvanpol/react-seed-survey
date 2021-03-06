import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import reducers from './store/reducers';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './styles/styles.scss';


const store = configureStore({
  reducer: reducers,
  middleware: [...getDefaultMiddleware()],
})

const app = (
  <Provider store={store}>
    <BrowserRouter forceRefresh={false}>
      <App></App>
    </BrowserRouter>
  </Provider>
)


ReactDOM.render(app, document.getElementById('root'));
