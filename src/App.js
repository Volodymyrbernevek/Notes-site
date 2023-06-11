
import {BrowserRouter, Routes, Route, Switch, Redirect, Navigate} from "react-router-dom";

import AppRouter from "./components/AppRouter";
import {AuthContext} from "./context";
import {useEffect, useState} from "react";

function App() {

    const [isAuth, setIsAuth] = useState(false);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        if (localStorage.getItem('token')) {
            setIsAuth(true)
        }
        setLoading(false);
    }, [])


  return (
      <AuthContext.Provider value={{
          isAuth,
          setIsAuth,
          isLoading
      }}>
          <BrowserRouter>

              <AppRouter/>




          </BrowserRouter>
      </AuthContext.Provider>
  );
}

export default App;
