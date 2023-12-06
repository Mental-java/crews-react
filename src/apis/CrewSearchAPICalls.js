
import {
    GET_CREWSEARCHLIST,
    GET_CREWLIST_EXERCISE,
    GET_CREWLIST_STUDY,
    GET_CREWLIST_HABIT,
    GET_CREWLIST_ETC,
    GET_CREWSEARCH_DETAIL, POST_CREW
} from "../module/CrewSearchModule";
import {request} from "axios";

export const callCrewSearchListAPI = ({currentPage}) => {

    let requestURL;

    if(currentPage !== undefined || currentPage !== null){
        requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8080/api/v1/crew/list/five?offset=${currentPage}`;
    }else {
        requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8080/api/v1/crew/list/five`;
    }

    console.log('[CrewSearchAPICalls] requestURL : ', requestURL);

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

            console.log('[CrewSearchAPICalls] callCrewSearchListAPI RESULT : ', result);
            dispatch({type: GET_CREWSEARCHLIST, payload: result.data});

    };
}

export const callCrewListAboutExerciseAPI = ({currentPage}) => {
    let requetURL;

    if(currentPage !== undefined || currentPage !== null){
        requetURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8080/api/v1/crew/list/exercise?offset=${currentPage}`;
    }else {
        requetURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8080/api/v1/crew/list/exercise`;
    }

    return async (dispatch, getState) => {

        const result = await fetch(requetURL, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept" : "*/*",
                "Access-Control-Allow-Origin": "*"
            }
        })
            .then(response => response.json());
        if(result.status === 200){
            console.log('[CrewSearchAPICalls] callCrewListAboutExerciseAPI RESULT : ', result);
            dispatch({type: GET_CREWLIST_EXERCISE, payload: result.data});
        }
    };
}

export const callCrewListAboutStudyAPI = ({currentPage}) => {
    let requetURL;

    if(currentPage !== undefined || currentPage !== null){
        requetURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8080/api/v1/crew/list/study?offset=${currentPage}`;
    }else {
        requetURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8080/api/v1/crew/list/study`;
    }

    return async (dispatch, getState) => {

        const result = await fetch(requetURL, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept" : "*/*",
                "Access-Control-Allow-Origin": "*"
            }
        })
            .then(response => response.json());
        if(result.status === 200){
            console.log('[CrewSearchAPICalls] callCrewListAboutStudyAPI RESULT : ', result);
            dispatch({type: GET_CREWLIST_STUDY, payload: result.data});
        }
    };
}

export const callCrewListAboutHabitAPI = ({currentPage}) => {
    let requetURL;

    if(currentPage !== undefined || currentPage !== null){
        requetURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8080/api/v1/crew/list/habit?offset=${currentPage}`;
    }else {
        requetURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8080/api/v1/crew/list/habit`;
    }

    return async (dispatch, getState) => {

        const result = await fetch(requetURL, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept" : "*/*",
                "Access-Control-Allow-Origin": "*"
            }
        })
            .then(response => response.json());
        if(result.status === 200){
            console.log('[CrewSearchAPICalls] callCrewListAboutHabitAPI RESULT : ', result);
            dispatch({type: GET_CREWLIST_HABIT, payload: result.data});
        }
    };
}

export const callCrewListAboutEtcAPI = ({currentPage}) => {
    let requetURL;

    if(currentPage !== undefined || currentPage !== null){
        requetURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8080/api/v1/crew/list/etc?offset=${currentPage}`;
    }else {
        requetURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8080/api/v1/crew/list/etc`;
    }

    return async (dispatch, getState) => {

        const result = await fetch(requetURL, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept" : "*/*",
                "Access-Control-Allow-Origin": "*"
            }
        })
            .then(response => response.json());
        if(result.status === 200){
            console.log('[CrewSearchAPICalls] callCrewListAboutEtcAPI RESULT : ', result);
            dispatch({type: GET_CREWLIST_ETC, payload: result.data});
        }
    };
}

export const callCrewSearchDetailAPI = ({crewId}) => {
    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8080/api/v1/crew/detail/${crewId}`;

    return async (dispatch, getState) => {

        const result = await fetch(requestURL, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept" : "*/*"
            }
        })
            .then(response => response.json());
        if(result.status === 200){
            console.log('[CrewSearchAPICalls] callCrewSearchDetailAPI SUCCESS');
            dispatch({type: GET_CREWSEARCH_DETAIL, payload: result.data});
        }
    };

}

export const callCrewRegistAPI = ({form}) => {

    console.log('[CrewSearchAPICalls] callCrewRegistAPI Call');

    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8080/api/v1/crew/register`;

    return async (dispatch, getState) => {

        const result = await fetch(requestURL, {
            method: "POST",
            headers: {
                "Accept": "*/*"
            },
            body: JSON.stringify(form)
        })
            .then(response => response.json());

        console.log('[CrewSearchAPICalls] callCrewRegistAPI RESULT : ', result);

        dispatch({type: POST_CREW, payload: result});
    };

}