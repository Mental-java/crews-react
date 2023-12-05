import { createActions, handleActions } from "redux-actions";

const initialState = [];

export const GET_CREWLIST = 'crewlist/GET_CREWLIST';

const actions = createActions({
    [GET_CREWLIST]: () => { }
});

const crewListReducer = handleActions(
    {
        [GET_CREWLIST]: (state, { payload }) => {
            return payload;
        }
    },
    initialState
);

export default crewListReducer;