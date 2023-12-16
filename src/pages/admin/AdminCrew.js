import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import AdminCrewHandler from "./AdminCrewHandler";
import styles from "./Admin.module.css";

import {
    callCrewListAPI
} from "../../apis/AdminAPICalls";
import { decodeJwt } from "../utils/tokenUtils";
import { useNavigate } from "react-router-dom";

function AdminCrew() {

    const dispatch = useDispatch();
    const admin = useSelector(state => state.adminReducer);
    const crewList = admin.data;
    const token = decodeJwt(window.localStorage.getItem("adminAccessToken"));

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

    const navigate = useNavigate();

    useEffect(() => {
        // adminAccessToken이 있는지 확인합니다.
        if (!token) {
            // Error.js 페이지로 리디렉션합니다.
            navigate("/error")
        } else {
            // adminAccessToken이 있으면 컴포넌트를 계속 진행합니다.
            setStart((currentPage - 1) * 5);
            dispatch(
                callAdminCrewListAPI({
                    currentPage: currentPage,
                })
            );
        }
    }, [currentPage]);


    return (
        <>
            <div className={styles.ListBox}>
                <h1>크루 관리</h1>
                <div>
                    <input type="text" placeholder="크루 검색..."/>
                    <button className={styles.btn}>검색</button>
                </div>

                <br/>

                <div>
                    <table>
                        <thead className={styles.tableHead}>
                            <tr>
                                <td>크루 이름</td>
                                <td>크루 아이디</td>
                                <td>캡틴</td>
                            </tr>
                        </thead>
                        <tbody className={styles.tableBody}>
                        {
                            Array.isArray(crewList) && crewList.map((crew) => (
                                crew && <AdminCrewHandler key={ crew.crewId } crew={ crew }/>
                            ))
                        }
                        </tbody>
                    </table>
                </div>
            </div>

            <div className={styles.btnMain}>
                <div className={styles.btnDiv}>
                    {Array.isArray(crewList) &&
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
                    { Array.isArray(crewList) &&
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

export default AdminCrew;