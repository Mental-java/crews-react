
import {
    GET_CREWCHECK,
    PUT_CREWCHECK
} from "../module/CrewCheckModule";

export const callCrewCheckListAPI = ({currentPage, crewId, userId}) => {

    let requestURL;

    if(currentPage !== undefined || currentPage !== null){
        requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8080/api/v1/crewcheck/list/${crewId}/${userId}?offset=${currentPage}`;
    } else {
        requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8080/api/v1/crewcheck/list/${crewId}/${userId}`;
    }

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

        console.log('[CrewCheckAPICalls] callCrewCheckListAPI result : ', result);
        dispatch({type: GET_CREWCHECK, payload: result.data});
    };
}

export const callCrewCheckUpdateAPI = ({form}) => {
    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8080/api/v1/crewcheck/list/update`;

    console.log('[CrewCheckAPICalls] callCrewCheckUpdateAPI start');
    console.log('[CrewCheckAPICalls] callCrewCheckUpdateAPI form : ', form);
    return async (dispatch, getState) => {

        const result = await fetch(requestURL, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*"
            },
            body: JSON.stringify({
                crew: {crewId: form.crew.crewId},
                user: {userId: form.user.userId},
                today: form.today
            })
        })
            .then(response => response.json());

        console.log('[CrewCheckAPICalls] callCrewCheckUpdateAPI result : ', result);

        dispatch({type: PUT_CREWCHECK, payload: result});
    }
}