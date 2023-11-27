import { createAction, handleAction } from "redux-actions";

const initialState = [];

export const GET_NOTICE = 'notice/GET_NOTICE';

const actions = createAction({
    [GET_PURCHASE]: () => {}
});

const noticeReducer = handleAction(
    {
        [GET_PURCHASE]: (state, { payload }) => {
            return payload;
        }
    },
    initialState
);

export default purchaseReducer;