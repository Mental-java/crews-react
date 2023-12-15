import {createActions, handleActions} from "redux-actions";

const initialState = [];

export const GET_CREWCHECK = 'crewCheck/GET_CREWCHECK';

const actions = createActions({
    [GET_CREWCHECK]: () => {}
});

const crewCheckReducer = handleActions(
    {
        [GET_CREWCHECK]: (state, {payload}) => {

            return payload;
        }
    },
    initialState
);

export default crewCheckReducer;