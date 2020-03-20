import React, {useState, useEffect, useContext} from "react";
import createOlympianAuth0Client from "../olympian-auth0-client";

export const Olympian0Context = React.createContext();
export const useOlympian0 = () => useContext(Olympian0Context);
export const Olympian0Provider = ({
  children,
  ...initOptions
}) => {
  const [olympianAuth0, setAuth0] = useState();
  useEffect(() => {
    const initOlympian0Auth = async () => {
      const authClient = await createOlympianAuth0Client(initOptions);
      setAuth0(authClient);
    }
    initOlympian0Auth();
  }, []);

  return (<Olympian0Context.Provider value={{
      getToken: () => olympianAuth0.getToken()
    }}>
    {children}
  </Olympian0Context.Provider>)
}
