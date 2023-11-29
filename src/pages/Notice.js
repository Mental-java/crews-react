import NoticeCSS from "./Notice.module.css";
import {
    callNoticeListAPI
} from '../apis/NoticeAPICalls'
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

function Notice() {

    const dispatch = useDispatch();
    const notice = useSelector(state => state.noticeReducer);
    const noticeList = notice.data;

    useEffect(
        () => {
            dispatch(callNoticeListAPI());
        }
        , []
    );



    return (

        <div className={NoticeCSS.noticeMain}>
            <div className={NoticeCSS.informationBar}>
                <table>
                    <thead>
                    <tr>
                        <th className={NoticeCSS.barContent} width="600">제목</th>
                        <th className={NoticeCSS.barContent} width="200">작성자</th>
                        <th className={NoticeCSS.barContent} width="200">작성일</th>
                    </tr>
                    </thead>
                    <tbody>
                    {Array.isArray(noticeList) && noticeList.map(
                        (notice) => (
                            <tr
                                key={notice.noticeId}
                            >
                                <td>{notice.noticeTitle}</td>
                                <td>{notice.adminId.adminId == 'admin1' ? '관리자' : notice.adminId.adminId}</td>
                                <td>{notice.noticeDate}</td>
                            </tr>
                        )
                    )}
                    </tbody>
                </table>
            </div>
        </div>

    )
}

export default Notice;