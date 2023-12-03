import { createActions, handleActions } from "redux-actions";

/* 초기값 */
const initialState = [];

/* 액션 */
export const GET_MYPAGE = 'notice/GET_MYPAGE';

const actions = createActions({
    [GET_MYPAGE]: () => { },
});


const myPageReducer = handleActions(
    {
        [GET_MYPAGE]: (state, { payload }) => {
            return payload;
        },
    },
    initialState
);

export default myPageReducer;