import {
    GET_CREWCOMMENT
} from "../module/CommentModule";

export const callCommentAPI = ({postId,currentPage}) => {

    let requestURL;
    
    if(currentPage !== undefined || currentPage !== null){
        requestURL =  `http://${process.env.REACT_APP_RESTAPI_IP}:8080/api/v1/certificationcomment/${postId}/list/detail?offset=${currentPage}`;
    }else {
        requestURL =   `http://${process.env.REACT_APP_RESTAPI_IP}:8080/api/v1/certificationcomment/${postId}/list/detail`;
    }

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
        dispatch({type: GET_CREWCOMMENT, payload: result.data});

    };
}