import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
// import registerServiceWorker from './registerServiceWorker';
import { unregister } from './registerServiceWorker';

import store from './redux/store';
import { Provider } from 'react-redux';


ReactDOM.render(
  <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>, 
    document.getElementById('root'));
unregister();
