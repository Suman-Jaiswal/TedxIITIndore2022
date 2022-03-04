import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import Maintenance from './components/Maintenance/Maintenance';

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            {
                process.env.REACT_APP_MODE === 'maintenance' ? <Maintenance /> : <App />
            }
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
