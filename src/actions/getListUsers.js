import UserService from '../_services/user.service';
import {USER_SUCCESS, USER_ERROR} from '../_helpers/action.consts';
const getListUsers = () => {
    return dispatch => {
        UserService.getAll().then(response => {
            dispatch({type: USER_SUCCESS, payload: response })
        }).catch(err => {
            let status = err.response.status;
            let reason = err.response.data.reason;
            dispatch({type: USER_ERROR, payload: err, status, reason })
        })
    }
}
export default getListUsers; 