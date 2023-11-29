import { createActions, handleActions } from "redux-actions";

/* 초기값 */
const initialState = [];

/* 액션 */
export const GET_NOTICE = 'notice/GET_NOTICE';

const actions = createActions({
    [GET_NOTICE]: () => { },
});


const noticeReducer = handleActions(
    {
        [GET_NOTICE]: (state, { payload }) => {
            return payload;
        },
    },
    initialState
);

export default noticeReducer;