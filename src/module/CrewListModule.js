import { createActions, handleActions } from "redux-actions";

const initialState = [];

export const GET_CREWLIST = 'crewlist/GET_CREWLIST';
export const P0ST_CREWLIST = 'crewlist/P0ST_CREWLIST';
export const GET_CREWAPPLYLIST = 'crewlist/GET_CREWAPPLYLIST';

const actions = createActions({
    [GET_CREWLIST]: () => { },
    [P0ST_CREWLIST]: () => { },
    [GET_CREWAPPLYLIST]: () => { }
});

const crewListReducer = handleActions(
    {
        [GET_CREWLIST]: (state, { payload }) => {

            return payload;
        },
        [P0ST_CREWLIST]: (state, { payload }) => {

            return payload;
        },
        [GET_CREWAPPLYLIST]: (state, { payload }) => {

            return payload;
        }
    },
    initialState
);

export default crewListReducer;