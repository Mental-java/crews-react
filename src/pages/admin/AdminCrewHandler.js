import {useNavigate} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import styles from "./Admin.module.css";

import {
    callCrewDeleteAPI
} from "../../apis/CrewAPICalls";

function AdminCrewHandler( { crew: {crewId, crewName, captain = {}} } ) {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onClickDeleteCrew = () => {

        dispatch(callCrewDeleteAPI({
            crewId: crewId
        }));

        alert(`${crewId}번 크루를 삭제합니다.`);
        window.location.reload();
    }

    return (

        <>
            <tr className={styles.crewList}>
                <td>{crewName}</td>
                <td>{crewId}</td>
                <td>{captain.userId}</td>
                <td>
                    <button
                        className={styles.btn}
                        onClick={onClickDeleteCrew}
                    >
                        삭제
                    </button>
                </td>
            </tr>
        </>
    )
}

export default AdminCrewHandler;