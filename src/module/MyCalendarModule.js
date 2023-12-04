import { createActions, handleActions } from "redux-actions";

/* 초기값 */
const initialState = [];

/* 액션 */
export const GET_MYCALENDAR = 'mycalendar/GET_MYCALENDAR';

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