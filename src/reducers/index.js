import { combineReducers} from 'redux';
import login from './login';
import users from './user'
import deletedUser from './deletedUser';
import {reducer as formReducer} from 'redux-form';
export default combineReducers({
    login,
    users,
    deletedUser,
    form:formReducer
});