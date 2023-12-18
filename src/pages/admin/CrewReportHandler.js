import {useNavigate} from "react-router-dom";
import styles from "./Admin.module.css";

function CrewReportHandler({report: {reporter, reportCrew, reportContent, reportCategory}}) {

    const navigate = useNavigate();

    return (

        <>
            <tr className={styles.crewList}>
                <td>{reporter?.userId}</td>
                <td>{reportCrew?.crewId}</td>
                <td>{reportCategory}</td>
                <td>{reportContent}</td>
            </tr>
        </>
    )
}

export default CrewReportHandler;