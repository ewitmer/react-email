require('babel-polyfill');

import React from 'react';
import ReactDOM  from 'react-dom';

import Email from './components/email';
import EMAIL from './emails';

document.addEventListener('DOMContentLoaded', () =>
    ReactDOM.render(<Email title={EMAIL.inbox[0].title} />, document.getElementById('app'))
);

