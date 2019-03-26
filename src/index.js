import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { BrowserRouter } from "react-router-dom";
import store from './store';


ReactDOM.render(
    <BrowserRouter> 
    {/* here i am naming giving the store the prop name store */}
    <App store={store}/>
   </BrowserRouter>, document.getElementById('root'));
