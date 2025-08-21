import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.min.css";
import'@fontsource/poppins';
import "@fontsource/kelly-slab";
import "@fontsource/oswald/700.css";
import "@fontsource/oswald"; 
import "@fontsource/lato"; // Defaults to weight 400
import "@fontsource/lato/700.css"; // Bold weight
import "@fontsource/oswald"; // Defaults to weight 400
import "@fontsource/oswald/600.css"; // Example for semi-bold
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
