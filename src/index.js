import React from "react";
import { render } from "react-dom";
import Router from "./components/Router";
import "./css/index.css";
// import App from '../App';
// import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

render(<Router />, document.querySelector("#root"));
