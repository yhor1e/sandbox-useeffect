import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

const heading = 'sandbox-useeffect';
ReactDOM.render(<App heading={heading} />, document.getElementById('app'));
console.log('App.js');

const unmountBtn = document.getElementById('unmount');
unmountBtn.addEventListener('click', () => {
  ReactDOM.unmountComponentAtNode(document.getElementById('app'));
});

module.hot.accept();
