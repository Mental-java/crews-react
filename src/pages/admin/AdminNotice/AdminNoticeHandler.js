import { useNavigate } from "react-router-dom";
import NoticeCSS from "../../notice/Notice.module.css";

function AdminNoticeHandler ({ notice : {noticeId, noticeTitle, noticeContent, noticeDate, adminId}}){

    const navigate = useNavigate();

    const onClickNoticeHandler = (noticeId) => {
        navigate(`/admin/noticedetail/${noticeId}`, { replace: false });
    }

    return(
        <>
            <tr
                className= { NoticeCSS.noticeLists }
                onClick={ () => onClickNoticeHandler(noticeId) }
            >
                <td className= { NoticeCSS.noticeContent}>{noticeTitle}</td>
                <td className= { NoticeCSS.noticeContent}>{adminId.adminId == 'admin1' ? '관리자' : adminId.adminId}</td>
                <td className= { NoticeCSS.noticeContent}>{noticeDate}</td>
            </tr>
        </>
    )
}

export default AdminNoticeHandler;