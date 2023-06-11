import axios from "axios";

export default class UserService {
    static async getUser(id) {
        const response = await axios.get('http://localhost:50100/user/' + id, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
        return response;
    }

    static async deleteUser(id) {
        const response = await axios.delete('http://localhost:50100/user/' + id, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
        return response;
    }

    static async login(username, password){
        const response = await axios.post('http://localhost:50100/login',
            {username: username,
                  password: password})
        return response
    }

    static async updateUser(id, user){
        const response = await axios.put('http://localhost:50100/user/'+id,
            {username: user.username,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                phone: user.phone},
            {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            })
        return response
    }

    static async createUser(user){
        const response = await axios.post('http://localhost:50100/user',
            {username: user.username,
                'password': user.password,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                phone: user.phone})
        return response
    }


}