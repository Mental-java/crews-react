import CertificationDetailCSS from "../../pages/crew/CertificationDetail.module.css"

function CommentHandler({ commentInfo: { userId, commentContent, writeDate}}){
    return(
        <>
            <tr>
                <div className={CertificationDetailCSS.trDiv}>
                    <td>{userId.nickname}</td>
                    <td>{commentContent}</td>
                    <td>{writeDate}</td>
                </div>
            </tr>
        </>
    )
}

export default CommentHandler;