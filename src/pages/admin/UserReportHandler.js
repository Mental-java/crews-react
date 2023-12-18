
import styles from "./Admin.module.css";

function UserReportHandler({report: {reporter, reportTarget, reportContent, reportCategory}}) {

    return (

        <>
            <tr className={styles.crewList}>
                <td>{reporter?.userId}</td>
                <td>{reportTarget?.userId}</td>
                <td>{reportCategory}</td>
                <td>{reportContent}</td>
            </tr>
        </>
    )
}

export default UserReportHandler;