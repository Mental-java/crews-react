import { GET_MYPAGE, PUT_NICKNAME } from "../module/MyPageModule";
import { GET_ENDCREW } from "../module/CrewListModule";


export const callMyPageListAPI = ({ captain }) => {

    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8080/api/v1/crew/list/${captain}/mypost`

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

export const callNickNameChangeAPI = ({userId,nickname}) => {
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
                userId: userId,
                nickname: nickname
            })
        })
        .then(response => response.json());
        

        dispatch({ type:PUT_NICKNAME });
    };

}

export const callEndCrewListAPI = ({userId}) => {
    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8080/api/v1/crewlist/${userId}/endCrew`;

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

        console.log("detailasdf ======="+ result.data);
        
        dispatch({ type: GET_ENDCREW, payload: result.data});
    };
}