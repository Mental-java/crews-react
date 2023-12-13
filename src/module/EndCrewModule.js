import { createActions, handleActions } from "redux-actions";

const initialState = [];

export const GET_ENDCREW = 'crewlists/GET_ENDCREW';
export const PUT_DIAMOND = 'crewlists/PUT_DIAMOND';
export const PUT_STATUS = 'crewlists/PUT_STATUS';

const actions = createActions({
    [GET_ENDCREW]: () => {},
    [PUT_DIAMOND]: () => {},
    [PUT_STATUS]: () => {}
});

const endCrewListReducer = handleActions(
    {
        [GET_ENDCREW]: (state, {payload}) => {
            return payload;
        },
        [PUT_DIAMOND]: (state, {payload}) => {
            return payload;
        },
        [PUT_STATUS]: (state, {payload}) => {
            return payload;
        }
    },
    initialState
);

export default endCrewListReducer;