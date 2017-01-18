require('babel-polyfill');

import React from 'react';
import ReactDOM  from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

import Email from './components/email';
import EmailList from './components/email-list';
import EmailListContainer from './components/email-list-container';
import App from './components/app';

const routes = (
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <Route path=":emailId" component={EmailListContainer} />
        </Route>
    </Router>
);

document.addEventListener('DOMContentLoaded', () =>
    ReactDOM.render(routes, document.getElementById('app'))
);


