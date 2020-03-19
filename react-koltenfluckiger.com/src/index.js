import React from "react";
import ReactDOM from "react-dom";

import App from "./components/app";
import {Olympian0Provider} from "./utils/olympian-auth0";
import Config from "./olympian-auth0-config"
import * as serviceWorker from "./serviceWorker";

import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

ReactDOM.render(<Olympian0Provider apiKey={Config.key}>
  <App/>
</Olympian0Provider>, document.getElementById("app"));

serviceWorker.register();
