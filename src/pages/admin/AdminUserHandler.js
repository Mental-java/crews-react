import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import styles from "./Admin.module.css";

function AdminUserHandler( {user: {nickname, userId, diamondCount}} ) {
    const navigate = useNavigate();
    const login = useSelector(state => state.LoginReducer);
    const loginUser = login.userData;

    return (

        <>
            <tr className={styles.userList}>
                <td>{nickname}</td>
                <td>{diamondCount}</td>
                <td>{userId}</td>
                <td>
                    <button className={styles.btn}>제재</button>
                </td>
            </tr>
        </>
    )
}

export default AdminUserHandler;