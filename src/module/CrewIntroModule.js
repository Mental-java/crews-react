import {createActions, handleActions} from "redux-actions";

const initialState = [];

export const GET_CREWINTROLIST = 'crewIntro/GET_CREWINTROLIST';
export const PUT_CREWINTRO = 'crewIntro/PUT_CREWINTRO';

const actions = createActions({
   [GET_CREWINTROLIST] : () => {},
   [PUT_CREWINTRO] : () => {}
});

const crewIntroListReducer = handleActions(
    {
        [GET_CREWINTROLIST]: (state, { payload }) => {

            return payload;
        },
        [PUT_CREWINTRO]: (state, { payload }) => {

            return payload;
        }
    },
    initialState
);

export default crewIntroListReducer;