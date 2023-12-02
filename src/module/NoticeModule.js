import { createActions, handleActions } from "redux-actions";

/* 초기값 */
const initialState = [];

/* 액션 */
export const GET_NOTICE = 'notice/GET_NOTICE';
export const GET_NOTICES = 'notice/GET_NOTICES';

const actions = createActions({
    [GET_NOTICE]: () => { },
    [GET_NOTICES]: () => { }
});


const noticeReducer = handleActions(
    {
        [GET_NOTICE]: (state, { payload }) => {
            return payload;
        },
        [GET_NOTICES]: (state, { payload }) => {
            return payload;
        },
    },
    initialState
);

export default noticeReducer;