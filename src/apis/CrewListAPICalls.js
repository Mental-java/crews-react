import {
    GET_CREWLIST,
    P0ST_CREWLIST,
    GET_CREWAPPLYLIST,
} from "../module/CrewListModule";

export const callCrewListAPI = ({userId}) => {
    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8080/api/v1/crewlist/${userId}/crew`;

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

        console.log("detail ======="+ result);
        
        dispatch({ type: GET_CREWLIST, payload: result.data});
    };
}

//크루 신청하기
export const callCrewListApplyAPI = ({crewId, userId}) => {
    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8080/api/v1/crewlist/apply/${crewId}`;

    console.log('[CrewListAPICalls] callCrewListApplyAPI start');

    return async (dispatch, getState) => {
        const result = await fetch(requestURL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*"
            },
            body: JSON.stringify({
                user: {userId: userId}
            })
        })
            .then(response => response.json());

        console.log('[CrewListAPICalls] callCrewListApplyAPI RESULT : ', result);

        dispatch({type: P0ST_CREWLIST, payload: result});
    };

}

export const callCrewListWaitStatusAPI = ({crewId}) => {
    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8080/api/v1/crewlist/applylist/${crewId}`;

    console.log('[CrewListAPICalls] callCrewListWaitStatusAPI start');

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

        console.log('[CrewListAPICalls] callCrewListWaitStatusAPI RESULT : ', result);

        dispatch({type: GET_CREWAPPLYLIST, payload: result.data});
    }

}