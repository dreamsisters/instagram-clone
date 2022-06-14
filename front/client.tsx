import 'core-js/stable';
import 'regenerator-runtime/runtime';
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';

import App from './layouts';
// import FullModal from '@components/FullModalPortal';
// import SmallModal from '@components/SmallModalPortal';

render(
  <BrowserRouter>
    <App />
    {/* <FullModal>{}</FullModal> */}
    {/* <SmallModal>{}</SmallModal> */}
  </BrowserRouter>,
  document.querySelector('#app'),
);
