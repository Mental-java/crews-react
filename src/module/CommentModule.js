import {createActions, handleActions} from "redux-actions";

const initialState = [];

export const GET_CREWCOMMENT = 'comment/GET_CREWCOMMENT';
export const POST_CREWCOMMNET = 'comment/POST_CREWCOMMNET'

const actions = createActions({
    [GET_CREWCOMMENT] : () => {},
    [POST_CREWCOMMNET] : () => {}
});

const commentReducer = handleActions(
    {
        [GET_CREWCOMMENT]: (state, { payload }) => {

            return payload;
        },
        [POST_CREWCOMMNET]: (state, {payload}) => {

            return payload;
        }
    },
    initialState
);

export default commentReducer;