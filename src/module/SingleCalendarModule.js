import { createActions, handleActions } from "redux-actions";

/* 초기값 */
const initialState = [];

export const GET_SINGLECALENDAR = 'singlecalendar/GET_SINGLECALENDAR';
export const PUT_SINGLECALENDAR = 'singlecalendar/PUT_SINGLECALENDAR';
export const DELETE_SINGLECALENDAR = 'singlecalendar/DELETE_SINGLECALENDAR';


const actions = createActions({
    [GET_SINGLECALENDAR]: () => { },
    [PUT_SINGLECALENDAR]: () => { },
    [DELETE_SINGLECALENDAR]: () => { }
});

const singleCalendarReducer = handleActions(
    {
        [GET_SINGLECALENDAR]: (state, { payload }) => {
            return {
                ...state,
                data: payload
            };
        },
        [PUT_SINGLECALENDAR]: (state, { payload }) => {

            return payload;
        },
        [DELETE_SINGLECALENDAR]: (state, { payload }) => {

            return payload;
        }
    },
    initialState
);

export default singleCalendarReducer;