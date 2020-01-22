import axios from 'axios';
import *  as config from '../config';

class LoginService {
    static login(username, password){
        console.log("username",username)
        this.path = '/login';
        console.log(`${config.HOST_URL}:${config.HOST_PORT}${this.path}`)
        return axios.post(`${config.HOST_URL}:${config.HOST_PORT}${this.path}`,
        {
                username,
                password
 
        });
    }

}

export default LoginService;