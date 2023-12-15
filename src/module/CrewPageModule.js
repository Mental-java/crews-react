import { createActions, handleActions } from "redux-actions";

const initialState = [];

export const GET_CREWPOST = 'crewPage/GET_CREWPOST';

export const getCrewPost = () => ({
    type: GET_CREWPOST,
  });
  
  const actions = createActions({
      [GET_CREWPOST]: getCrewPost, // 액션 생성자 함수 사용
  });
  


const crewPageReducer = handleActions(
    {
        [GET_CREWPOST]: (state, { payload }) => {
            return state;
        }
    },
    initialState
);

export default crewPageReducer;