
import {
    POST_CREW,
    DELETE_CREW,
    UPDATE_CREW
} from "../module/CrewModule";

export const callCrewRegistAPI = ({form}) => {

    console.log('[CrewSearchAPICalls] callCrewRegistAPI Call');

    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8080/api/v1/crew/register`;

    return async (dispatch, getState) => {

        const result = await fetch(requestURL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*"
            },
            body: JSON.stringify( {
                crewName: form.crewName,
                captain: {userId: form.captain.userId},
                crewCategoryCode: {categoryCode: form.crewCategoryCode.categoryCode},
                startDate: form.startDate,
                endDate: form.endDate,
                crewRecruitmentPost: form.crewRecruitmentPost,
                crewRecruitmentContent: form.crewRecruitmentContent
            })
        })
            .then(response => response.json());

        console.log('[CrewSearchAPICalls] callCrewRegistAPI RESULT : ', result);

        dispatch({type: POST_CREW, payload: result});
    };
}

export const callCrewDeleteAPI = ({crewId}) => {

    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8080/api/v1/crew/crewdelete/${crewId}`;

    return async (dispatch, getState) => {

        const result = await fetch(requestURL, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*"
            }
        })
            .then(response => response.json());

        console.log('[CrewSearchAPICalls] callCrewDeleteAPI RESULT : ', result);

        dispatch({type: DELETE_CREW, payload: result});
    };
}

export const callCrewUpdateAPI = ({form}) => {
     const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8080/api/v1/crew/update`;

     console.log('[CrewSearchAPICalls] callCrewUpdateAPI start======');

    return async (dispatch, getState) => {

        const result = await fetch(requestURL, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*"
            },
            body: JSON.stringify( {
                crewId: form.crewId,
                crewName: form.crewName,
                crewCategoryCode: {categoryCode: form.crewCategoryCode.categoryCode},
                startDate: form.startDate,
                endDate: form.endDate,
                crewRecruitmentPost: form.crewRecruitmentPost,
                crewRecruitmentContent: form.crewRecruitmentContent,
                recruitmentStatus: form.recruitmentStatus
            })
        })
            .then(response => response.json());

        console.log('[CrewSearchAPICalls] callCrewUpdateAPI RESULT : ', result);

        dispatch({type: UPDATE_CREW, payload: result});
    };
}