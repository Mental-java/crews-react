import {createActions, handleActions} from "redux-actions";

const initialState = [];

export const GET_CREWSEARCHLIST = 'crewSearch/GET_CREWSEARCHLIST';

const actions = createActions({
    [GET_CREWSEARCHLIST]: () => {}
});

const crewSearchListReducer = handleActions(
    {
        [GET_CREWSEARCHLIST]: (state, { payload }) => {

            return payload;
        }
    },
    initialState
);

export default crewSearchListReducer;

