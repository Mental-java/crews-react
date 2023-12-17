import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
    callCertificationPostAPI
} from "../../apis/CrewPageAPICalls";
import styles from '../../pages/crewSearch/CrewSearch.module.css';
import {Link, NavLink} from "react-router-dom";
import CrewCSS from "./CrewCommon.module.css";
import CertificationCSS from "./CrewCertification.module.css";
import { useState } from "react";
import {
    callCommentAPI
} from "../../apis/CertificationCommentAPICalls";
import CommentHandler from "../../component/pages/CommentHandler";
import CommentModal from "../crew/CommentModal";

function CertificationDetail(){

    const dispatch = useDispatch();
    const certifications = useSelector(state => state.crewPageReducer);
    const params = useParams();
    const crew = useSelector(state => state.crewSearchListReducer);

    const comment = useSelector(state => state.commentReducer);
    const commentList = comment.data;
    const [commentModal,setCommentModal] = useState(false);

    console.log('comment =====', commentList);
    console.log('crew ======', crew);

    const pageInfo = comment.pageInfo;
    const [start, setStart] = useState(0);
    const [currentPage,setCurrentPage] = useState(1);
    const [pageEnd, setPageEnd] = useState(1);

    const pageNumber = [];

    if(pageInfo){
        for(let i =1; i <= pageInfo.pageEnd; i++){
            pageNumber.push(i);
        }
    }

    useEffect(
        () => {
            setStart((currentPage - 1)*5);
            dispatch(callCertificationPostAPI({
                postId: params.postId
            }));
            dispatch(callCommentAPI({
                currentPage: currentPage,
                postId: params.postId
            }))
        }
        ,[currentPage]
    )

    return(
        <>
            <div>
            <div>
            { commentModal ? <CommentModal 
                     setCommentModal = { setCommentModal }
                     postId = {params.postId}/> : null }
                <ul>
                    <li><NavLink to={`/main/crewmain/${params.crewId}`} className={CrewCSS.crewPage}>{crew.crewName}</NavLink></li>
                    <li><NavLink to={`/main/crewcertification/${params.crewId}`} className={`${CrewCSS.crewPage} ${CertificationCSS.certification}`}>인증게시판</NavLink></li>
                    <li><NavLink to={`/main/activestatus/${params.crewId}`} className={CrewCSS.crewPage}>활동현황</NavLink></li>
                </ul>
            </div>
            <hr className={CrewCSS.crewLine}/>
                <div> 
                    <ul className={CertificationCSS.detailTitle}>
                        <div>{certifications.postTitle}</div>
                        <div>{certifications.postContent}</div>
                    </ul>
                </div>

                <div>
                    {Array.isArray(commentList) && commentList.map(
                        (comment) => (
                            <CommentHandler key = {comment.commentId} commentInfo = {comment}/>
                        )
                    )}

                </div>
                <div className={styles.btnMain}>
            <div className={styles.btnDiv}>
                {Array.isArray(commentList) &&
                    <button
                        onClick={() => setCurrentPage(currentPage - 1)}
                        disabled={currentPage === 1}
                        className={styles.pagingBtn}
                    >
                        &lt;
                    </button>
                }
                {pageNumber.map((num) => (
                    <li key={num} onClick={() => setCurrentPage(num)}>
                        <button
                            style={ currentPage === num ? {background : '#000928'} : null}
                            className={styles.pagingBtn}
                        >
                            {num}
                        </button>
                    </li>
                ))}
                { Array.isArray(commentList) &&
                    <button
                        onClick={() => setCurrentPage(currentPage + 1)}
                        disabled={currentPage === pageInfo.pageEnd || pageInfo.total ==0}
                        className={styles.pagingBtn}
                    >
                        &gt;
                    </button>
                }
            </div>

                <button
                    onClick={() => setCommentModal(true)}>
                        댓글쓰기
                    </button>
        </div>
            </div>
        </>
    )
}

export default CertificationDetail;