import CertificationDetailCSS from "../../pages/crew/CertificationDetail.module.css"

function CommentHandler({ commentInfo: { userId, commentContent, writeDate, commentImageUrl}}){
    return(
        <div className={CertificationDetailCSS.scrollableWrapper}>
            <table>
                <tbody>
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
                            <img src={commentImageUrl} alt="Comment Image"/>
                        </div>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}

export default CommentHandler;