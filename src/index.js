import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import configStore from './store/configureStore';
import {loadCourses} from "./actions/courseActions"
import {Provider} from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';

import './styles/styles.css'; // Yep, that's right. You can import SASS/CSS files too! Webpack will run the associated loader and plug this into the page.
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const store = configStore();
store.dispatch(loadCourses());
render(
    <Provider store ={store}>
        <Router history={browserHistory} routes={routes}/>
    </Provider>,
    document.getElementById('app')
);
