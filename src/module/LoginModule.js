import { createActions, handleActions } from "redux-actions";

/* 초기값 */
const initialState = {
  isLoggedIn: false,
  userData: null,
};

/* 액션 */
export const LOGIN_SUCCESS = 'login/LOGIN_SUCCESS';
export const LOGOUT = 'login/LOGOUT';

const actions = createActions(
  LOGIN_SUCCESS,
  LOGOUT
);

const LoginReducer = handleActions(
  {
    [LOGIN_SUCCESS]: (state, { payload }) => {
      return {
        ...state,
        isLoggedIn: true,
        userData: payload,
      };
    },
    [LOGOUT]: (state) => {
      return {
        ...state,
        isLoggedIn: false,
        userData: null,
      };
    },
  },
  initialState
);

export default LoginReducer;
