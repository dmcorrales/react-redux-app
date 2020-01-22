import UserService from '../_services/user.service';
import { DELETE_USER_ERROR, DELETE_USER_SUCCESS} from '../_helpers/action.consts';
const deleteUser = (id) => {
    return dispatch => {
        UserService.delete(id).then(response => {
            dispatch({type: DELETE_USER_SUCCESS, payload: response })
        }).catch(err => {
            dispatch({type: DELETE_USER_ERROR, payload: err })
        })
    }
}
export default deleteUser; 