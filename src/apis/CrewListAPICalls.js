import {
    GET_CREWLIST,
    P0ST_CREWLIST,
    GET_CREWAPPLYLIST,
    PUT_CREWJOIN,
    PUT_CREWNOTJOIN
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

export const callCrewJoinAgreeAPI = ({crewId, userId}) => {
    const requsetURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8080/api/v1/crewlist/agreestatus`;

    console.log('[CrewListAPICalls] callCrewJoinAgreeAPI start');

    return async (dispatch, getState) => {
        const result = await fetch(requsetURL, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*",
                "Access-Control-Allow-Origin": "*"
            },
            body: JSON.stringify({
                id:{
                    userId: userId,
                    crewId: crewId
                },
                crew:{
                    crewId: crewId
                }
            })
        })
            .then(response => response.json());

        console.log('[CrewListAPICalls] callCrewJoinAgreeAPI success');

        dispatch({type: PUT_CREWJOIN, payload: result});
    }
}

export const callCrewJoinDisagreeAPI = ({crewId, userId}) => {
    const requsetURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8080/api/v1/crewlist/disagreestatus`;

    console.log('[CrewListAPICalls] callCrewJoinDisagreeAPI start');

    return async (dispatch, getState) => {
        const result = await fetch(requsetURL, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*",
                "Access-Control-Allow-Origin": "*"
            },
            body: JSON.stringify({
                id:{
                    userId: userId,
                    crewId: crewId
                }
            })
        })
            .then(response => response.json());

        console.log('[CrewListAPICalls] callCrewJoinDisagreeAPI success');

        dispatch({type: PUT_CREWNOTJOIN, payload: result});
    }
}


//크루 유저 출력
export const callCrewUserAPI = ({crewId}) => {
    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8080/api/v1/crewlist/${crewId}/users`;

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

        dispatch({type: GET_CREWUSER, payload: result.data});
    }


}

