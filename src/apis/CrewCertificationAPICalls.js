import {
    GET_CREWCERTIFICATIONLIST
} from "../module/CrewCertificationModule";

export const callCrewCertificationListAPI = ({crewId}) => {

    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8080/api/v1/crew/{crewId}/list`;

    return async (dispatch, getState) => {
        const result = await fetch(requestURL, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept" : "*/*",
                "Access-Control-Allow-Origin": "*"
            }
        })
            .then(response => response.json());

        console.log('[CrewCertificationAPICalls] callCrewCertificationListAPI RESULT : ', result);
        dispatch({type: GET_CREWCERTIFICATIONLIST, payload: result.data});

    };
}