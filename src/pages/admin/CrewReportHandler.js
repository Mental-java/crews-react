
import styles from "./Admin.module.css";

function CrewReportHandler({report: {reporter, reportTarget, reportReason, reportCategory}}) {

    return (

        <>
            <tr className={styles.crewList}>
                <td>{reporter.userId}</td>
                <td>{reportTarget.crewId}</td>
                <td>{reportCategory}</td>
                <td>{reportReason}</td>
            </tr>
        </>
    )
}

export default CrewReportHandler;