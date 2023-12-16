import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import styles from "./Admin.module.css";

function AdminCrewHandler( { crew: {crewId, crewName, captain = {}} } ) {

    const navigate = useNavigate();
    const login = useSelector(state => state.LoginReducer);
    const loginUser = login.userData;

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
