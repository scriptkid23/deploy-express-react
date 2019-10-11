import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {SignIn} from './App';
import {Provider} from 'react-redux';
import {store} from './redux-thunk/store/store';
import * as serviceWorker from './serviceWorker';
import '../src/App.css'
ReactDOM.render(<Provider store={store}><SignIn /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
