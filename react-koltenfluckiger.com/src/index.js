import React from "react";
import ReactDOM from "react-dom";

import App from "./components/app";
import * as serviceWorker from "./serviceWorker";

import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

ReactDOM.render(<App/>, document.getElementById("app"));

serviceWorker.register();
