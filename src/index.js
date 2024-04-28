import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './containers/app/App';
import './index.css';

const app = document.getElementById('app');
const root = ReactDOM.createRoot(app);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
