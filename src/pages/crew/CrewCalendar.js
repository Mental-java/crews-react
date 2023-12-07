import React, { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import {NavLink} from "react-router-dom";
import CrewCSS from "./CrewCommon.module.css";

function CrewCalendar() {
    // const crewcalendar = useSelector((state) => state.myCalendarReducer);
    // const crewCalendarList = crewcalendar.data;
    //
    // const events = crewCalendarList.map(event => ({
    //     title: event.title,
    //     start: event.start,
    //     end: event.end
    // }));

    return (
        <div>
            <div>
                <ul>
                    <li><NavLink to="/main/crewCalendar" className={CrewCSS.mainLink}>크루 메인 페이지</NavLink></li>
                    <li><NavLink to="/main/crewCertification" className={CrewCSS.mainLink}>인증게시판</NavLink></li>
                    <li><NavLink to="/main/activeStatus" className={CrewCSS.mainLink}>활동현황</NavLink></li>
                </ul>
            </div>
            <hr/>
            <FullCalendar
                firstDay={1}
                initialView="dayGridMonth"
                plugins={[dayGridPlugin]}

                height={'95vh'}
                eventBackgroundColor={'gray'}
                eventBorderColor={'lightgray'}
                // events={events}
            />
        </div>
    );
}

export default CrewCalendar;
