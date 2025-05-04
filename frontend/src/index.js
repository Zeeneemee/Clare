import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { RoutineProvider } from './lib/routineContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <RoutineProvider>
    <App />
  </RoutineProvider>
  </React.StrictMode>
);
