import {createActions, handleActions} from "redux-actions";

const initialState = [];

export const PUT_USERREPORT_ONE = 'report/PUT_USERREPORT_ONE';
export const PUT_USERREPORT_ZERO = 'report/PUT_USERREPORT_ZERO';

const action = createActions({
    [PUT_USERREPORT_ONE]: () => {},
    [PUT_USERREPORT_ZERO]: () => {}
});

const userReducer = handleActions(
    {
        [PUT_USERREPORT_ONE]: (state, { payload }) => {

            return payload;
        },
        [PUT_USERREPORT_ZERO]: (state, { payload }) => {

            return payload;
        }
    },
    initialState
);

export default userReducer;