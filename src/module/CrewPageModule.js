import { createActions, handleActions } from "redux-actions";

const initialState = [];

export const GET_CREWPOST = 'crewPage/GET_CREWPOST';

// export const getCrewPost = () => ({
//     type: GET_CREWPOST,
//   });
//
//   const actions = createActions({
//       [GET_CREWPOST]: getCrewPost, // 액션 생성자 함수 사용
//   });

const actions = createActions({
    [GET_CREWPOST]: () => {}
});
  


const crewPageReducer = handleActions(
    {
        [GET_CREWPOST]: (state, { payload }) => {
            return payload;
        }
    },
    initialState
);

export default crewPageReducer;