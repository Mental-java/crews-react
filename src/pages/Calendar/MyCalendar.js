import React, { useState, useEffect } from 'react';
import MyCalendarCSS from '../Calendar/MyCalendar.module.css';
import { callMyCalendarListAPI } from '../../apis/MyCalendarAPICalls';
import { useDispatch, useSelector } from 'react-redux';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import MyModal from "./MyModal";

function MyCalendar() {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState(null);
    const dispatch = useDispatch();
    const mycalendar = useSelector((state) => state.myCalendarReducer);
    const myCalendarList = mycalendar.data;
    console.log(myCalendarList)

    useEffect(() => {
        dispatch(callMyCalendarListAPI());
    }, []);

    const handleEventClick = (info) => {
        setSelectedEvent(info.event);
        setModalIsOpen(true);
    };

    return (
        <div className={MyCalendarCSS.MyCalendarContainer}>
            <FullCalendar
                firstDay={1}
                initialView="dayGridMonth"
                plugins={[dayGridPlugin]}
                events={Array.isArray(myCalendarList)
                    ? myCalendarList.map((calendar) => ({
                        end: calendar.endDate,
                        start: calendar.startDate,
                        title: calendar.title,
                        extendedProps: {
                            content: calendar.calendarContent
                        }
                    }))
                    : []
                }
                height={'95vh'}
                editable={true}
                eventClick={handleEventClick}
                eventBackgroundColor={'gray'}
                eventBorderColor={'lightgray'}
            />
            {selectedEvent && (
                <MyModal
                    isOpen={modalIsOpen}
                    onRequestClose={() => setModalIsOpen(false)}
                    event={selectedEvent}
                />
            )}
        </div>
    );
}

export default MyCalendar;
