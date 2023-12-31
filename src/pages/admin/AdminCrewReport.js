
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import styles from "./Admin.module.css";
import {useNavigate} from "react-router-dom";
import CrewReportHandler from "./CrewReportHandler";
import {decodeJwt} from "../utils/tokenUtils";

import {
    callCrewReportListAPI
} from "../../apis/AdminAPICalls";

function AdminCrewReport() {

    const dispatch = useDispatch();
    const admin = useSelector(state => state.adminReducer);
    const crewReport = admin.data;
    const token = decodeJwt(window.localStorage.getItem("adminAccessToken"));

    const pageInfo = admin.pageInfo;

    const [start, setStart] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageEnd, setPageEnd] = useState(1);

    console.log(admin);

    const pageNumber = [];
    if(pageInfo){
        for(let i =1; i <= pageInfo.pageEnd; i++){
            pageNumber.push(i);
        }
    }

    const navigate = useNavigate();

    useEffect(() => {
        if (!token) {
            navigate("/error")
        } else {
            setStart((currentPage - 1) * 5);
            dispatch(
                callCrewReportListAPI({
                    currentPage: currentPage,
                })
            );
        }
        }, [currentPage]
    );

    return (
        <>
            <div className={styles.ListBox}>
                <h1>크루 신고 관리</h1>
                {/*<div>*/}
                {/*    <input type="text" placeholder="크루 검색..."/>*/}
                {/*    <button className={styles.btn}>검색</button>*/}
                {/*</div>*/}

                <br/>

                <div>
                    <table>
                        <thead className={styles.tableHead}>
                        <tr>
                            <td>신고자</td>
                            <td>크루 번호</td>
                            <td>신고 유형</td>
                            <td>신고 내용</td>
                        </tr>
                        </thead>
                        <tbody className={styles.tableBody}>
                        {
                            Array.isArray(crewReport) && crewReport.map((report) => (
                                report && <CrewReportHandler key={ report.reportId } report={ report } />
                            ))
                        }
                        </tbody>
                    </table>
                </div>
            </div>

            <div className={styles.btnMain}>
                <div className={styles.btnDiv}>
                    {Array.isArray(crewReport) &&
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
                    { Array.isArray(crewReport) &&
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

export default AdminCrewReport;