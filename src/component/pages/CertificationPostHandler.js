import { useNavigate } from "react-router-dom";
import styles from "../../component/pages/CrewSearchHandler.module.css";

function CertificationPostHandler({ postInfo: {postId,postTitle, postContent, postDate}}){

    const navigate = useNavigate();
    const onClickCertificationHandler = (postId) => {
        navigate(`/main/crewcertification/${postId}/detail`, {replace: false });
    }

    return(

        <>
            <tr
                onClick={ () => onClickCertificationHandler(postId) }
                className={styles.certificationTable}
            >
                <td>{postTitle}</td>
                <td>{postContent}</td>
                <td>{postDate}</td>
            </tr>
        </>
    )
}

export default CertificationPostHandler;