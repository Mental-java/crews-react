import {GET_MYCALENDAR} from "../module/MyCalendarModule";


export const callMyCalendarListAPI = () => {

    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8080/api/v1/usercalendar/list`

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