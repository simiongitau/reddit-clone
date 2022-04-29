import React from 'react';
import ReactDom from 'react-dom';
import "./index.css";
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import 'font-awesome/css/font-awesome.min.css';
import App from './App';
import { BrowserRouter, BrowserRouter as Router } from "react-router-dom";




ReactDom.render(
    <BrowserRouter>
       <App/>
    </BrowserRouter>
    ,


    document.getElementById('root')
);



