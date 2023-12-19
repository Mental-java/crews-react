import {GET_SINGLECALENDAR} from "../module/SingleCalendarModule";

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