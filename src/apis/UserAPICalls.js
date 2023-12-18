
import {
    PUT_USERREPORT_ONE
} from "../module/UserModule";

export const callUpdateUserReportStatusOneAPI = ({form, userId}) => {

    console.log('[callUpdateUserReportStatusOneAPI] start');

    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8080/api/v1/user/update/reportone/${userId}`;

    return async (dispatch, getState) => {

        const result = await fetch(requestURL, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*"
            },
            body: JSON.stringify({
                reportStatus: form.reportStatus
            })
        })
            .then(response => response.json());

        console.log('[callUpdateUserReportStatusOneAPI] result : ', result);

        dispatch({type: PUT_USERREPORT_ONE, payload: result});
    }
}