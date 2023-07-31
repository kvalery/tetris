import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Route, Routes, RouterProvider } from 'react-router-dom';
import Maine from './pages/Main';
import About from './pages/About';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { store } from './redux/store';
// import { rootReducer } from './redux/redusers/actionReducer';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// создание store вызов createStore()
// передача его провайдеру
const appStore: any = store;

root.render(
  <Provider store={appStore}>
    <BrowserRouter>
        <App />
    </BrowserRouter>
  </Provider>
);

