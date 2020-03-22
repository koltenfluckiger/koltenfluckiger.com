import React, {useEffect} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {LoadingScreen} from "../common";
import {Error} from "../common/routing";
import {useOlympian0} from "../../utils/olympian-auth0";
import Main from "./main";
import Admin from "./admin";

const App = () => {

  const {loading} = useOlympian0();

  if(loading){
    return (<LoadingScreen></LoadingScreen>)
  }

  return (<Router>
    <Switch>
      <Route path="/" exact component={Main}/>
      <Route path="/admin" strict component={Admin}/>
      <Route component={Error}/>
    </Switch>
  </Router>)
}

export default App;
