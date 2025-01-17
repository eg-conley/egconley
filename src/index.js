import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Routing from './Routing.js'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render (
  <React.StrictMode>
    <Routing>
      <App/>
    </Routing>
  </React.StrictMode>
);