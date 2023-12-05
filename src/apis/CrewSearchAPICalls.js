
import { GET_CREWSEARCHLIST } from "../module/CrewSearchModule";

export const callCrewSearchListAPI = ({currentPage}) => {

    let requestURL;

    if(currentPage !== undefined || currentPage !== null){
        requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8080/api/v1/crew/list/five?offset=${currentPage}`;
    }else {
        requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8080/api/v1/crew/list/five`;
    }

    console.log('[CrewSearchAPICalls] requestURL : ', requestURL);

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

            console.log('[CrewSearchAPICalls] callCrewSearchListAPI RESULT : ', result);
            dispatch({type: GET_CREWSEARCHLIST, payload: result.data});

    };
}