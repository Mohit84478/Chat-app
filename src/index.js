import React from 'react';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Header from './component/Nav';
import ReactDOM from 'react-dom/client';

import {Provider} from "react-redux"
import store from './redux/store';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(

 <Provider store={store}>

   <Header/>
    <App />
 </Provider>
    
 
);

reportWebVitals();
