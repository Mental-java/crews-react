import {createActions, handleActions} from "redux-actions";

const initialState = [];

export const GET_CREWCERTIFICATIONLIST = 'crewCertification/GET_CREWCERTIFICATIONLIST';

const actions = createActions({
    [GET_CREWCERTIFICATIONLIST] : () => {}
});

const crewCertificationListReducer = handleActions(
    {
        [GET_CREWCERTIFICATIONLIST]: (state, { payload }) => {

            return payload;
        }
    },
    initialState
);

export default crewCertificationListReducer;