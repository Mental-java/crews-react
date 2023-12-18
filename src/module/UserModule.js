import {createActions, handleActions} from "redux-actions";

const initialState = [];

export const PUT_USERREPORT_ONE = 'report/PUT_USERREPORT_ONE';

const action = createActions({
    [PUT_USERREPORT_ONE]: () => {}
});

const userReducer = handleActions(
    {
        [PUT_USERREPORT_ONE]: (state, { payload }) => {

            return payload;
        }
    },
    initialState
);

export default userReducer;