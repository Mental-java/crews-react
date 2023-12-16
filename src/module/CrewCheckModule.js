import {createActions, handleActions} from "redux-actions";

const initialState = [];

export const GET_CREWCHECK = 'crewCheck/GET_CREWCHECK';
export const PUT_CREWCHECK = 'crewCheck/PUT_CREWCHECK';

const actions = createActions({
    [GET_CREWCHECK]: () => {},
    [PUT_CREWCHECK]: () => {}
});

const crewCheckReducer = handleActions(
    {
        [GET_CREWCHECK]: (state, {payload}) => {

            return payload;
        },
        [PUT_CREWCHECK]: (state, {payload}) => {

            return payload;
        }
    },
    initialState
);

export default crewCheckReducer;