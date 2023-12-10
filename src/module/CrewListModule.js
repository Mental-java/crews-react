import { createActions, handleActions } from "redux-actions";

const initialState = [];

export const GET_CREWLIST = 'crewlist/GET_CREWLIST';
export const P0ST_CREWList = 'crewlist/P0ST_CREWList';

const actions = createActions({
    [GET_CREWLIST]: () => { },
    [P0ST_CREWList]: () => { }
});

const crewListReducer = handleActions(
    {
        [GET_CREWLIST]: (state, { payload }) => {

            return payload;
        },
        [P0ST_CREWList]: (state, { payload }) => {

            return payload;
        }
    },
    initialState
);

export default crewListReducer;