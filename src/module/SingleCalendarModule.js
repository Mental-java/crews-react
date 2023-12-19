import { createActions, handleActions } from "redux-actions";

/* 초기값 */
const initialState = [];

export const GET_SINGLECALENDAR = 'singlecalendar/GET_SINGLECALENDAR'

const actions = createActions({
    [GET_SINGLECALENDAR]: () => { },
});

const singleCalendarReducer = handleActions(
    {
        [GET_SINGLECALENDAR]: (state, { payload }) => {
            return {
                ...state,
                data: payload
            };
        },
    },
    initialState
);

export default singleCalendarReducer;