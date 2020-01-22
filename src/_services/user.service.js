import axios from 'axios';
import * as config from '../config';
import localStorageHelper from '../_helpers/localStorage.helper';
class UserService {

    static getAll(){
        this.path = '/users/list/all';
        return axios.get(`${config.HOST_URL}:${config.HOST_PORT}${this.path}`,
        {
            headers:{
                Authorization:`Bearer ${localStorageHelper.validate()}`,
            }
        });
    }

    static create(data){
        console.log(data)
        this.path = '/users';

        return axios({
            method: 'post',
            url: `${config.HOST_URL}:${config.HOST_PORT}${this.path}`,
            data,
            headers: {'Authorization': `Bearer ${localStorageHelper.validate()}`}
        });
    }

    static findById(id){
        this.path = `/users/${id}`;
        return axios.get(`${config.HOST_URL}:${config.HOST_PORT}${this.path}`,
        {   
            headers:{
                Authorization:`Bearer ${localStorageHelper.validate()}`,
            }
        });
    }

    static update(params){
        this.path = `/users`;
    
        return axios({
            method: 'put',
            url: `${config.HOST_URL}:${config.HOST_PORT}${this.path}`,
            data: params,
            headers: {'Authorization': `Bearer ${localStorageHelper.validate()}`}});
    }

    static delete(id){
        this.path =  `/users`;

        return axios({
            method: 'delete',
            data:{
                id
            },
            url: `${config.HOST_URL}:${config.HOST_PORT}${this.path}`,
            headers: {'Authorization': `Bearer ${localStorageHelper.validate()}`}
        });
    }

}

export default UserService;