import {createActions, handleActions} from "redux-actions";

const initialState = [];

export const GET_CREWCOMMENT = 'comment/GET_CREWCOMMENT';
export const POST_CREWCOMMENT = 'comment/POST_CREWCOMMENT';
export const DELETE_CREWCOMMENT = 'comment/DELETE_CREWCOMMENT';

const actions = createActions({
    [GET_CREWCOMMENT] : () => {},
    [POST_CREWCOMMENT] : () => {},
    [DELETE_CREWCOMMENT] : () =>{}
});

const commentReducer = handleActions(
    {
        [GET_CREWCOMMENT]: (state, { payload }) => {

            return payload;
        },
        [POST_CREWCOMMENT]: (state, {payload}) => {

            return payload;
        },
        [DELETE_CREWCOMMENT]: (state, {payload}) => {

            return payload;
        }
    },
    initialState
);

export default commentReducer;