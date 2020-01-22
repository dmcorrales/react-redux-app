
import LoginService from '../_services/login.service';
/**
 * Login operations
 * 'dispatch' middleware by 
 * @param {credentials data} data 
 */
 const login = (data) => {
    return dispatch => {
        LoginService.login(data.username, data.password).then(response => {
            dispatch({payload:response, type:'LOGIN'});
        }).catch((err) =>
            dispatch({err,type:'LOGIN_ERROR'})
        )
    };
}

export default login;

