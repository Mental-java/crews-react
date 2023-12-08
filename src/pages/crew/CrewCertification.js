import {NavLink} from "react-router-dom";
import React from "react";
import CrewCSS from "./CrewCommon.module.css";
import CertificationCSS from "./CrewCertification.module.css";

function CrewCertification () {
    return(

        <div>
            <div>
                <ul>
                    <li><NavLink to="/main/crewMain" className={CrewCSS.crewPage}>크루 메인 페이지</NavLink></li>
                    <li><NavLink to="/main/crewCertification" className={`${CrewCSS.crewPage} ${CertificationCSS.certification}`}>인증게시판</NavLink></li>
                    <li><NavLink to="/main/activeStatus" className={CrewCSS.crewPage}>활동현황</NavLink></li>
                </ul>
            </div>
            <hr/>
            크루 인증게시판
        </div>
    );
}

export default CrewCertification;