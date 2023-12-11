import {createActions, handleActions} from "redux-actions";

const initialState = [];

export const GET_CREWINTROLIST = 'crewIntro/GET_CREWINTROLIST';

const actions = createActions({
   [GET_CREWINTROLIST] : () => {}
});

const crewIntroListReducer = handleActions(
    {
        [GET_CREWINTROLIST]: (state, { payload }) => {

            return payload;
        }
    },
    initialState
);

export default crewIntroListReducer;