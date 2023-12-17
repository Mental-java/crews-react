import {useState} from "react";
import CSS from "./CommnetImageModal.module.css"

function CommentImageModal({commentImageUrl, setCommentImageModal}){


    return(
        <div className={CSS.modal}>
            <div className={CSS.modalContainer}>
                <div className={CSS.main}>
                    <div
                        className={CSS.closeBtn}
                        onClick={() => setCommentImageModal(false)}
                    > X </div>
                    <div className={CSS.imgDiv}>
                        <img
                            src={commentImageUrl}
                            className={CSS.img}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CommentImageModal;