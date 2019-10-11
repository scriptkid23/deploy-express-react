import {constantUser} from '../constants/constants.user';
import {services} from '../helpers/service.user';
export const userActions = {submit};
function submit(data){
    return dispatch =>{
        dispatch(user_request(data));
        services.submit(data).then(result =>{
            if(result.data === 'Wrong username/password.'){
                dispatch(user_failure(result.data));
            }
            if(result.data === 'success'){
                dispatch(user_success(result.data));
            }
            
        }) 
    }
    function user_request(payload){return{type : constantUser.USER_REQUEST,payload : payload}}
    function user_success(payload){return{type : constantUser.REQUEST_SUCCESS,payload : payload}}
    function user_failure(payload){return{type : constantUser.REQUEST_FAILURE,payload : payload}}
}