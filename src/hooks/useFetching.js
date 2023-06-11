import {useContext, useState} from "react";
import {AuthContext} from "../context";

export const useFetching = (callback) => {
    const [error, setError] = useState('');
    const {isAuth, setIsAuth} = useContext(AuthContext);
    const fetching = async (...args) => {




        await callback(...args)
            // .then((response) => {
            //     console.log(response.data)
            //
            // })
            .catch((error) => {
                setError(error.response.data)
                console.log('Помилка авторизації:', error.response.status);
                if (error.response.status === 401){
                    setIsAuth(false)
                }
            });

    }

    return [fetching, error]
}