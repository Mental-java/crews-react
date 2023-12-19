import React, { useState, useEffect } from 'react';
import MyCalendarCSS from './MyCalendar.module.css';
import {callMyCalendarListAPI, dragUpdateEventAPI} from '../../apis/MyCalendarAPICalls';
import { updateEventAPI} from "../../apis/MyCalendarAPICalls";
import { useDispatch, useSelector } from 'react-redux';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from "@fullcalendar/interaction";
import MyModal from "./MyModal";
import AddEventModal from "./AddEventModal";
import UserWarningModal from "./UserWarningModal";
import { callSingleCalendarListAPI } from '../../apis/SingleCalendarAPICalls';
import AddGroupEventModal from "./AddGroupEventModal";
import DeleteModal from "./DeleteModal";



function MyCalendar() {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [addEventModalOpen, setAddEventModalOpen] = useState(false);
    const [addSingleEventOpen, setAddSingleEventOpen] = useState(false);
    const [deleteModal, setDeleteModal] = useState(false);

    const dispatch = useDispatch();
    const mycalendar = useSelector((state) => state.myCalendarReducer);
    const myCalendarList = mycalendar.data;
    const navBar = useSelector(state => state.LoginReducer);
    const userData = navBar.userData;
    const singleCalendar = useSelector(state => state.singleCalendarReducer);
    const singleCalendarList = singleCalendar.data;

    const [selectedSingleGroupId, setSelectedSingleGroupId] = useState(null);
    const [selectedSingleTitle, setSelectedSingleTitle] = useState(null);
    const [selectedSingleStartDate, setSelectedSingleStartDate] = useState(null);
    const [selectedSingleId, setSelectedSingleId] = useState(null);

    console.log('reportStatus : ', userData.data.reportStatus);
    console.log('singlecal===='+singleCalendar);
    const[userReportStatus, setUserReportStatus] = useState(userData.data.reportStatus === "1" ? true : false);

    useEffect(() => {
        dispatch(callMyCalendarListAPI({
            userId: userData.data.userId
        }));
        dispatch(callSingleCalendarListAPI({
            userId: userData.data.userId
        }));
    }, [dispatch, userData.data.userId]);

    const handleEventClick = (info) => {
        if (info.event.extendedProps.isSingle) {
            // singleCalendarList의 이벤트를 클릭한 경우
            // 원하는 동작을 수행하세요.
            setSelectedSingleGroupId(info.event.groupId);
            setSelectedSingleId(info.event.id);
            setSelectedSingleTitle(info.event.title);
            setSelectedSingleStartDate(info.event.start);
            setDeleteModal(true);
        } else {
            // myCalendarList의 이벤트를 클릭한 경우
            setSelectedEvent(info.event);
            setModalIsOpen(true);
        }
    };

    const handleAddEventClick = () => {
        setAddEventModalOpen(true);
    };

    const handleSingleEventClick = () => {
        setAddSingleEventOpen(true);
    };

    const handleAddEventModalClose = () => {
        setAddEventModalOpen(false);
    };
    // 시작일 하루 전으로 표기되는거 수정하기,날짜 YYYY-MM-DD로 바꾸기 !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    const handleEventDrop = (info) => {
        console.log("Start Date=========================>:", info.event.start);
        console.log("End Date=======================>:", info.event.end);
        const updatedEvent = {
            userId: userData.data.userId,
            userCalendarId: info.event.id,
            updatedTitle: info.event.title,
            updatedContent: info.event.extendedProps.content,
            updatedStartDate: info.event.start,
            updatedEndDate: info.event.end,
            updatedColor : info.event.backgroundColor,
            updatedBorderColor:info.event.borderColor,
            updatedTextColor:info.event.textColor
        };

        dispatch(dragUpdateEventAPI(updatedEvent));
    };

    return (
        <div className={MyCalendarCSS.MyCalendarContainer}>
            {userReportStatus ? <UserWarningModal userId={userData.data.userId} setUserReportStatus={setUserReportStatus}/> : null};
            {addSingleEventOpen ? <AddGroupEventModal setAddSingleEventOpen={setAddSingleEventOpen} userId={userData.data.userId}/> : null};
            {deleteModal ?
                <DeleteModal setDeleteModal={setDeleteModal} groupId={selectedSingleGroupId} userId={userData.data.userId} startDate={selectedSingleStartDate} title={selectedSingleTitle} id={selectedSingleId}/> : null};
            <FullCalendar
                firstDay={1}
                allDayContent={false}
                allDay={false}
                initialView="dayGridMonth"
                plugins={[dayGridPlugin , interactionPlugin]}
                // events={Array.isArray(myCalendarList)
                //     ? myCalendarList.map((calendar) => ({
                //         id: calendar.userCalendarId, //해당 코드로 변경하면 일정 다수 조회 가능
                //         //id: userData.data.userId, // 일정은 하나밖에 조회 안되지만 이벤트 수정 가능(DB상 같은 userId로 캘린더가 다수 존재시 마비)
                //         end: calendar.endDate,
                //         start: calendar.startDate,
                //         title: calendar.title,
                //         backgroundColor : calendar.color,
                //         borderColor : calendar.borderColor,
                //         textColor:  calendar.textColor,
                //         extendedProps: {
                //             content: calendar.calendarContent,
                //             color: calendar.color,
                //             borderColor : calendar.borderColor,
                //             textColor : calendar.textColor
                //         }
                //     }))
                //     : []
                // }

                events={[
                    ...(Array.isArray(myCalendarList) ? myCalendarList.map((calendar) => ({
                        id: calendar.userCalendarId,
                        end: calendar.endDate,
                        start: calendar.startDate,
                        title: calendar.title,
                        backgroundColor: calendar.color,
                        borderColor: calendar.borderColor,
                        textColor: calendar.textColor,
                        extendedProps: {
                            content: calendar.calendarContent,
                            color: calendar.color,
                            borderColor: calendar.borderColor,
                            textColor: calendar.textColor,
                        }
                    })) : []),
                    ...(Array.isArray(singleCalendarList) ? singleCalendarList.map((calendar) => ({
                        id: calendar.singleCalendarId,
                        start: calendar.startDate,
                        title: calendar.title,
                        groupId: calendar.groupId,
                        isSingle: true
                    })) : [])
                ]}

                eventDrop={handleEventDrop}
                height={'95vh'}
                editable={true}
                droppable={true}
                eventClick={handleEventClick}
                headerToolbar={{
                    right: 'myCustomButton,mySecondButton,today,prev,next',
                }}
                customButtons={{
                    myCustomButton: {
                        text: '이벤트 생성',
                        click(ev, element) {
                            handleAddEventClick();
                        },
                    },
                    mySecondButton: {
                        text: '반복 일정',
                        click(ev, element) {
                            handleSingleEventClick();
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
                    dispatch(callSingleCalendarListAPI({
                        userId: userData.data.userId
                    }));
                }}
            />
            

        </div>
    );
}

export default MyCalendar;
