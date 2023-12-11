import { createActions, handleActions } from "redux-actions";

const initialState = [];

export const GET_ENDCREW = 'crewlist/GET_ENDCREW';

const actions = createActions({
    [GET_ENDCREW]: () => {}
});

const endCrewListReducer = handleActions(
    {
        [GET_ENDCREW]: (state, {payload}) => {
            return payload;
        }
    },
    initialState
);

export default endCrewListReducer;