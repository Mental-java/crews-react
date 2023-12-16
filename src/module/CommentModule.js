import {createActions, handleActions} from "redux-actions";

const initialState = [];

export const GET_CREWCOMMENT = 'comment/GET_CREWCOMMEN';

const actions = createActions({
    [GET_CREWCOMMENT] : () => {}
});

const commentReducer = handleActions(
    {
        [GET_CREWCOMMENT]: (state, { payload }) => {

            return payload;
        }
    },
    initialState
);

export default commentReducer;