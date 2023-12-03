import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import MyCalendarCSS from "../Calendar/MyCalendar.module.css";

function MyCalendar() {
        return (
            <div className={MyCalendarCSS.MyCalendarContainer}>
                <FullCalendar
                    firstDay={1}
                    defaultView="dayGridMonth"
                    plugins={[dayGridPlugin]}
                    events={[
                        { title: '크리스마스 이브', date: '2023-12-24' }, // 일정 이름이 길면 날짜 칸 밖으로 벗어남
                        { title: '크리스마스', date: '2023-12-25' }    //테스트용 이벤트
                    ]}
                    height={"95vh"}
                />
            </div>
    );
}

export default MyCalendar;
