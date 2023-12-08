import {GET_MYCALENDAR} from "../module/MyCalendarModule";
import { UPDATE_EVENT_SUCCESS, UPDATE_EVENT_FAILURE } from "../module/MyCalendarModule";
import {CREATE_EVENT_SUCCESS, CREATE_EVENT_FAILURE} from "../module/MyCalendarModule";
import moment from  'moment'


export const callMyCalendarListAPI = ({userId}) => {
    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8080/api/v1/usercalendar/list/${userId}`
    return async (dispatch, getState) => {

        const result = await fetch(requestURL, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*",
                "Access-Control-Allow-Origin": "*"
            }
        })
            .then(response => response.json());
        console.log('[callCalendarList test] Result =======> ', result);
        dispatch({ type: GET_MYCALENDAR, payload: result.data });
    };
}

export const updateEventAPI = ({ userId, updatedTitle, updatedContent, updatedStartDate, updatedEndDate }) => {
    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8080/api/v1/usercalendar/update/${userId}`;
    return async (dispatch, getState) => {
        const result = await fetch(requestURL, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*",
                "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify({
                title: updatedTitle,
                calendarContent: updatedContent,
                startDate: updatedStartDate,
                endDate: updatedEndDate,
            }),
        });
        console.log("result test==============================>" + result.status)
        if (result.ok) {
            dispatch({ type: UPDATE_EVENT_SUCCESS });
        } else {
            dispatch({ type: UPDATE_EVENT_FAILURE, payload: '데이터베이스 업데이트 실패' });
        }
    };
};

export const createEventAPI = ({ userId, title, content, startDate, endDate }) => {
    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8080/api/v1/usercalendar/regist/${userId}`;
    return async (dispatch, getState) => {
        const result = await fetch(requestURL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*",
                "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify({
                title: title,
                calendarContent: content,
                startDate: startDate,
                endDate: endDate,
            }),
        });
        console.log("result test==============================>" + result.status)
        if (result.ok) {
            dispatch({ type: CREATE_EVENT_SUCCESS });
        } else {
            dispatch({ type: CREATE_EVENT_FAILURE, payload: '데이터베이스 생성 실패' });
        }
    };
};
