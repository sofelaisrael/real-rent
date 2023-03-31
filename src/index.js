import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

//Import router
import { BrowserRouter as Router } from 'react-router-dom';

//

import HouseContextProvider from './Contexts/HouseContext';

ReactDOM.render(
    <HouseContextProvider>
        <Router>
            <App />
        </Router>
    </HouseContextProvider>
    , 
document.getElementById("root"))

