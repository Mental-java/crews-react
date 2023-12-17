import {createActions, handleActions} from "redux-actions";

const initialState = [];


export const GET_USERLIST = 'adminUser/GET_USERLIST';



const actions = createActions({
    [GET_USERLIST]: () => {},
});

const adminUserReducer = handleActions(
    {
        [GET_USERLIST]: (state, {payload}) => {

            return payload;
        }
      
    },
    initialState
);

export default adminUserReducer;