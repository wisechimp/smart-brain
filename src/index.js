import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
// import registerServiceWorker from './registerServiceWorker';
// CRA bundles all the CSS together. We prefer tachyons' styling so Bootstrap gets imported first so it can be overwritten
import "bootstrap/dist/css/bootstrap.min.css"
import "./index.css"
import "tachyons"

ReactDOM.render(<App />, document.getElementById("root"))
// registerServiceWorker();
