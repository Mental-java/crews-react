import {createActions, handleActions} from "redux-actions";

const initialState = [];

export const ADMIN_NOTICE = 'admin/ADMIN_NOTICE';
export const ADMIN_USERLIST = 'admin/ADMIN_USERLIST';
export const ADMIN_CREWLIST = 'admin/ADMIN_CREWLIST';
export const ADMIN_USERREPORTLIST = 'admin/ADMIN_USERREPORTLIST';
export const ADMIN_CREWREPORTLIST = 'admin/ADMIN_CREWREPORTLIST';
export const POST_ADMINLOGIN = 'admin/POST_ADMINLOGIN';
export const ADMIN_DELETE_NOTICE = 'admin/ADMIN_DELETE_NOTICE';
export const ADMIN_CREATE_NOTICE = 'admin/ADMIN_CREATE_NOTICE';

export const ADMIN_UPDATE_NOTICE = 'admin/ADMIN_UPDATE_NOTICE'

const actions = createActions({
    [ADMIN_NOTICE]: () => {},
    [ADMIN_USERLIST]: () => {},
    [ADMIN_CREWLIST]: () => {},
    [ADMIN_USERREPORTLIST]: () => {},
    [ADMIN_CREWREPORTLIST]: () => {},
    [POST_ADMINLOGIN]: () => {},
    [ADMIN_DELETE_NOTICE]: () => {},
    [ADMIN_CREATE_NOTICE]: () => {},
    [ADMIN_UPDATE_NOTICE]: () => {}
});

const adminReducer = handleActions(
    {
        [ADMIN_NOTICE]: (state, {payload}) => {

            return payload;
        },
        [ADMIN_USERLIST]: (state, {payload}) => {

            return payload;
        },
        [ADMIN_CREWLIST]: (state, {payload}) => {

            return payload;
        },
        [ADMIN_USERREPORTLIST]: (state, {payload}) => {

            return payload;
        },
        [ADMIN_CREWREPORTLIST]: (state, {payload}) => {

            return payload;
        },
        [POST_ADMINLOGIN]: (state, {payload}) => {
            return payload;
        },
        [ADMIN_DELETE_NOTICE]: (state, {payload}) => {
            return payload;
        },
        [ADMIN_CREATE_NOTICE]: (state, {payload}) => {
            return payload;
        },
        [ADMIN_UPDATE_NOTICE]: (state, {payload}) => {
            return payload;
        }
    },
    initialState
);

export default adminReducer;