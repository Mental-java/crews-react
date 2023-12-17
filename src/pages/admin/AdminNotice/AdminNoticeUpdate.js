import { callAdminNoticeUpdateAPI } from "../../../apis/AdminAPICalls";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

function AdminNoticeUpdate() {
    const [noticeTitle, setNoticeTitle] = useState("");
    const [noticeContent, setNoticeContent] = useState("");
    const dispatch = useDispatch();
    const { noticeId } = useParams();

    const handleUpdateNotice = async () => {
        if (noticeTitle.trim() === "" || noticeContent.trim() === "") {
            alert("제목과 내용을 입력해주세요!");
        } else {
            const isConfirmed = window.confirm("공지를 수정하시겠습니까?");

            if (isConfirmed) {
                await dispatch(
                    callAdminNoticeUpdateAPI({
                        noticeId: noticeId,
                        form: {
                            noticeTitle: noticeTitle,
                            noticeContent: noticeContent,
                        },
                    })
                );
                setNoticeTitle("");
                setNoticeContent("");

                alert("공지가 수정되었습니다.");
                window.history.back();
            }
        }
    };

    return (
        <div>
            <div>
                <table>
                    <tbody>
                    <tr>
                        <td>제목:</td>
                        <td>
                            <input
                                type="text"
                                value={noticeTitle}
                                onChange={(e) => setNoticeTitle(e.target.value)}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>내용:</td>
                        <td>
                            <textarea
                                value={noticeContent}
                                onChange={(e) => setNoticeContent(e.target.value)}
                            ></textarea>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="2">
                            <button onClick={handleUpdateNotice}>수정하기</button>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default AdminNoticeUpdate;
