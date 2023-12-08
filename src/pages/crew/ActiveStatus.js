import {NavLink} from "react-router-dom";
import React from "react";
import CrewCSS from "./CrewCommon.module.css";
import ActiveCSS from "./ActiveStatus.module.css";


function activeStatus () {
    return(

        <div>
            <div>
                <ul>
                    <li><NavLink to="/main/crewMain" className={CrewCSS.crewPage}>크루 메인 페이지</NavLink></li>
                    <li><NavLink to="/main/crewCertification" className={CrewCSS.crewPage}>인증게시판</NavLink></li>
                    <li><NavLink to="/main/activeStatus" className={`${CrewCSS.crewPage} ${ActiveCSS.activeStatus}`}>활동현황</NavLink></li>
                </ul>
            </div>
            <hr/>
            활동현황
        </div>
    );
}

export default activeStatus;