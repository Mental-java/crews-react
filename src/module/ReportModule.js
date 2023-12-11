import {createActions, handleActions} from "redux-actions";

const initialState = [];

export const POST_CREW_REPORT = 'report/POST_CREW_REPORT';

const action = createActions( {
    [POST_CREW_REPORT]: () => {}
});

const reportReducer = handleActions(
    {
        [POST_CREW_REPORT]: (state, { payload }) => {

            return payload;
        }
    },
    initialState
);

export default reportReducer;