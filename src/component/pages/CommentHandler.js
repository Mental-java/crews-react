import CertificationDetailCSS from "../../pages/crew/CertificationDetail.module.css"
import {useState} from "react";
import CommentImageModal from "../../pages/crew/CommentImageModal";

function CommentHandler({ commentInfo: { userId, commentContent, writeDate, commentImageUrl}}){

    const [commentImageModal, setCommentImageModal] = useState(false);

    const onClickCommentImageModalHandler = () =>{
        setCommentImageModal(true);
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
                    <div
                        className={CertificationDetailCSS.imageDiv}
                        onClick={() => onClickCommentImageModalHandler()}
                    >
                        <div className={CertificationDetailCSS.image}>
                            사진 보기
                        </div>
                    </div>
                </td>
            </tr>
        </>
    )
}

export default CommentHandler;