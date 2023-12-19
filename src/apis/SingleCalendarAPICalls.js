import {
    GET_SINGLECALENDAR,
    PUT_SINGLECALENDAR,
    DELETE_SINGLECALENDAR,
    UPDATE_SINGLECALENDAR
} from "../module/SingleCalendarModule";

export const callSingleCalendarListAPI = ({userId}) => {
    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8080/api/v1/singleCalendar/${userId}/list`
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
            console.log("single====="+result);
        dispatch({ type: GET_SINGLECALENDAR, payload: result.data });
    };
}

export const callRegistSingleCalendarAPI = ({form, userId}) => {

    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8080/api/v1/singleCalendar/add/${userId}`;
    return async (dispatch, getState) => {

        const result = await fetch(requestURL, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*"
            },
            body: JSON.stringify({
                title: form.title,
                firstDate: form.firstDate,
                lastDate: form.lastDate,
                groupId: form.groupId,
                repeatNum: form.repeatNum
            })
        })
            .then(response => response.json());

        console.log('[callRegistSingleCalendarAPI] RESULT : ', result);

        dispatch({type: PUT_SINGLECALENDAR, payload: result});
    };

}

export const callDeleteSingleCalendarAPI = ({userId, groupId}) => {

    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8080/api/v1/singleCalendar/delete/${userId}/${groupId}`;

    return async (dispatch, getState) => {

        const result = await fetch(requestURL, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*"
            }
        })
            .then(response => response.json());

        console.log('[callDeleteSingleCalendarAPI] RESULT : ', result);

        dispatch({type: DELETE_SINGLECALENDAR, payload: result});
    }
}

export const callUpdateSingleCalendarAPI = ({form}) => {

    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8080/api/v1/singleCalendar/update`;

    return async (dispatch, getState) => {

        const result = await fetch(requestURL, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*"
            }
            ,body: JSON.stringify({
                singleCalendarId: form.singleCalendarId,
                title: form.title,
                startDate: form.startDate
            })
        })
            .then(response => response.json());

        console.log('[callUpdateSingleCalendarAPI] result : ', result);

        dispatch({type: UPDATE_SINGLECALENDAR, payload: result});
    }
}