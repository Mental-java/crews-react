import {
    ADMIN_NOTICE,
    ADMIN_USERLIST,
    ADMIN_CREWLIST,
    ADMIN_USERREPORTLIST,
    ADMIN_CREWREPORTLIST,
    POST_ADMINLOGIN
} from "../module/AdminModule"

// export const callNoticeListAPI = ({currentPage}) => {
//
// }

export const callUserListAPI = ({currentPage}) => {

    let requestURL;

    if(currentPage !== undefined || currentPage !== null){
        requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8080/api/v1/user/userlist?offset=${currentPage}`;
    }else {
        requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8080/api/v1/user/userlist`;
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
        dispatch({type: ADMIN_USERLIST, payload: result.data});

    };

}

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
                "Authorization": "Bearer " + window.localStorage.getItem("adminAccessToken")
            }
        })
            .then(response => response.json());

        console.log('[AdminAPICalls] AdminCrewListAPI RESULT : ', result);
        dispatch({type: ADMIN_CREWLIST, payload: result.data});

    };
}

// export const callUserReportListAPI = ({currentPage}) => {
//
// }
//
// export const callCrewReportListAPI = ({currentPage}) => {
//
// }

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