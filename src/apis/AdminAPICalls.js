
import {
    ADMIN_NOTICE,
    ADMIN_USERLIST,
    ADMIN_CREWLIST,
    ADMIN_USERREPORTLIST,
    ADMIN_CREWREPORTLIST
} from "../module/AdminModule"

// export const callNoticeListAPI = ({noticeId}) => {
//
// }
//
// export const callUserListAPI = ({userId}) => {
//
// }

export const callAdminCrewListAPI = ({currentPage}) => {

    let requestURL;

    if(currentPage !== undefined || currentPage !== null){
        requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8080/api/v1/crew/list?offset=${currentPage}`;
    }else {
        requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8080/api/v1/crew/list`;
    }

    console.log('[AdminAPICalls] AdminCrewListAPI requestURL : ', requestURL);

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

        console.log('[AdminAPICalls] AdminCrewListAPI RESULT : ', result);
        dispatch({type: ADMIN_CREWLIST, payload: result.data});

    };
}

// export const callUserReportListAPI = ({userReportId}) => {
//
// }
//
// export const callCrewReportListAPI = ({crewReportId}) => {
//
// }