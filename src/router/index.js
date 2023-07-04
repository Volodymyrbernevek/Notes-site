import MainGuest from "../pages/MainGuest";
import Error from "../pages/Error";
import Login from "../pages/Login";
import Main from "../pages/Main";
import Note from "../pages/Note";
import UserData from "../pages/UserData";
import Registration from "../pages/Registration";


export const privateRoutes = [
    {path: '/main', component: <Main/>, exact: true},
    {path: '/error', component: <Error/>, exact: true},
    {path: '/note/:id', component: <Note/>, exact: true},
    {path: '/user_data', component: <UserData/>, exact: true},
]

export const publicRoutes = [
    {path: '/login', component: <Login/>, exact: true},
    {path: '/registration', component: <Registration/>, exact: true},
    {path: '/main_guest', component: <MainGuest/>, exact: true},
]