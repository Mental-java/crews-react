import {Link, NavLink, useParams} from "react-router-dom";
import React, {useEffect} from "react";
import CrewCSS from "./CrewCommon.module.css";
import CertificationCSS from "./CrewCertification.module.css";
import {useDispatch, useSelector} from "react-redux";

import {
    callCrewSearchDetailAPI
} from "../../apis/CrewSearchAPICalls";

function CrewCertification () {

    const dispatch = useDispatch();
    const params = useParams();

    const crewCertifications = useSelector(state => state.crewSearchListReducer);
    const crewCertificationList = crewCertifications;

    const crew = useSelector(state => state.crewSearchListReducer);

    useEffect(
        () => {
            dispatch(callCrewSearchDetailAPI({
                crewId: params.crewId
            }));
        }
        , []
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
                    {Array.isArray(crewCertificationList) && crewCertificationList.map((certification, index) => (
                        <tr key={index}>
                            <td>{certification.title}</td>
                            <td>{certification.content}</td>
                            <td>{certification.date}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>


        </div>
    );
}

export default CrewCertification;