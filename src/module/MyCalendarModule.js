import { createActions, handleActions } from "redux-actions";

/* 초기값 */
const initialState = [];

/* 액션 */
export const GET_MYCALENDAR = 'mycalendar/GET_MYCALENDAR';
export const UPDATE_EVENT_SUCCESS = 'mycalendar/UPDATE_EVENT_SUCCESS';
export const UPDATE_EVENT_FAILURE = 'mycalendar/UPDATE_EVENT_FAILURE';
export const CREATE_EVENT_SUCCESS = 'mycaledar/CREATE_EVENT_SUCCESS';
export const CREATE_EVENT_FAILURE = 'mycalendar/CREATE_EVENT_FAILURE'


const actions = createActions({
    [GET_MYCALENDAR]: () => { },
});

const myCalendarReducer = handleActions(
    {
        [GET_MYCALENDAR]: (state, { payload }) => {
            return {
                ...state,
                data: payload
            };
        },
    },
    initialState
);

export default myCalendarReducer;