import { GET_MYPAGE, PUT_NICKNAME } from "../module/MyPageModule";


export const callMyPageListAPI = () => {

    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8080/api/v1/crew/list`

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
        dispatch({ type: GET_MYPAGE, payload: result.data });
    };
}

export const callNickNameChangeAPI = ({form}) => {
    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8080/api/v1/user/editnickname`

    return async (dispatch, getState) => {

        const result = await fetch(requestURL, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*",
                "Access-Control-Allow-Origin": "*"
            },
            body: JSON.stringify({
                "userId": "form.userId",
                "nickname": "form.nickname"
            })
        })
        .then(response => response.json());

        dispatch({ type:PUT_NICKNAME, payload: result.data});
    };

}