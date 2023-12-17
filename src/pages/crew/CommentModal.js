import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "react-modal"; // react-modal 라이브러리 import
import { callCommentRegistAPI } from "../../apis/CertificationCommentAPICalls";
import CommentModalCSS from './CommentModal.module.css';

Modal.setAppElement("#root"); // 모달을 사용할 컴포넌트의 루트 엘리먼트 지정

function CommentModal({ setCommentModal, postId }) {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.LoginReducer);
    const loginUser = user.userData;
    const [image, setImage] = useState(null);
    const [imageUrl, setImageUrl] = useState();
    const imageInput = useRef();
    const [form, setForm] = useState({
        commentContent: "",
        userId: { userId: loginUser.data.userId },
        postId: { postId: postId },
    });

    useEffect(() => {
        if (image) {
            const fileReader = new FileReader();
            fileReader.onload = (e) => {
                const { result } = e.target;
                if (result) {
                    setImageUrl(result);
                }
            };
            fileReader.readAsDataURL(image);
        }
    }, [image]);

    const onChangeImageUpload = (e) => {
        const image = e.target.files[0];
        setImage(image);
    };

    const onClickImageUpload = () => {
        imageInput.current.click();
    };

    const onChangeHandler = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const onClickCommentRegistHandler = () => {
        if (image) {
            form.commentImage = image;
        }
        dispatch(callCommentRegistAPI({ form }));
        alert("등록되었습니다.");
        setCommentModal(false);
        window.location.reload();
    };

    return (
        <Modal
            isOpen={true}
            onRequestClose={() => setCommentModal(false)}
            className={CommentModalCSS.modalStyle}
        >
            <div className={CommentModalCSS.modalContainer}>
                <div className={CommentModalCSS.buttonContainer}>
                    <button className={CommentModalCSS.registerButton} onClick={onClickCommentRegistHandler}>
                        댓글등록
                    </button>
                    <button className={CommentModalCSS.returnButton} onClick={() => setCommentModal(false)}>
                        돌아가기
                    </button>
                </div>
                <div className={CommentModalCSS.imageContainer}>
                    <div>
                        {imageUrl && <img src={imageUrl} alt="image" className={CommentModalCSS.imagePreview} />}
                        <input
                            style={{ display: "none" }}
                            type="file"
                            name="commentImage"
                            accept="image/jpg,image/png,image/jpeg,image/gif"
                            onChange={onChangeImageUpload}
                            ref={imageInput}
                        />
                        <button className={CommentModalCSS.uploadButton} onClick={onClickImageUpload}>이미지 업로드</button>
                    </div>
                </div>
                <div className={CommentModalCSS.inputContainer}>
                    <table>
                        <tbody>
                        <tr>
                            <td>
                                <label>댓글 내용</label>
                            </td>
                            <td>
                                <input
                                    className={CommentModalCSS.inputField}
                                    name="commentContent"
                                    placeholder="댓글내용을 입력하세요"
                                    type="text"
                                    onChange={onChangeHandler}
                                />
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </Modal>
    );
}

export default CommentModal;
