import LocalStorageHelper from '../_helpers/localStorage.helper';
const defaultState = {
    token:"",
    isValid: false,
    message: ''
}

function login(state = defaultState, action){
    switch(action.type) {
        
        case 'LOGIN':{
            let token = action.payload.data.content.token;
            LocalStorageHelper.save(token);
            return {...defaultState, token: token, isValid: true};
        }

        case 'LOGIN_ERROR':{
            return {...defaultState, isValid:false, message:action.err.response.data.message }
        }

        default:{
            return {...defaultState}
        }
    }
}

export default login;