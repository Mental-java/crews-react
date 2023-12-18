
import styles from "./Admin.module.css";

function AdminCrewHandler( { crew: {crewId, crewName, captain = {}} } ) {

    return (

        <>
            <tr className={styles.crewList}>
                <td>{crewName}</td>
                <td>{crewId}</td>
                <td>{captain.userId}</td>
                <td>
                    <button className={styles.btn}>삭제</button>
                </td>
            </tr>
        </>
    )
}

export default AdminCrewHandler;
