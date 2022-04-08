import React from 'react';
// import { BrowserRouter } from 'react-router-dom';
import ReactDOM from "react-dom";
import './index.css';
import Main from "./Main"
// import App from "./App"
ReactDOM.render(
  // <BrowserRouter>
  //   <App/>
  // </BrowserRouter>,
  
  <React.StrictMode>
    <Main/>
  </React.StrictMode>,
  document.getElementById('root')
);

