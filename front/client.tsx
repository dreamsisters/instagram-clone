import 'core-js/stable';
import 'regenerator-runtime/runtime';
import React from 'react';
import { render } from 'react-dom';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';

import App from './layouts';

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.querySelector('#app'),
);

// const AppRoot = document.querySelector('#app');
// const root = createRoot(AppRoot!);

// root.render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>,
// );
