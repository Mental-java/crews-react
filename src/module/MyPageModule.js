import { createActions, handleActions } from "redux-actions";

/* 초기값 */
const initialState = [];

/* 액션 */
export const GET_MYPAGE = 'mypage/GET_MYPAGE';
export const PUT_NICKNAME = 'mypage/PUT_NICKNAME';
export const UPDATE_NICKNAME = 'mypage/UPDATE_NICKNAME';

const actions = createActions({
    [GET_MYPAGE]: () => { },
    [PUT_NICKNAME]: ()=>{ },
    [UPDATE_NICKNAME]: (nickname) => ({ nickname }),
});


const myPageReducer = handleActions(
    {
        [GET_MYPAGE]: (state, { payload }) => {
            return payload;
        },
        [UPDATE_NICKNAME]: (state, { payload }) => {
            return {
                ...state,
                nickname: payload.nickname,
            };
        },
    },
    initialState
);

export default myPageReducer;