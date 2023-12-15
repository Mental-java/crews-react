import { createActions, handleActions } from "redux-actions";

const initialState = [];

export const GET_CREWPOST = 'crewPage/GET_CREWPOST';

const actions = createActions({
    [GET_CREWPOST]: () => { }
});


const crewPageReducer = handleActions(
    {
        [GET_CREWPOST]: (state, { payload }) => {
            return payload;
        }
    },
    initialState
);

export default crewPageReducer;