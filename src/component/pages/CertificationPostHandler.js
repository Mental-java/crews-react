import { useNavigate } from "react-router-dom";

function CertificationPostHandler({ postInfo: {postId,postTitle, postContent, postDate}}){

    const navigate = useNavigate();
    const onClickCertificationHandler = (postId) => {
        navigate(`/main/crewcertification/${postId}/detail`, {replace: false });
    }

    return(

        <>
            <tr
                onClick={ () => onClickCertificationHandler(postId) }
            >
                <td>{postTitle}</td>
                <td>{postContent}</td>
                <td>{postDate}</td>
            </tr>
        </>
    )
}

export default CertificationPostHandler;