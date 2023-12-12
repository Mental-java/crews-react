import {
    GET_CREWINTROLIST,
    PUT_CREWINTRO
} from "../module/CrewIntroModule";

export const callCrewIntroListAPI = ({crewId}) => {

    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8080/api/v1/crew/detail/${crewId}/intro`;

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

        console.log('[CrewIntroAPICalls] callCrewIntroListAPI RESULT : ', result);
        dispatch({type: GET_CREWINTROLIST, payload: result.data});

    };
}

export const callCrewIntroUpdateAPI = ({form}) => {

    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8080/api/v1/crew/intro`;

    return async (dispatch, getState) => {
        const result = await fetch(requestURL, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Accept" : "*/*",
                "Access-Control-Allow-Origin": "*"
            },
            body : JSON.stringify({
                crewId: form.crewId,
                introduction: form.introduction
            })
        })
            .then(response => response.json());

        console.log('[CrewIntroAPICalls] callCrewIntroUpdateAPI RESULT : ', result);
        dispatch({type: PUT_CREWINTRO, payload: result});
    };
}