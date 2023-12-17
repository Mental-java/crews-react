import {
    callNoticeListAPI
} from '../../../apis/NoticeAPICalls'
import { useDispatch, useSelector } from "react-redux";
import { useState, useRef } from "react";
import { useEffect } from "react";
import NoticeHandler from "../../../component/pages/NoticeHandler";
import {callAdminNoticeListAPI, callCrewListAPI} from "../../../apis/AdminAPICalls";
import {decodeJwt} from "../../utils/tokenUtils";
import {NavLink, useNavigate} from "react-router-dom";
import AdminNoticeHandler from "./AdminNoticeHandler";

function AdminNotice() {

    const dispatch = useDispatch();
    const notice = useSelector(state => state.noticeReducer);
    const noticeList = notice.data;

    const token = decodeJwt(window.localStorage.getItem("adminAccessToken"));
    const navigate = useNavigate();

    const pageInfo = notice.pageInfo;

    const [start, setStart] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageEnd, setPageEnd] = useState(1);

    const pageNumber = [];
    if(pageInfo){
        for(let i = 1; i <= pageInfo.pageEnd ; i++){
            pageNumber.push(i);
        }
    }


    useEffect(() => {
        // adminAccessToken이 있는지 확인합니다.
        if (!token) {
            // Error.js 페이지로 리디렉션합니다.
            navigate("/error")
        } else {
            // adminAccessToken이 있으면 컴포넌트를 계속 진행합니다.
            setStart((currentPage - 1) * 5);
            dispatch(
                callAdminNoticeListAPI({
                    currentPage: currentPage,
                })
            );
        }
    }, [currentPage]);



    return (

        <div>
            <div>
                <table>
                    <div>
                        <NavLink to={"create"}>등록하기</NavLink>
                    </div>
                    <thead>
                    <tr>
                        <th width="70%">제목</th>
                        <th width="300px">작성자</th>
                        <th width="15%">작성일</th>
                    </tr>
                    </thead>
                    <tbody>
                    {Array.isArray(noticeList) && noticeList.map(
                        (notice) => (
                            <AdminNoticeHandler  key={notice.noticeId} notice = {notice}/>
                        )
                    )}
                    <div style={{ listStyleType: "none", display: "flex"}}>
                        {Array.isArray(noticeList) &&
                            <button
                                onClick={() => setCurrentPage(currentPage - 1)}
                                disabled={currentPage === 1 }
                            >
                                &lt;
                            </button>
                        }
                        {pageNumber.map((num)=> (
                            <li key={num} onClick={() => setCurrentPage(num)}>
                                <button
                                    style={ currentPage === num ? {backgroundColor : '#000928' } : null}
                                >
                                    {num}
                                </button>
                            </li>
                        ))}
                        { Array.isArray(noticeList) &&
                            <button
                                onClick={() => setCurrentPage(currentPage + 1)}
                                disabled={currentPage === pageInfo.pageEnd  || pageInfo.total == 0}
                            >
                                &gt;
                            </button>
                        }
                    </div>
                    </tbody>

                </table>
            </div>
        </div>

    )
}

export default AdminNotice;