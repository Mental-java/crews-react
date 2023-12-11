import {createActions, handleActions} from "redux-actions";

const initialState = [];

export const POST_CREW = 'crew/POST_CREW';
export const DELETE_CREW = 'crew/DELETE_CREW';

const actions = createActions({
    [POST_CREW]: () => {},
    [DELETE_CREW]: () => {}
});

const crewReducer = handleActions(
    {
        [POST_CREW]: (state, {payload}) => {

            return payload;
        },
        [DELETE_CREW]: (state, {payload}) => {

            return payload;
        }
    },
    initialState
);

export default crewReducer;