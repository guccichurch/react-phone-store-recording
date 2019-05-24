import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom";
import './index.css';
import {ProductProvider} from './context';

ReactDOM.render(
  // ene App maani manai app Router dotorh haryalagdana  , ProductProvider n app buh huudas component uudad product data g hangaj  ogoh zorilgotoi
  // hamgiin tomoor n harualuulj baigaa n app iin component uud olon js damjij ogogdloo awahgui shuud ProductProvider tai holbogdon ogogdloo 
  // awna ene hurdan uuniig prop drilling , context API gene
  <ProductProvider>
    <Router>
      <App />
    </Router>
  </ProductProvider>

  ,
  document.getElementById('root')
);
