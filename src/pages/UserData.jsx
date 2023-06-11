import React, {useContext, useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import axios from "axios";
import {useFetching} from "../hooks/useFetching";
import UserService from "../API/UserService";
import header from "../components/Header";
import {AuthContext} from "../context";

const UserData = () => {

    const {isAuth, setIsAuth} = useContext(AuthContext);

    const [form, setForm]=useState({
        name:'',
        first:'',
        last:'',
        email:'',
        phone:''
    })

    const update = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const [fetchUser, userError] = useFetching(async () => {
        const user = await UserService.getUser(localStorage.getItem('user_id'))
        setForm({...form, name: user.data.username, first: user.data.firstName, last: user.data.lastName, email: user.data.email, phone: user.data.phone})
        console.log(user.data)
    })

    const [deleteUser, deleteError] = useFetching(async () => {
        const user = await UserService.deleteUser(localStorage.getItem('user_id'))
        setIsAuth(false)
    })


    const logout = ()=>{
        setIsAuth(false)
        localStorage.removeItem('token')
        localStorage.removeItem('user_id')
        localStorage.removeItem('username')
    }

    const [updateUser, updateError] = useFetching(async (e) => {
        e.preventDefault()
        const user = await UserService.updateUser(localStorage.getItem('user_id'),
            {username: form.name, firstName: form.first, lastName: form.last, email: form.email, phone: form.phone})
        console.log(user.data)
    })

    const handleSubmit = (e) => {
        e.preventDefault();

        // Відправка запиту на сервер для авторизації з використанням Axios
        axios
            .put('http://localhost:50100/user/'+localStorage.getItem('user_id'),{

                'username': form.name,
                'firstName': form.first,
                'lastName': form.last,
                'email': form.email,
                'phone': form.phone

            },{
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }})
            .then((response) => {
                // Отримання та збереження JWT токена у localStorage або cookies
                console.log(response.data)
                // navigate('/main');
            })
            .catch((error) => {
                console.log('Помилка авторизації:', error.response.data);
            });
    };

    useEffect(()=>{
        fetchUser()
    },[])
    const col = {
        backgroundColor: '#fff8e9',
        paddingTop: '1px',
    }

    return (
        <div style={col}>
            <div className="registration__container" >
                <div className="form_title">
                    <h1>User data</h1>
                    <Link className="closebtn" to="/main">&times;</Link>
                </div>
                <form onSubmit={updateUser}>
                    <label htmlFor="name">username:</label>
                    <input value={form.name} type="text" name="name" onChange={update} />

                    <label htmlFor="nae">first name:</label>
                    <input value={form.first} type="text" name="first" onChange={update}/>

                    <label htmlFor="last">last name:</label>
                    <input value={form.last} type="text" name="last" onChange={update}/>

                    <label htmlFor="email">Email:</label>
                    <input value={form.email} type="email" name="email" onChange={update}/>

                    <label htmlFor="phone">phone:</label>
                    <input value={form.phone} type="tel" name="phone" onChange={update}/>

                    <input type="submit" value="Update"/>

                    <div className="reg_link">
                        <Link to="" onClick={logout}>logout</Link>
                    </div>
                    <div className="reg_link">
                        <Link to="" onClick={deleteUser}>delete account</Link>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default UserData;