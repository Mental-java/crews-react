import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import {callAdminNoticeDetailAPI} from "../../../apis/AdminAPICalls";


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

    return (
        <>
            <div>
                <div>
                    <table>
                        <tr>
                            <th width="700">{notice.noticeTitle}</th>
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
                <p>목록으로 돌아가기</p>
            </div>
        </>
    )

}

export default AdminNoticeDetail;