import { useNavigate } from "react-router-dom";
import NoticeCSS from "../../pages/notice/Notice.module.css";

function NoticeHandler ({ notice : {noticeId, noticeTitle, noticeContent, noticeDate, adminId}}){

    const navigate = useNavigate();

    const onClickNoticeHandler = (noticeId) => {
        navigate(`/main/noticedetail/${noticeId}`, { replace: false });
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

export default NoticeHandler;