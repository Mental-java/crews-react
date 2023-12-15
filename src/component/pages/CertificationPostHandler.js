function CertificationPostHandler({ postInfo: {postTitle, postContent, postDate}}){
    return(
        <>
            <tr>
                <td>{postTitle}</td>
                <td>{postContent}</td>
                <td>{postDate}</td>
            </tr>
        </>
    )
}

export default CertificationPostHandler;