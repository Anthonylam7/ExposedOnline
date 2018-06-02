import React from 'react';
import { render } from 'react-dom';
import App from './components/App.jsx';

import styles from './scss/app.scss';

var socket = io.connect();
socket.emit("newConnection");
render(
    <App />,
    document.getElementById('root')
);