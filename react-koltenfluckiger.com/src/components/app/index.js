import React, {useEffect} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Error} from "../common/routing";
import {useOlympian0} from "../../utils/olympian-auth0";
import Main from "./main";
import Admin from "./admin";

function App() {

    const {getToken} = useOlympian0();

    useEffect(() => {
      const initAuth = async () =>{
        try {
          await getToken();
        } catch(err) {
          console.log(err);
        }
      }
      initAuth();
    }, []);

    return (
      <Router>
        <Switch>
        <Route path="/" exact component={Main}/>
        <Route path="/admin" strict component={Admin}/>
        <Route component={Error}/>
      </Switch>
      </Router>)
}

export default App;
