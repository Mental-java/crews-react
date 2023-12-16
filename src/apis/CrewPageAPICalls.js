import { GET_CREWPOST,GET_POSTDETAIL } from "../module/CrewPageModule";

export const callCrewPostAPI = ({ currentPage, crewId }) => {
    let requestURL;
    
    if(currentPage !== undefined || currentPage !== null){
        requestURL =  `http://${process.env.REACT_APP_RESTAPI_IP}:8080/api/v1/certificationpost/${crewId}/list?offset=${currentPage}`;
    }else {
        requestURL =  `http://${process.env.REACT_APP_RESTAPI_IP}:8080/api/v1/certificationpost/${crewId}/list`;
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
        console.log('[callMyPageList test] Result =======> ', result);
        dispatch({ type: GET_CREWPOST, payload: result.data });
    };
}

export const callCertificationPostAPI = ({ postId }) => {

    const requestURL =  `http://${process.env.REACT_APP_RESTAPI_IP}:8080/api/v1/certificationpost/${postId}/list/details`;
    

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
        console.log('[detailPost test] Result =======> ', result);
        dispatch({ type: GET_POSTDETAIL, payload: result.data });
    };
}