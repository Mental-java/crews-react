import React, { useState, useEffect } from 'react';
import MyCalendarCSS from '../Calendar/MyCalendar.module.css';
import { callMyCalendarListAPI } from '../../apis/MyCalendarAPICalls';
import { useDispatch, useSelector } from 'react-redux';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import MyModal from "./MyModal";

function MyCalendar() {
    const [modalIsOpen, setModalIsOpen] = useState(false); // 모달의 상태를 설정하는 state
    const dispatch = useDispatch();
    const mycalendar = useSelector((state) => state.myCalendarReducer);
    const myCalendarList = mycalendar.data ? mycalendar.data.map((calendar) => ({
        end: calendar.endDate,
        start: calendar.startDate,
        title: calendar.title
    })) : [];
    console.log(myCalendarList)

    useEffect(() => {
        dispatch(callMyCalendarListAPI());
    }, []);

    return (
        <div className={MyCalendarCSS.MyCalendarContainer}>
            <FullCalendar
                firstDay={1}
                initialView="dayGridMonth"
                plugins={[dayGridPlugin]}
                events={myCalendarList}
                height={'95vh'}
                editable={true}
                eventClick={function(info) { // 이벤트 클릭 시 모달을 띄우기 위한 함수
                    setModalIsOpen(true);
                }}
            />
            <MyModal
                isOpen={modalIsOpen}
                onRequestClose={() => setModalIsOpen(false)}
            />
        </div>
    );
}

export default MyCalendar;
