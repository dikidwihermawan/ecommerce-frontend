import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import axios from 'axios';
import { RecoilRoot } from 'recoil';
import { BrowserRouter } from 'react-router-dom';

axios.defaults.baseURL = 'http://127.0.0.1:8000/api';
axios.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('tokenUser')}`;
    return config;
});

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <RecoilRoot>
            <App />
        </RecoilRoot>
    </BrowserRouter>
);
