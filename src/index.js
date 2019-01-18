import {a} from './temp';
import React from 'react';
import ReactDOM from 'react-dom';

import './index.css' ;
const title = 'Minimal React Webpack Babel Setup';

ReactDOM.render(
  <div className="title">{title}</div>,
  document.getElementById('app')
);

console.log(`A = ${a}`);