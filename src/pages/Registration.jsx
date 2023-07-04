import React, {useContext, useState} from 'react';
import {Link} from "react-router-dom";
import {AuthContext} from "../context";
import {useFetching} from "../hooks/useFetching";
import UserService from "../API/UserService";

const Registration = () => {

    const [form, setForm]=useState({
        name:'',
        first:'',
        last:'',
        email:'',
        phone:'',
        password:'',
    })

    const update = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const {isAuth, setIsAuth} = useContext(AuthContext);

    const [createUser, createError] = useFetching(async (e) => {
        e.preventDefault();
        const user = await UserService.createUser({
            username: form.name,
            password: form.password,
            firstName: form.first,
            lastName: form.last,
            email: form.email,
            phone: form.phone})
        console.log(user.data)

    })

    return (
        <div>

            <div className="registration__container">
                <div className="form_title">
                    <h1>Sign in</h1>
                    <Link className="closebtn" to="/main_guest">&times;</Link>
                </div>
                <form onSubmit={createUser}>
                    <label htmlFor="name">username:</label>
                    <input value={form.name} type="text" id="name" name="name" onChange={update} required/>

                    <label htmlFor="nae">first name:</label>
                    <input type="text" id="nae" name="first" value={form.first} onChange={update} required/>

                    <label htmlFor="last">last name:</label>
                    <input type="text" id="last" name="last" value={form.last} onChange={update} required/>

                    <label htmlFor="email">email:</label>
                    <input type="email" id="email" name="email" value={form.email} onChange={update} required/>

                    <label htmlFor="phone">phone:</label>
                    <input type="tel" id="phone" name="phone" value={form.phone} onChange={update} required/>

                    <label htmlFor="password">password:</label>
                    <input type="password" id="password" name="password" value={form.password} onChange={update} required/>

                    <input type="submit" value="Sign in"/>

                    <div className="reg_link">
                        <Link to="/login">Log in</Link>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default Registration;