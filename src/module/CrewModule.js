import {createActions, handleActions} from "redux-actions";

const initialState = [];

export const POST_CREW = 'crew/POST_CREW';
export const DELETE_CREW = 'crew/DELETE_CREW';
export const UPDATE_CREW = 'crew/UPDATE_CREW';

const actions = createActions({
    [POST_CREW]: () => {},
    [DELETE_CREW]: () => {},
    [UPDATE_CREW]: () => {}
});

const crewReducer = handleActions(
    {
        [POST_CREW]: (state, {payload}) => {

            return payload;
        },
        [DELETE_CREW]: (state, {payload}) => {

            return payload;
        },
        [UPDATE_CREW]: (state, {payload}) => {

            return payload;
        }
    },
    initialState
);

export default crewReducer;