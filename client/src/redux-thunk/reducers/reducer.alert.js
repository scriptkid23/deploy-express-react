import {constantUser} from '../constants/constants.user';
export function reducerAlert(state ={},action){
    switch (action.type) {
        case constantUser.USER_REQUEST:
            return{alert : constantUser.USER_REQUEST,payload :action.payload}
            break;
        case constantUser.REQUEST_SUCCESS:
            return{alert :constantUser.REQUEST_SUCCESS,payload : action.payload}
            break;
        case constantUser.REQUEST_FAILURE:
            return{alert : constantUser.REQUEST_FAILURE,payload :action.payload}
            break;
        default:
            return{state}
            break;
    }
}