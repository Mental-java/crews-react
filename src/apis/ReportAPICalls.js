
import {
    POST_CREW_REPORT
} from '../module/ReportModule';

export const callCrewReportWriteAPI = ({form}) => {
    console.log('[ReportAPICalls] callCrewReportWriteAPI call');

    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8080/api/v1/report/crew`;

    return async (dispatch, getState) => {

        const result = await fetch(requestURL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*"
            },
            body: JSON.stringify({
                reportContent: form.reportContent,
                reporter: {userId: form.reporter.userId},
                reportCategory: form.reportCategory,
                reportCrew: {crewId: form.reportCrew}
            })
        })
            .then(response => response.json());

        console.log('[ReportAPICalls] callCrewReportWriteAPI result : ', result);

        dispatch({ type: POST_CREW_REPORT, payload: result });
    };

}