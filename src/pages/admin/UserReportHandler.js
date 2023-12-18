
import styles from "./Admin.module.css";

function UserReportHandler({report: {reporter, reportTarget, reportReason, reportCategory}}) {

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