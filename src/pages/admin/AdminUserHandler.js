
import styles from "./Admin.module.css";

function AdminUserHandler( {user: {nickname, userId, diamondCount}} ) {

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