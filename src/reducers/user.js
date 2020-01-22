
import {USER_SUCCESS, USER_ERROR} from '../_helpers/action.consts';
const defaultState = {
    users : '',
    message: '',
    isLoading: true,
    error: false
}

const reducer = (state = defaultState, action) => {
    switch(action.type){
    case USER_SUCCESS:{
        let users = action.payload.data.content;
        return {...state, isLoading: false, users};
    }

    case USER_ERROR:{
        return {...state, isLoading: false, message: action.reason, error: true };
    }
   
    default: 
        return {...state};
    }

}

export default reducer;