import { createActions, handleActions } from "redux-actions";

const initialState = [];

export const GET_CREWPOST = 'crewPage/GET_CREWPOST';
export const GET_POSTDETAIL = 'crewPage/GET_POSTDETAIL';


const actions = createActions({
    [GET_CREWPOST]: () => {},
    [GET_POSTDETAIL]: () => {}
});
  


const crewPageReducer = handleActions(
    {
        [GET_CREWPOST]: (state, { payload }) => {
            return payload;
        },
        [GET_POSTDETAIL]: (state, { payload = {} })=> {
            return payload;
        }
    },
    initialState
);

export default crewPageReducer;