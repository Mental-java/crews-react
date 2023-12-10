import { LOGIN_SUCCESS } from "../module/LoginModule";
import { useDispatch } from "react-redux";

const callLogoutAPI = () => {

    
    

    return async (dispatch, getState) => {            

        dispatch({ type: LOGIN_SUCCESS,  payload: '' });        
        console.log('[MemberAPICalls] callLogoutAPI RESULT : SUCCESS');
    };
}

export default callLogoutAPI;