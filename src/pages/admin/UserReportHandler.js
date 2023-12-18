import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import styles from "./Admin.module.css";

function UserReportHandler({report: {reporter, reportTarget, reportReason, reportCategory}}) {

    const navigate = useNavigate();
    const login = useSelector(state => state.LoginReducer);
    const loginUser = login.userData;

    if(!reporter || !reportTarget) {
        console.error('reporter or reportTarget is undefined');
        return null;
    }

    return (

        <>
            <tr className={styles.crewList}>
                <td>{reporter.userId}</td>
                <td>{reportTarget.userId}</td>
                <td>{reportCategory}</td>
                <td>{reportReason}</td>
            </tr>
        </>
    )
}

export default UserReportHandler;