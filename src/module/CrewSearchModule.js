import {createActions, handleActions} from "redux-actions";

const initialState = [];

export const GET_CREWSEARCHLIST = 'crewSearch/GET_CREWSEARCHLIST';
export const GET_CREWLIST_EXERCISE = 'crewSearch/GET_CREWLIST_EXERCISE';
export const GET_CREWLIST_STUDY = 'crewSearch/GET_CREWLIST_STUDY';
export const GET_CREWLIST_HABIT = 'crewSearch/GET_CREWLIST_HABIT';
export const GET_CREWLIST_ETC = 'crewSearch/GET_CREWLIST_ETC';
export const GET_CREWSEARCH_DETAIL = 'crewSearch/GET_CREWSEARCH_DETAIL';
export const GET_CREWSEARCHBYVALUE_CREWNAME = 'crewSearch/GET_CREWSEARCHBYVALUE_CREWNAME';


const actions = createActions({
    [GET_CREWSEARCHLIST]: () => {},
    [GET_CREWLIST_EXERCISE]: () => {},
    [GET_CREWLIST_STUDY]: () => {},
    [GET_CREWLIST_HABIT]: () => {},
    [GET_CREWLIST_ETC]: () => {},
    [GET_CREWSEARCH_DETAIL]: () => {},
    [GET_CREWSEARCHBYVALUE_CREWNAME]: () => {}
});

const crewSearchListReducer = handleActions(
    {
        [GET_CREWSEARCHLIST]: (state, { payload }) => {

            return payload;
        },
        [GET_CREWLIST_EXERCISE]: (state, { payload }) => {

            return payload;
        },
        [GET_CREWLIST_STUDY]: (state, { payload }) => {

            return payload;
        },
        [GET_CREWLIST_HABIT]: (state, { payload }) => {

            return payload;
        },
        [GET_CREWLIST_ETC]: (state, { payload }) => {

            return payload;
        },
        [GET_CREWSEARCH_DETAIL]: (state, {payload}) => {

            return payload;
        },
        [GET_CREWSEARCHBYVALUE_CREWNAME]: (state, { payload }) => {

            return payload;
        }
    },
    initialState
);

export default crewSearchListReducer;

