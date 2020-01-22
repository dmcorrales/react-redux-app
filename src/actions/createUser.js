import UserService from '../_services/user.service';
import {USER_SUCCESS, USER_ERROR} from '../_helpers/action.consts';

const createUser = (data) => {
    return dispatch => {
        UserService.create(data).then(response => {
            dispatch({payload:response, type:USER_SUCCESS});
        }).catch(err => 
            dispatch(dispatch({payload:err, type:USER_ERROR})))
    }
}

export default createUser;