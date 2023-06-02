import React from 'react';
import ReactDOM from 'react-dom';
import {Header} from "../shared/Header";

window.addEventListener('load', () => {
    const container = document.getElementById("react_root");
    ReactDOM.hydrate(Header, container);
});
