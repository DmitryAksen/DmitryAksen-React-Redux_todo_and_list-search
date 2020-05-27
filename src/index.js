import React from 'react';
import ReactDOM from 'react-dom';
import ReactReduxTodo from './practice/practice6ReactReduxTodo/reactReduxTodo';
import './practice/practice6ReactReduxTodo/redux/window';
import { store } from './practice/practice6ReactReduxTodo/redux/store';
import { Provider } from 'react-redux';


ReactDOM.render(
        <Provider store={store}>
            <ReactReduxTodo />
        </Provider>,
    document.getElementById('root'));
