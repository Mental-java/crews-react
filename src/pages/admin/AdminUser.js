
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import styles from "./Admin.module.css";

import {
    callUserListAPI
} from "../../apis/AdminAPICalls";

import AdminUserHandler from "./AdminUserHandler";

function AdminUser() {

    const dispatch = useDispatch();
    const admin = useSelector(state => state.adminReducer);
    const userList = admin.data;

    console.log("test : ", userList);

    const pageInfo = admin.pageInfo;

    const [start, setStart] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageEnd, setPageEnd] = useState(1);

    const pageNumber = [];
    if(pageInfo){
        for(let i =1; i <= pageInfo.pageEnd; i++){
            pageNumber.push(i);
        }
        setPageEnd(pageInfo.pageEnd);
    }

    useEffect(
        () => {
            setStart((currentPage - 1) * 5);
            dispatch(callUserListAPI({
                currentPage: currentPage
            }));
        }
        ,[]
    );

    return (
        <>
            <div className={styles.ListBox}>
                <h1>크루원 관리</h1>
                <div>
                    <input type="text" placeholder="크루원 검색..."/>
                    <button className={styles.btn}>검색</button>
                </div>

                <br/>

                <div>
                    <table>
                        <thead className={styles.tableHead}>
                        <tr>
                            <td>크루원 닉네임</td>
                            <td>보석 개수</td>
                            <td>이메일</td>
                            <td>제재</td>
                        </tr>
                        </thead>
                        <tbody className={styles.tableBody}>
                        {
                            Array.isArray(userList) && userList.map((user) => (<AdminUserHandler key={user} user={user}/>))
                        }
                        </tbody>
                    </table>
                </div>
            </div>

            <div className={styles.btnMain}>
                <div className={styles.btnDiv}>
                    {Array.isArray(userList) &&
                        <button
                            onClick={() => setCurrentPage(currentPage - 1)}
                            disabled={currentPage === 1}
                            className={styles.pagingBtn}
                        >
                            &lt;
                        </button>
                    }
                    {pageNumber.map((num) => (
                        <li key={num} onClick={() => setCurrentPage(num)}>
                            <button
                                style={ currentPage === num ? {background : '#000928'} : null}
                                className={styles.pagingBtn}
                            >
                                {num}
                            </button>
                        </li>
                    ))}
                    { Array.isArray(userList) &&
                        <button
                            onClick={() => setCurrentPage(currentPage + 1)}
                            disabled={currentPage === pageInfo.pageEnd || pageInfo.total ==0}
                            className={styles.pagingBtn}
                        >
                            &gt;
                        </button>
                    }
                </div>
            </div>
        </>
    )
}

export default AdminUser;