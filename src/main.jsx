import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { CounterApp, CounterWithCustomHook } from './01-useState';
// import { HooksApps } from './HooksApps';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <CounterWithCustomHook />
    </React.StrictMode>
);
