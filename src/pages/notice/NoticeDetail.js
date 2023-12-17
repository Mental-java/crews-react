import {
    callNoticeDetailAPI
} from '../../apis/NoticeAPICalls'
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import NoticeDetailCSS from "./NoticeDetail.module.css";

function NoticeDetail(){

    const dispatch = useDispatch();
    const notice = useSelector(state => state.noticeReducer);
    const params = useParams();

    const handleBackButton = () => {
        window.history.back();
    }

    useEffect(
        () => {
            dispatch(callNoticeDetailAPI({
                noticeId : params.noticeId
            }));
        }
        ,[]
    );

    return (
        <>
           <div className={NoticeDetailCSS.noticemain}>
                <div className={NoticeDetailCSS.informationbar}>
                    <table>
                            <tr>
                                <th className={NoticeDetailCSS.barcontent} width="700">{notice.noticeTitle}</th>
                                {/* <th className={NoticeDetailCSS.barcontent} width="200">{notice.adminId.adminId}</th> */}
                                <th className={NoticeDetailCSS.barcontent} width="200">{notice.noticeDate}</th>
                            </tr>
                            
                       
                    </table>
                </div>
                <div className={NoticeDetailCSS.noticecontent}>
                    <p>
                        {notice.noticeContent}
                    </p>
                </div>
            </div>
            <div className={NoticeDetailCSS.backpage}>
                <button onClick={handleBackButton}>목록으로 돌아가기</button>
            </div>  
        </>
    )

}

export default NoticeDetail;