import { createActions, handleActions } from "redux-actions";

const initialState = [];

export const GET_CREWUSER = 'crewlists/GET_CREWUSER';

const actions = createActions({
    [GET_CREWUSER]: () => {}
});

const crewUserListReducer = handleActions(
    {
        [GET_CREWUSER]: (state,{payload}) => {
            return payload;
        }
    },
    initialState
);

export default crewUserListReducer;