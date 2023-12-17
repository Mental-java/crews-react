import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import styles from "./Admin.module.css";

function CrewReportHandler({report: {reporter, reportTarget, reportReason, reportCategory}}) {

    const navigate = useNavigate();
    const login = useSelector(state => state.LoginReducer);
    const loginUser = login.userData;

    return (

        <>
            <tr className={styles.crewList}>
                <td>{reporter.userId}</td>
                <td>{reportTarget.crewId}</td>
                <td>{reportReason}</td>
                <td>{reportCategory}</td>
            </tr>
        </>
    )
}

export default CrewReportHandler;