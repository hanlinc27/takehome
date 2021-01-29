import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
const proxy = require('http-proxy-middleware')

module.exports = function(app) {
    app.use(proxy(['/api' ], { target: 'http://localhost:5000' }));
} 
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
