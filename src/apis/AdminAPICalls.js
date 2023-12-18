import {
    ADMIN_NOTICE,
    ADMIN_USERLIST,
    ADMIN_CREWLIST,
    ADMIN_USERREPORTLIST,
    ADMIN_CREWREPORTLIST,
    POST_ADMINLOGIN, DELETE_NOTICE, ADMIN_DELETE_NOTICE, ADMIN_CREATE_NOTICE, ADMIN_UPDATE_NOTICE
} from "../module/AdminModule"
import {GET_NOTICE, GET_NOTICES} from "../module/NoticeModule";
import {DELETE_CREW, POST_CREW} from "../module/CrewModule";
import { GET_USERLIST } from "../module/AdminUserListModule";

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
        dispatch({ type: ADMIN_NOTICE, payload: result.data });
    };
}

export const callUserListAPI = ({currentPage}) => {

    let requestURL;

    if(currentPage !== undefined || currentPage !== null){
        requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8080/api/v1/user/userlist?offset=${currentPage}`;
    }else {
        requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8080/api/v1/user/userlist`;
    }

    console.log('[AdminAPICalls] AdminUserListAPI requestURL : ', requestURL);

    return async (dispatch, getState) => {
        const result = await fetch(requestURL, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept" : "*/*",
                "Authorization": "Bearer " + window.localStorage.getItem("adminAccessToken")
            }
        })
            .then(response => response.json());

        console.log('[AdminAPICalls] AdminUserListAPI RESULT : ', result);
        dispatch({type: GET_USERLIST, payload: result.data});

    };

}

export const callCrewListAPI = ({currentPage}) => {

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
                "Authorization": "Bearer " + window.localStorage.getItem("adminAccessToken")
            }
        })
            .then(response => response.json());

        console.log('[AdminAPICalls] AdminCrewListAPI RESULT : ', result);
        dispatch({type: ADMIN_CREWLIST, payload: result.data});

    };
}

export const callUserReportListAPI = ({currentPage}) => {

    let requestURL;

    if(currentPage !== undefined || currentPage !== null){
        requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8080/api/v1/admin/userreportlist?offset=${currentPage}`;
    }else {
        requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8080/api/v1/admin/userreportlist`;
    }

    return async (dispatch, getState) => {
        const result = await fetch(requestURL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept" : "*/*",
                "Authorization": "Bearer " + window.localStorage.getItem("adminAccessToken")
            }
        })
            .then(response => response.json());

        console.log('[AdminAPICalls] AdminUserReportListAPI RESULT : ', result);
        dispatch({type: ADMIN_USERREPORTLIST, payload: result});

    };
}

export const callCrewReportListAPI = ({currentPage}) => {
    let requestURL;

    if(currentPage !== undefined || currentPage !== null){
        requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8080/api/v1/admin/crewreportlist?offset=${currentPage}`;
    }else {
        requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8080/api/v1/admin/crewreportlist`;
    }

    return async (dispatch, getState) => {
        const result = await fetch(requestURL, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept" : "*/*",
                "Authorization": "Bearer " + window.localStorage.getItem("adminAccessToken")
                }
            }
        )
            .then(response => response.json());


        console.log('[AdminAPICalls] AdminCrewReportListAPI RESULT : ', result);
        dispatch({type: ADMIN_CREWREPORTLIST, payload: result.data});

    };
}

export const callAdminLoginAPI = ({form}) => {
    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8080/admin/login`;

    return async (dispatch, getState) => {

        // 클라이언트 fetch mode : no-cors 사용시 application/json 방식으로 요청이 불가능
        // 보안상의 이유로 브라우저는 스크립트에서 시작한 교차 출처 HTTP요청을 제한한다.
        // 서버에서 cors 허용을 해주어야 함
        const result = await fetch(requestURL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*",
                "Access-Control-Allow-Origin": "*"     // 모든 도멘인에서 접근할 수 있음을 의미 (특정도메인을 넣고싶으면 * 대신 http://test.com)
            },
            body: JSON.stringify({
                adminId: form.adminId,
                adminPw: form.adminPassword
            })
        })
        .then(response => response.json());

        console.log('[MemberAPICalls] callLoginAPI RESULT : ', result);
        if(result.status === 200){
            window.localStorage.setItem('adminAccessToken', result.data.accessToken);            
        }
        dispatch({ type: POST_ADMINLOGIN,  payload: result });
        
    };
}

export const callLogoutAPI = () => {
    

    return async (dispatch, getState) => {            

        dispatch({ type: POST_ADMINLOGIN,  payload: '' });        
        console.log('[MemberAPICalls] callLogoutAPI RESULT : SUCCESS');
    };
}

export const callAdminNoticeListAPI = ({currentPage}) => {
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
                "Authorization": "Bearer " + window.localStorage.getItem("adminAccessToken")
            }
        })
            .then(response => response.json());
        console.log('[callNoticeList test] Result =======> ', result);
        dispatch({ type: GET_NOTICE, payload: result.data });
    };
}

export const callAdminNoticeDetailAPI = ({noticeId}) => {

    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8080/api/v1/notice/list/${noticeId}/edit`;

    return async (dispatch, getState) => {

        const result = await fetch(requestURL, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*",
                "Authorization": "Bearer " + window.localStorage.getItem("adminAccessToken")
            }
        })
            .then(response => response.json());

        console.log("detail ======="+ result);

        dispatch({ type: GET_NOTICES, payload: result.data});
    };
}

export const callAdminNoticeCreateAPI = ({form}) => {

    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8080/api/v1/notice/regist`;

    return async (dispatch, getState) => {

        const result = await fetch(requestURL, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*"
            },
            body: JSON.stringify( {
                noticeTitle: form.noticeTitle,
                noticeContent: form.noticeContent
            })
        })
            .then(response => response.json());

        console.log('[CrewSearchAPICalls] callCrewRegistAPI RESULT : ', result);

        dispatch({type: ADMIN_CREATE_NOTICE, payload: result});
    };
}

export const callAdminNoticeDeleteAPI = ({noticeId}) => {

    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8080/api/v1/notice/list/${noticeId}/edit`

    return async (dispatch, getState) => {

        const result = await fetch(requestURL, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*"
            }
        })
            .then(response => response.json());

        console.log('[AdminAPICalls] callAdminDeleteAPI RESULT : ', result);

        dispatch({type: ADMIN_DELETE_NOTICE, payload: result});
    };
}
export const callAdminNoticeUpdateAPI = ({form,noticeId}) => {
    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8080/api/v1/notice/list/${noticeId}/update`;

    return async (dispatch, getState) => {

        const result = await fetch(requestURL, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*"
            },
            body: JSON.stringify( {
                noticeTitle : form.noticeTitle,
                noticeContent : form.noticeContent
            })
        })
            .then(response => response.json());

        console.log('[CrewSearchAPICalls] callCrewUpdateAPI RESULT : ', result);

        dispatch({type: ADMIN_UPDATE_NOTICE, payload: result});
    };
}
