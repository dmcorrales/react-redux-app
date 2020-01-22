
import {DELETE_USER_ERROR, DELETE_USER_SUCCESS} from '../_helpers/action.consts';
const defaultState = {
    users : '',
    message: '',
    isLoading: true,
}

const reducer = (state = defaultState, action) => {
    switch(action.type){
    case DELETE_USER_SUCCESS:{
        let users = action.payload.data.content;
        return {...state, isLoading: false, users};
    }

    case DELETE_USER_ERROR:{
        return {...state, isLoading: false, };
    }
   
    default: 
        return {...state};
    }

}

export default reducer;