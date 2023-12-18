import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import styles from "./Admin.module.css";
import AdminUserHandler from "../admin/AdminUserHandler";
import { decodeJwt } from "../utils/tokenUtils";
import {
    callUserListAPI
} from "../../apis/AdminAPICalls";
import { useNavigate } from "react-router-dom";

function AdminUser() {

    const dispatch = useDispatch();
    const admin = useSelector(state => state.adminUserReducer);
    const userList = admin.data;

    const token = decodeJwt(window.localStorage.getItem("adminAccessToken"));
    const navigate = useNavigate();


    const pageInfo = admin.pageInfo;

    const [start, setStart] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageEnd, setPageEnd] = useState(1);

    const pageNumber = [];
    if(pageInfo){
        for(let i =1; i <= pageInfo.pageEnd; i++){
            pageNumber.push(i);
        }
    }

    useEffect(
        () => {
            if(!token){
                navigate("/error")
            }else{
                setStart((currentPage - 1) * 5);
                dispatch(
                    callUserListAPI({
                    currentPage: currentPage
                    })
                );
            }
        },[currentPage]);


    return (
        
            <div className={styles.ListBox}>
                <h1>크루원 관리</h1>
                {/*<div>*/}
                {/*    <input type="text" placeholder="크루원 검색..."/>*/}
                {/*    <button className={styles.btn}>검색</button>*/}
                {/*</div>*/}

                <br/>

                <div>
                    <table>
                        <thead className={styles.tableHead}>
                        <tr>
                            <td>크루원 닉네임</td>
                            <td>보석 개수</td>
                            <td>이메일</td>
                            <td>제재 상태</td>
                        </tr>
                        </thead>
                        <tbody className={styles.tableBody}>
                        {Array.isArray(userList) && userList.map(
                                (user) => (
                                <AdminUserHandler 
                                    key={ user.userId } user={ user }/>
                            )
                        )}

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

                        </tbody>
                    </table>
                </div>
            </div>

            
        
    )
}

export default AdminUser;