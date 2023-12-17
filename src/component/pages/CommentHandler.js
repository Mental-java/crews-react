
import styles from '../../pages/crew/CrewCertification.module.css';


function CommentHandler({ commentInfo: { userId, commentContent, writeDate}}){
    return(
        <>
            <tr className={styles.commentTitle}>

                    <td>{userId.nickname}</td>
                    <td>{commentContent}</td>
                    <td>{writeDate}</td>
            </tr>
        </>
    )
}

export default CommentHandler;