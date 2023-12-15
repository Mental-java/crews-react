
import {
    GET_CREWCHECK
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