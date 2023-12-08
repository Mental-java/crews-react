import PostCSS from "./WritePost.module.css";

function writePost() {

    return(
        <div>
            <div>
                <p className={PostCSS.post}>게시글 작성</p>
            </div>
            <hr/>
            <div className="post-title">
                <p>제목</p>
                <input type="text" name="postTitle" required/>
            </div>
            <div className="post-content">
                <p>내용</p>
                <textarea required rows="15" cols="100"></textarea>
            </div>
            <div className={PostCSS.button}>
                등록
            </div>

        </div>
    );

}

export default writePost;