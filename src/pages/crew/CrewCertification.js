import {useNavigate, NavLink, useParams} from "react-router-dom";
import React, {useEffect,useState} from "react";
import CrewCSS from "./CrewCommon.module.css";
import CertificationCSS from "./CrewCertification.module.css";
import {useDispatch, useSelector} from "react-redux";
import styles from './CrewCertification.module.css';
import btnStyles from '../crewSearch/CrewSearch.module.css';

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
    const navigate = useNavigate();

    const crewCertifications = useSelector(state => state.crewPageReducer);
    const crewCertificationList = crewCertifications ? crewCertifications.data : null;

    const crew = useSelector(state => state.crewSearchListReducer);

    const login = useSelector(state => state.LoginReducer);
    const loginUser = login.userData;

    const pageInfo = crewCertifications ? crewCertifications.pageInfo : null;
    const [start, setStart] = useState(0);
    const [currentPage,setCurrentPage] = useState(1);
    const [pageEnd, setPageEnd] = useState(1);
    const pageNumber = [];

    console.log('crewCertificationList ==== ', crewCertificationList);

    const crewIdInfo = params.crewId;

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

    const onClickRegistCertificationPostHandler = (captain) => {

        if(captain === loginUser.data.userId) {
            navigate(`/main/writePost/${crewIdInfo}`);
        } else {
            alert('캡틴만 등록할 수 있습니다.');
            return;
        }

    }

    return(

        <div>
            <div>
                <ul>
                    <li><NavLink to={`/main/crewmain/${crewIdInfo}`} className={CrewCSS.crewPage}>{crew.crewName}</NavLink></li>
                    <li><NavLink to={`/main/crewcertification/${crewIdInfo}`} className={`${CrewCSS.crewPage} ${CertificationCSS.certification}`}>인증게시판</NavLink></li>
                    <li><NavLink to={`/main/activestatus/${crewIdInfo}`} className={CrewCSS.crewPage}>활동현황</NavLink></li>
                </ul>
            </div>
            <hr className={CrewCSS.crewLine}/>

            <div className={CertificationCSS.bar}>
                <p className={CertificationCSS.date}>오늘 날짜 : {formattedDate}</p>
                <div
                    className={CertificationCSS.writeButton}
                    onClick={() => onClickRegistCertificationPostHandler(crew.captain.userId)}
                >
                    글쓰기
                </div>
            </div>
            <hr/>

            <div className={CertificationCSS.tableDiv}>
                <table>
                    <thead>
                    <tr className={CertificationCSS.thead}>
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
                </table>
            </div>
            <div className={btnStyles.btnMain}>
                <div className={btnStyles.btnDiv2}>
                    {Array.isArray(crewCertificationList) &&
                        <button
                            onClick={() => setCurrentPage(currentPage - 1)}
                            disabled={currentPage === 1}
                            className={btnStyles.pagingBtn}
                        >
                            &lt;
                        </button>
                    }
                    {pageNumber.map((num) => (
                        <li key={num} onClick={() => setCurrentPage(num)}>
                            <button
                                style={ currentPage === num ? {background : '#000928'} : null}
                                className={btnStyles.pagingBtn}
                            >
                                {num}
                            </button>
                        </li>
                    ))}
                    { Array.isArray(crewCertificationList) &&
                        <button
                            onClick={() => setCurrentPage(currentPage + 1)}
                            disabled={currentPage === pageInfo.pageEnd || pageInfo.total ==0}
                            className={btnStyles.pagingBtn}
                        >
                            &gt;
                        </button>
                    }
                </div>
            </div>


        </div>
    );
}

export default CrewCertification;