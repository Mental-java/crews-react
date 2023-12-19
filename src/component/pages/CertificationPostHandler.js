import { useNavigate } from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import styles from "../../pages/crew/CrewCertification.module.css";

import {
    callDeleteCertificationPostAPI
} from "../../apis/CrewPageAPICalls";

function CertificationPostHandler({ postInfo: {postId,postTitle, postContent, postDate, crewId}}){

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const login = useSelector(state => state.LoginReducer);
    const loginUser = login.userData;

    const onClickDeletePostHandler = () => {

        if (crewId.captain.userId === loginUser.data.userId){
            dispatch(callDeleteCertificationPostAPI({
                postId: postId
            }));
            alert('인증게시글을 삭제하였습니다.');
            window.location.reload();
        } else {
            alert('캡틴만 삭제할 수 있습니다.');
            return;
        }

    }

    const onClickCertificationHandler = (postId) => {
        navigate(`/main/crewcertification/${postId}/detail`, {replace: false });
    }

    return(

        <>
            <tr className={styles.certificationTable}>
                <td onClick={ () => onClickCertificationHandler(postId) }>{postTitle}</td>
                <td onClick={ () => onClickCertificationHandler(postId) }>{postContent}</td>
                <td onClick={ () => onClickCertificationHandler(postId) }>{postDate}</td>
                <td>
                    <div
                        className={styles.deleteBtn}
                        onClick={() => onClickDeletePostHandler()}
                    >
                        삭제
                    </div>
                </td>
            </tr>
        </>
    )
}

export default CertificationPostHandler;