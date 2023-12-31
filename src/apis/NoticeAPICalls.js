import { GET_NOTICE } from "../module/NoticeModule";
import { GET_NOTICES } from "../module/NoticeModule";

export const callNoticeListAPI = ({currentPage}) => {
    let requestURL;

    if(currentPage !== undefined || currentPage !== null){
        requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8080/api/v1/notice/list?offset=${currentPage}`;
    }else {
        requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8080/api/v1/notice/list`;
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
        console.log('[callNoticeList test] Result =======> ', result);
        dispatch({ type: GET_NOTICE, payload: result.data });
    };
}

export const callNoticeDetailAPI = ({noticeId}) => {

    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8080/api/v1/notice/list/${noticeId}/edit`;

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
        
        dispatch({ type: GET_NOTICES, payload: result.data});
    };
}