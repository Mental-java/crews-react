import React, { useState, useEffect } from 'react';
import MyCalendarCSS from '../Calendar/MyCalendar.module.css';
import { callMyCalendarListAPI } from '../../apis/MyCalendarAPICalls';
import { useDispatch, useSelector } from 'react-redux';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import MyModal from "./MyModal";
import AddEventModal from "./AddEventModal";

function MyCalendar() {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [addEventModalOpen, setAddEventModalOpen] = useState(false);
    const dispatch = useDispatch();
    const mycalendar = useSelector((state) => state.myCalendarReducer);
    const myCalendarList = mycalendar.data;

    const navBar = useSelector(state => state.LoginReducer);
    const userData = navBar.userData;

    useEffect(() => {
        dispatch(callMyCalendarListAPI({
            userId: userData.data.userId
        }));
    }, [dispatch, userData.data.userId]);

    const handleEventClick = (info) => {
        setSelectedEvent(info.event);
        setModalIsOpen(true);
    };

    const handleAddEventClick = () => {
        setAddEventModalOpen(true);
    };

    const handleAddEventModalClose = () => {
        setAddEventModalOpen(false);
    };

    return (
        <div className={MyCalendarCSS.MyCalendarContainer}>
            <FullCalendar
                firstDay={1}
                initialView="dayGridMonth"
                plugins={[dayGridPlugin]}
                events={Array.isArray(myCalendarList)
                    ? myCalendarList.map((calendar) => ({
                        id: calendar.userCalendarId, //해당 코드로 변경하면 일정 다수 조회 가능
                        //id: userData.data.userId, // 일정은 하나밖에 조회 안되지만 이벤트 수정 가능(DB상 같은 userId로 캘린더가 다수 존재시 마비)
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
                droppable={true}
                eventClick={handleEventClick}
                eventBackgroundColor={'gray'}
                eventBorderColor={'lightgray'}
                headerToolbar={{
                    right: 'myCustomButton,today,prev,next',
                }}
                customButtons={{
                    myCustomButton: {
                        text: '이벤트 생성',
                        click(ev, element) {
                            handleAddEventClick();
                        },
                    },
                }}
            />

            {selectedEvent && (
                <MyModal
                    isOpen={modalIsOpen}
                    onRequestClose={() => setModalIsOpen(false)}
                    event={selectedEvent}
                    onUpdated={() => dispatch(callMyCalendarListAPI({
                        userId: userData.data.userId
                    }))}
                    onDelete={() => dispatch(callMyCalendarListAPI({
                        userId: userData.data.userId
                    }))}
                />
            )}

            <AddEventModal
                isOpen={addEventModalOpen}
                onRequestClose={handleAddEventModalClose}
                onAdded={() => {
                    handleAddEventModalClose();
                    dispatch(callMyCalendarListAPI({
                        userId: userData.data.userId
                    }));
                }}
            />
        </div>
    );
}

export default MyCalendar;
