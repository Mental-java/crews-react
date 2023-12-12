import {NavLink, useParams} from "react-router-dom";
import React from "react";
import CrewCSS from "./CrewCommon.module.css";
import ActiveCSS from "./ActiveStatus.module.css";


function ActiveStatus () {

    const params = useParams();

    return(

        <div>
            <div>
                <ul>
                    <li><NavLink to={`/main/crewmain/${params.crewId}`} className={CrewCSS.crewPage}>크루 메인 페이지</NavLink></li>
                    <li><NavLink to={`/main/crewcertification/${params.crewId}`} className={CrewCSS.crewPage}>인증게시판</NavLink></li>
                    <li><NavLink to={`/main/activestatus/${params.crewId}`} className={`${CrewCSS.crewPage} ${ActiveCSS.activeStatus}`}>활동현황</NavLink></li>
                </ul>
            </div>
            <hr className={CrewCSS.crewLine}/>
            활동현황
        </div>
    );
}

export default ActiveStatus;