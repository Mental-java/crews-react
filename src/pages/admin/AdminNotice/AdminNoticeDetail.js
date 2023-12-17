import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {NavLink, useParams} from "react-router-dom";
import {callAdminNoticeDeleteAPI, callAdminNoticeDetailAPI} from "../../../apis/AdminAPICalls";


function AdminNoticeDetail(){

    const dispatch = useDispatch();
    const notice = useSelector(state => state.noticeReducer);
    const params = useParams();

    useEffect(
        () => {
            dispatch(callAdminNoticeDetailAPI({
                noticeId : params.noticeId
            }));
        }
        ,[]
    );

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
        <>
            <div>
                <div>
                    <table>
                        <tr>
                            <th width="700">{notice.noticeTitle}</th>
                            <th width="800">{notice.noticeContnet}</th>
                            {/* <th className={NoticeDetailCSS.barcontent} width="200">{notice.adminId.adminId}</th> */}
                            <th width="200">{notice.noticeDate}</th>
                        </tr>


                    </table>
                </div>
                <div>
                    <p>
                        {notice.noticeContent}
                    </p>
                </div>
            </div>
            <div>
                <button>수정하기</button>
                <button onClick={handleDelete}>삭제하기</button>
            </div>
            <div>
                <NavLink to={"/admin/notice"}>돌아가기</NavLink>
            </div>
        </>
    )

}

export default AdminNoticeDetail;