import UserService from '../_services/user.service';
import {USER_SUCCESS, USER_ERROR} from '../_helpers/action.consts';
const getUserById = (id) => {
    return dispatch => {
        UserService.findById(id).then(response => {
            dispatch({type: USER_SUCCESS, payload: response })
        }).catch(err => {
            dispatch({type: USER_ERROR, payload: err })
        })
    }
}
export default getUserById; 