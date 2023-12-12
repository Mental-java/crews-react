import React, { useState, useEffect } from 'react';
import {useNavigate, useParams} from "react-router-dom";
import { useSelector, useDispatch} from "react-redux";
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import {NavLink} from "react-router-dom";
import CrewCSS from "./CrewCommon.module.css";
import CrewMainCSS from "./CrewMain.module.css";

import {
    callCrewIntroListAPI
} from "../../apis/CrewIntroAPICalls";

function CrewMain() {
    // const crewcalendar = useSelector((state) => state.myCalendarReducer);
    // const crewCalendarList = crewcalendar.data;
    //
    // const events = crewCalendarList.map(event => ({
    //     title: event.title,
    //     start: event.start,
    //     end: event.end
    // }));

    const dispatch = useDispatch();
    const params = useParams();

    const crewIntro = useSelector(state => state.crewIntroListReducer);

    const [introModal, setIntroModal] = useState(false);
    const [introCrewId, setIntroCrewId] = useState(0);
    const [intro, setIntro] = useState('');

    useEffect(
        () => {
            dispatch(callCrewIntroListAPI({
                crewId: params.crewId,
                crewIntro: params.crewIntro
            }));
        }
        , []
    );

    const onClickIntroEditModalHandler = (crewId, crewIntro) => {
        setIntroModal(true);
        setIntroCrewId(crewId);
        setIntro(crewIntro);
    }

    return (
        <div>
            <div>
                <ul>
                    <li><NavLink to="/main/crewMain" className={`${CrewCSS.crewPage} ${CrewMainCSS.main}`}>크루 메인 페이지</NavLink></li>
                    <li><NavLink to="/main/crewCertification" className={CrewCSS.crewPage}>인증게시판</NavLink></li>
                    <li><NavLink to="/main/activeStatus" className={CrewCSS.crewPage}>활동현황</NavLink></li>
                </ul>
            </div>
            <hr className={CrewCSS.crewLine}/>
            <FullCalendar
                firstDay={1}
                initialView="dayGridMonth"
                plugins={[dayGridPlugin]}

                height={'75vh'}
                eventBackgroundColor={'gray'}
                eventBorderColor={'lightgray'}
                // events={events}
            />
            <div className={CrewMainCSS.introbox}>
                <p>소개글 : {crewIntro}</p>

            </div>
        </div>
    );
}

export default CrewMain;
