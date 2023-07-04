import React, {useContext, useState} from 'react';
import {Link} from "react-router-dom";
import axios from "axios";
import {AuthContext} from "../context";
import {useFetching} from "../hooks/useFetching";
import UserService from "../API/UserService";


const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    // const navigate = useNavigate();

    const {isAuth, setIsAuth} = useContext(AuthContext);

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const [login, loginError] = useFetching(async (e) => {
        e.preventDefault();
        const response = await UserService.login(username,password)
        const token = response.data.token;
        console.log(token)
        setIsAuth(true)
        localStorage.setItem('token', token);
        localStorage.setItem('user_id', response.data.id)
        localStorage.setItem('username', response.data.username)

    })
    const handleSubmit = (e) => {
        e.preventDefault();

        // Відправка запиту на сервер для авторизації з використанням Axios
        axios
            .post('http://localhost:50100/login', { username, password })
            .then((response) => {
                // Отримання та збереження JWT токена у localStorage або cookies
                const token = response.data.token;
                console.log(token)
                setIsAuth(true)
                localStorage.setItem('token', token);
                localStorage.setItem('user_id', response.data.id)
                localStorage.setItem('username', response.data.username)


                // navigate('/main');
            })
            .catch((error) => {
                console.log('Помилка авторизації:', error.response.data);
            });
    };


    return (
        <div>
            <div id="registration__container" className="registration__container">

                <div className="form_title">
                    <h1>Log in</h1>
                    <Link className="closebtn" to="/main_guest">&times;</Link>
                </div>
                <form onSubmit={login}>

                    <label htmlFor="name">username:</label>
                    <input type="text" id="name" name="name" value={username}
                           onChange={handleUsernameChange} required/>

                    <label htmlFor="password">password:</label>
                    <input type="password" id="password" name="password" value={password}
                           onChange={handlePasswordChange} required/>

                    <input id="log_in" type="submit" value="Log in"/>
                    <div className="reg_link">
                        <Link to='/registration'>Sign in</Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;