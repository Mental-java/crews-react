// AdminNoticeDetail.js
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { callAdminNoticeDeleteAPI, callAdminNoticeDetailAPI } from "../../../apis/AdminAPICalls";
import AdminNoticeCSS from "./AdminNotice.module.css";
import AdminNoticeDetailCSS from "./AdminNoticeDetail.module.css"; // 추가된 부분

function AdminNoticeDetail() {
    const dispatch = useDispatch();
    const notice = useSelector(state => state.noticeReducer);
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(callAdminNoticeDetailAPI({
            noticeId: params.noticeId
        }));
    }, []);

    const handleDelete = () => {
        const isConfirmed = window.confirm('정말로 삭제하시겠습니까?');
        if (isConfirmed) {
            dispatch(
                callAdminNoticeDeleteAPI({
                    noticeId: params.noticeId,
                })
            ).then(() => {
                window.history.back();
            });
        }
    };

    return (
        <div className={AdminNoticeDetailCSS.adminNoticeDetailContainer}>
            <div>
                <table className={AdminNoticeDetailCSS.noticeTable}>
                    <tr>
                        <th width="700">{notice.noticeTitle}</th>
                        <th width="800">{notice.noticeContnet}</th>
                        <th width="200">{notice.noticeDate}</th>
                    </tr>
                </table>
            </div>
            <div className={AdminNoticeDetailCSS.noticeContent}>
                <p>{notice.noticeContent}</p>
            </div>
            <div className={AdminNoticeDetailCSS.actionButtons}>
                <button onClick={() => navigate(`/admin/notice/update/${params.noticeId}`)}>수정하기</button>
                <button onClick={handleDelete}>삭제하기</button>
            </div>
            <div>
                <button onClick={() => navigate("/admin/notice")} className={AdminNoticeCSS.createButton}>
                    돌아가기
                </button>
            </div>
        </div>
    );
}

export default AdminNoticeDetail;
