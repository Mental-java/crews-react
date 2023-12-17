import { callAdminNoticeCreateAPI } from "../../../apis/AdminAPICalls";
import { useState } from "react";
import { useDispatch } from "react-redux";

function AdminNoticeCreate() {
    const [noticeTitle, setNoticeTitle] = useState("");
    const [noticeContent, setNoticeContent] = useState("");
    const dispatch = useDispatch();

    const handleCreateNotice = async () => {
        if (noticeTitle.trim() === "" || noticeContent.trim() === "") {
            alert("제목과 내용을 입력해주세요!");
        } else {
            const isConfirmed = window.confirm("공지를 등록하시겠습니까?");

            if (isConfirmed) {
                await dispatch(
                    callAdminNoticeCreateAPI({
                        form: {
                            noticeTitle: noticeTitle,
                            noticeContent: noticeContent,
                        },
                    })
                );
                setNoticeTitle("");
                setNoticeContent("");

                alert("공지가 등록되었습니다.");
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
                            <button onClick={handleCreateNotice}>등록하기</button>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default AdminNoticeCreate;
