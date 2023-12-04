import MyCalendarCSS from '../Calendar/MyCalendar.module.css';
import {
    callMyCalendarListAPI
} from '../../apis/MyCalendarAPICalls';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

function MyCalendar() {
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
            />
        </div>
    );
}


export default MyCalendar;