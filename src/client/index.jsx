import React from 'react';
import ReactDOM from 'react-dom/client';
import {Header} from "../shared/Header";

window.addEventListener('load', () => {
    ReactDOM.hydrate(Header, document.getElementById("react_root"));
});
