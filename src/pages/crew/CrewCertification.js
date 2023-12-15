import {Link, NavLink, useParams} from "react-router-dom";
import React, {useEffect,useState} from "react";
import CrewCSS from "./CrewCommon.module.css";
import CertificationCSS from "./CrewCertification.module.css";
import {useDispatch, useSelector} from "react-redux";
import styles from '../../pages/crewSearch/CrewSearch.module.css';
import {
    callCrewSearchDetailAPI
} from "../../apis/CrewSearchAPICalls";
import {
    callCrewPostAPI
} from "../../apis/CrewPageAPICalls";
import CertificationPostHandler from "../../component/pages/CertificationPostHandler";

function CrewCertification () {

    const dispatch = useDispatch();
    const params = useParams();


    const crewCertifications = useSelector(state => state.crewPageReducer);
    const crewCertificationList = crewCertifications.data;

    const crew = useSelector(state => state.crewSearchListReducer);

    const pageInfo = crewCertifications.pageInfo;
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
            dispatch(callCrewSearchDetailAPI({
                crewId: params.crewId
            }));
            dispatch(callCrewPostAPI({
                currentPage: currentPage,
                crewId: params.crewId
            }));
        }
        ,[currentPage]
    );

    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const date = today.getDate();

    const formattedDate = `${year}-${month < 10 ? `0${month}` : month}-${date < 10 ? `0${date}` : date}`;

    return(

        <div>
            <div>
                <ul>
                    <li><NavLink to={`/main/crewmain/${params.crewId}`} className={CrewCSS.crewPage}>{crew.crewName}</NavLink></li>
                    <li><NavLink to={`/main/crewcertification/${params.crewId}`} className={`${CrewCSS.crewPage} ${CertificationCSS.certification}`}>인증게시판</NavLink></li>
                    <li><NavLink to={`/main/activestatus/${params.crewId}`} className={CrewCSS.crewPage}>활동현황</NavLink></li>
                </ul>
            </div>
            <hr className={CrewCSS.crewLine}/>

            <div className={CertificationCSS.bar}>
                <p className={CertificationCSS.date}>오늘 날짜 : {formattedDate}</p>
                <Link to="/main/writePost" className={CertificationCSS.writeButton}>
                    글쓰기
                </Link>
            </div>
            <hr/>

            <div>
                <table>
                    <thead>
                    <tr>
                        <th>제목</th>
                        <th>내용</th>
                        <th>작성일</th>
                    </tr>
                    </thead>
                    <tbody>
                    {Array.isArray(crewCertificationList) && crewCertificationList.map(
                                (crewCertifications) => (
                                    <CertificationPostHandler key={ crewCertifications.postId } postInfo= {crewCertifications}/>                            
                                )
                            )}
                    </tbody>
                    <div className={styles.btnDiv}>
                {Array.isArray(crewCertificationList) &&
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
                { Array.isArray(crewCertificationList) &&
                    <button
                        onClick={() => setCurrentPage(currentPage + 1)}
                        disabled={currentPage === pageInfo.pageEnd || pageInfo.total ==0}
                        className={styles.pagingBtn}
                    >
                        &gt;
                    </button>
                }
            </div>
                </table>
            </div>


        </div>
    );
}

export default CrewCertification;