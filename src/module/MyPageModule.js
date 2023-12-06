import { createActions, handleActions } from "redux-actions";

/* 초기값 */
const initialState = [];

/* 액션 */
export const GET_MYPAGE = 'mypage/GET_MYPAGE';
export const PUT_NICKNAME = 'mypage/PUT_NICKNAME';

const actions = createActions({
    [GET_MYPAGE]: () => { },
    [PUT_NICKNAME]: ()=>{ }
});


const myPageReducer = handleActions(
    {
        [GET_MYPAGE]: (state, { payload }) => {
            return payload;
        }

    },
    initialState
);

export default myPageReducer;