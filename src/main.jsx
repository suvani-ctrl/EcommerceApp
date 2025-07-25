import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';  // <-- make sure this import is here
import {BrowserRouter} from 'react-router-dom'
import ShopContextProvider from './context/ShopContext';
ReactDOM.createRoot(document.getElementById('root')).render(
    
    <BrowserRouter>
    <ShopContextProvider>
        <App/>
    </ShopContextProvider>
    </BrowserRouter>
);
