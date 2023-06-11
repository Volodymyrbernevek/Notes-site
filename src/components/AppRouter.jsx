import React, {useContext} from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {privateRoutes, publicRoutes} from "../router";
import {AuthContext} from "../context";


const AppRouter = () => {
    const {isAuth, isLoading} = useContext(AuthContext);

    // if (isLoading) {
    //     return <div>Йде загрузка</div>
    // }

    return (
        isAuth
            ?
            <Routes>
                {privateRoutes.map(route =>
                    <Route
                        element={route.component}
                        path={route.path}
                        exact={route.exact}
                        key={route.path}
                    />
                )}
                <Route path='*' element={<Navigate to='/main'/>}/>
            </Routes>
            :
            <Routes>
                {/*<Route path="/log" element={Login}/>*/}
                {publicRoutes.map(route =>
                    <Route

                        element={route.component}
                        path={route.path}
                        exact={route.exact}
                        key={route.path}
                    />
                )}
                <Route path='*' element={<Navigate to='/login'/>}/>
            </Routes>
    );
};

export default AppRouter;