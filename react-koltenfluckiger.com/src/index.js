import React from "react";
import ReactDOM from "react-dom";

import App from "./components/app";
import Config from "./olympian-auth0-config.js"
import * as serviceWorker from "./serviceWorker";

import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import {Olympian0Provider} from "./utils/olympian-auth0";

ReactDOM.render(<Olympian0Provider apiKey={Config.key} appID={Config.appID}>
  <App/>
</Olympian0Provider>, document.getElementById("app"));

serviceWorker.register();
