
import styles from "./Admin.module.css";
import {useState} from "react";
import {useSelector, useDispatch} from "react-redux";

import {
    callUpdateUserReportStatusOneAPI
} from "../../apis/UserAPICalls";

function AdminUserHandler( {user: {nickname, userId, diamondCount, reportStatus}} ) {

    console.log('test:====', reportStatus);
    const dispatch = useDispatch();

    const [form, setForm] = useState({
        reportStatus: ''
    });

    const onClickReportStatusOneHandler = () => {

        setForm({
            ...form,
            reportStatus: '1'
        });

        dispatch(callUpdateUserReportStatusOneAPI({
            form: form,
            userId: userId
        }))

        alert('유저에게 경고문을 보냈습니다.');
        window.location.reload();
    }

    return (

        <>
            <tr className={styles.userList}>
                <td>{nickname}</td>
                <td>{diamondCount}</td>
                <td>{userId}</td>
                <td>{reportStatus}</td>
                <td>
                    <button
                        className={styles.btn}
                        onClick={onClickReportStatusOneHandler}
                    >
                        제재
                    </button>
                </td>
            </tr>
        </>
    )
}

export default AdminUserHandler;