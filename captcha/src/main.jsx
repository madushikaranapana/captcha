import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';

import Captcha from './Captcha'; 


ReactDOM.render(
    <BrowserRouter>
        <Captcha />
    </BrowserRouter>, document.getElementById('root'));
 
