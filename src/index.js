import ReactDOM from "react-dom";
import React, { Component }  from 'react';
import "./index.css";
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import store from "./store";

function fancyLog() {
  console.log("%c Rendered with 👉 👉👇", "background: purple; color: #FFF");
  console.log(store.getState());
}
const render = ()=>{
	fancyLog();
	ReactDOM.render(<App />, document.getElementById('root'));
}
render();
store.subscribe(render);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();