import { GET_CREWLIST } from "../module/CrewListModule";

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