import {Link, NavLink, useParams} from "react-router-dom";
import React from "react";
import CrewCSS from "./CrewCommon.module.css";
import CertificationCSS from "./CrewCertification.module.css";
import NoticeHandler from "../../component/pages/NoticeHandler";
import NoticeCSS from "../notice/Notice.module.css";

function CrewCertification () {

    const params = useParams();

    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const date = today.getDate();

    const formattedDate = `${year}-${month < 10 ? `0${month}` : month}-${date < 10 ? `0${date}` : date}`;

    return(

        <div>
            <div>
                <ul>
                    <li><NavLink to={`/main/crewmain/${params.crewId}`} className={CrewCSS.crewPage}>크루 메인 페이지</NavLink></li>
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

            </div>

        </div>
    );
}

export default CrewCertification;