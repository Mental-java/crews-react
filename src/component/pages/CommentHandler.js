
function CommentHandler({ commentInfo: { userId, commentContent, writeDate}}){
    return(
        <>
       
           
            <tr>
                    <td>{userId.nickname}</td>
                    <td>{commentContent}</td>
                    <td>{writeDate}</td>
            </tr>
        </>
    )
}

export default CommentHandler;