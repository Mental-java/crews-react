export const callNoticeListAPI = () => {

    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8080/api/v1/notice/list`

    return async (dispatch, getState) => {

        const result = await fetch(requestURL, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*"
            }
        })
        .then(response => response.json());

        // dispatch({ type: GET_PURCHASE,  payload: result });
    };
}