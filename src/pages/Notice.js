import NoticeCSS from "./Notice.module.css";
import {
    callNoticeListAPI
} from '../apis/NoticeAPICalls'
import { useDispatch, useSelector } from "react-redux";
import { useState, useRef } from "react";
import { useEffect } from "react";

function Notice() {

    const dispatch = useDispatch();
    const notice = useSelector(state => state.noticeReducer);
    const noticeList = notice.data;

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

    useEffect(
        () => {
            setStart((currentPage -1 )*5);
            dispatch(callNoticeListAPI({
                currentPage : currentPage
            }));
        }
        , [currentPage]
    );

    return (

        <div className={NoticeCSS.noticeMain}>
            <div className={NoticeCSS.informationBar}>
                <table className={ NoticeCSS.listTable}>
                    <thead>
                    <tr>
                        <th className={NoticeCSS.barContent} width="700">제목</th>
                        <th className={NoticeCSS.barContent} width="230">작성자</th>
                        <th className={NoticeCSS.barContent} width="230">작성일</th>
                    </tr>
                    </thead>
                    <tbody className={ NoticeCSS.listBody}>
                    {Array.isArray(noticeList) && noticeList.map(
                        (notice) => (
                            <tr 
                                className= { NoticeCSS.noticeLists }
                                key={notice.noticeId}
                            >
                                <td className= { NoticeCSS.noticeContent}>{notice.noticeTitle}</td>
                                <td className= { NoticeCSS.noticeContent}>{notice.adminId.adminId == 'admin1' ? '관리자' : notice.adminId.adminId}</td>
                                <td className= { NoticeCSS.noticeContent}>{notice.noticeDate}</td>
                            </tr>
                        )
                    )}
                    <div style={{ listStyleType: "none", display: "flex"}} className = {NoticeCSS.btnStyle}>
                        {Array.isArray(noticeList) && 
                            <button 
                                onClick={() => setCurrentPage(currentPage - 1)}
                                disabled={currentPage === 1 }
                                className = { NoticeCSS.pagingBtn}
                            >
                                &lt;
                            </button>
                        }
                        {pageNumber.map((num)=> (
                           <li key={num} onClick={() => setCurrentPage(num)}>
                           <button
                               style={ currentPage === num ? {backgroundColor : 'orange' } : null}
                               className={ NoticeCSS.pagingBtn }
                           >
                               {num}
                           </button>
                       </li>
                        ))}
                        { Array.isArray(noticeList) &&
                            <button 
                                className={ NoticeCSS.pagingBtn }
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

export default Notice;