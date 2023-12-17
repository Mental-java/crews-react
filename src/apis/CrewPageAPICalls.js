import {
    GET_CREWPOST,
    GET_POSTDETAIL,
    POST_CREWPOST,
    DELETE_CREWPOST
} from "../module/CrewPageModule";

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

export const callRegistCertificationPostAPI = ({crewId, form}) => {

    console.log('[callRegistCertificationPostAPI] start');

    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8080/api/v1/certificationpost/${crewId}/regist`;

    return async (dispatch, getState) => {

        const result = await fetch(requestURL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*"
            },
            body: JSON.stringify({
                postTitle: form.postTitle,
                postContent: form.postContent
            })
        })
            .then(response => response.json());

        console.log('[callRegistCertificationPostAPI] result : ', result);

        dispatch({type:POST_CREWPOST, payload: result});
    };
}

export const callDeleteCertificationPostAPI = ({postId}) => {

    console.log('[callDeleteCertificationPostAPI] start');

    const requsetURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8080/api/v1/certificationpost/postdelete/${postId}`;

    return async (dispatch, getState) => {

        const result = await fetch(requsetURL, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*"
            }
        })
            .then(response => response.json());

        console.log('[callDeleteCertificationPostAPI] result : ', result);

        dispatch({type: DELETE_CREWPOST, payload: result});
    }
}