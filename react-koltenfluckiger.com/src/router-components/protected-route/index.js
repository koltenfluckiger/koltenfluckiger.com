import React, {useState, useEffect} from 'react';
import {withRouter} from "react-router";
import {Switch, Route, Redirect} from 'react-router-dom';
import {LoadingScreen} from "../../components/common"
import AxiosHandler from "axios-api-handler";

const ProtectedRoute = ({
  component: Component,
  ...rest
}) => {

  const [isAuthed, setAuth] = useState();
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const initAuth = async () => {
      try {
        await AxiosHandler.get("/auth", {type: "json"})
        setAuth(true)
        setLoading(false)
      } catch (err) {
        setAuth(false)
        setLoading(false)
      }
    }
    initAuth();
  }, []);
  if (isLoading) {
    return (<LoadingScreen></LoadingScreen>)
  } else if (isAuthed) {
    return (<Route {...rest} component={Component}></Route>)
  } else {
    return (<Redirect to="/"></Redirect>)
  }
}
export default withRouter(ProtectedRoute);
