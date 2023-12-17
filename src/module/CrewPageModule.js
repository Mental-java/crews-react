import { createActions, handleActions } from "redux-actions";

const initialState = [];

export const GET_CREWPOST = 'crewPage/GET_CREWPOST';
export const GET_POSTDETAIL = 'crewPage/GET_POSTDETAIL';
export const POST_CREWPOST = 'crewPage/POST_CREWPOST';
export const DELETE_CREWPOST = 'crewPage/DELETE_CREWPOST';
const actions = createActions({
    [GET_CREWPOST]: () => {},
    [GET_POSTDETAIL]: () => {},
    [POST_CREWPOST]: () => {},
    [DELETE_CREWPOST]: () => {}
});
  


const crewPageReducer = handleActions(
    {
        [GET_CREWPOST]: (state, { payload }) => {
            return payload;
        },
        [GET_POSTDETAIL]: (state, { payload = {} })=> {
            return payload;
        },
        [POST_CREWPOST]: (state, { payload }) => {
            return payload;
        },
        [DELETE_CREWPOST]: (state, { payload }) => {
            return payload;
        }
    },
    initialState
);

export default crewPageReducer;