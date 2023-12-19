import {createActions, handleActions} from "redux-actions";

const initialState = [];

export const POST_CREW_REPORT = 'report/POST_CREW_REPORT';
export const POST_USER_REPORT = 'report/POST_USER_REPORT';

const action = createActions( {
    [POST_CREW_REPORT]: () => {},
    [POST_USER_REPORT]: () => {}
});

const reportReducer = handleActions(
    {
        [POST_CREW_REPORT]: (state, { payload }) => {

            return payload;
        },
        [POST_USER_REPORT]: (state, { payload }) => {

            return payload;
        }
    },
    initialState
);

export default reportReducer;