import {NavLink, useParams} from "react-router-dom";
import { useSelector, useDispatch} from "react-redux";
import React, { useState, useEffect } from 'react';
import CrewCSS from "./CrewCommon.module.css";
import ActiveCSS from "./ActiveStatus.module.css";

import {
    callCrewSearchDetailAPI
} from "../../apis/CrewSearchAPICalls";

function ActiveStatus () {

    const dispatch = useDispatch();
    const params = useParams();

    const crew = useSelector(state => state.crewSearchListReducer);

    useEffect(
        () => {
            dispatch(callCrewSearchDetailAPI({
                crewId: params.crewId
            }));
        }
        , []
    );

    return(

        <div>
            <div>
                <ul>
                    <li><NavLink to={`/main/crewmain/${params.crewId}`} className={CrewCSS.crewPage}>{crew.crewName}</NavLink></li>
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