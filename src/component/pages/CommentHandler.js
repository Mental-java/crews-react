import CertificationDetailCSS from "../../pages/crew/CertificationDetail.module.css"
import {useState} from "react";
import CommentImageModal from "../../pages/crew/CommentImageModal";
import {useSelector, useDispatch} from "react-redux";

import {
    callCommentDeleteAPI
} from "../../apis/CertificationCommentAPICalls";

function CommentHandler({ commentInfo: { userId, commentContent, writeDate, commentImageUrl, commentId}}){

    const dispatch = useDispatch();
    const login = useSelector(state => state.LoginReducer);
    const loginUser = login.userData;

    const [commentImageModal, setCommentImageModal] = useState(false);

    const onClickCommentImageModalHandler = () =>{
        setCommentImageModal(true);
    }

    const onClickDeleteCommentHandler = () => {

        if (userId.userId === loginUser.data.userId) {
            dispatch(callCommentDeleteAPI({
                commentId: commentId
            }));
            alert('댓글을 삭제합니다.');
        } else {
            alert('작성자가 아닙니다.');
            return;
        }

    }

    return(
        <>
            {commentImageModal ? <CommentImageModal commentImageUrl={commentImageUrl} setCommentImageModal={setCommentImageModal}/> : null}
            <tr>
                <td className={CertificationDetailCSS.tdDiv}>
                    <div className={CertificationDetailCSS.contentDiv}>
                        <div className={CertificationDetailCSS.nicknameDiv}>
                            {userId.nickname}&nbsp;&nbsp;&nbsp;{writeDate}
                        </div>
                        <div className={CertificationDetailCSS.commentDiv}>
                            {commentContent}
                        </div>
                    </div>
                    <div className={CertificationDetailCSS.imageDiv}>
                        <div
                            className={CertificationDetailCSS.image}
                            onClick={() => onClickCommentImageModalHandler()}
                        >
                            사진 보기
                        </div>
                        <div
                            className={CertificationDetailCSS.deleteBtn}
                            onClick={() => onClickDeleteCommentHandler()}
                        > 삭제 </div>
                    </div>
                </td>
            </tr>
        </>
    )
}

export default CommentHandler;