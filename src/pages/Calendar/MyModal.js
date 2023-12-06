import React, { useState } from 'react';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { updateEventAPI } from '../../apis/MyCalendarAPICalls';

function MyModal({ isOpen, onRequestClose, event }) {
    const dispatch = useDispatch();
    const [updatedTitle, setUpdatedTitle] = useState(event?.title || '');
    const [updatedContent, setUpdatedContent] = useState(event?.extendedProps?.content || '');
    const [updatedStartDate, setUpdatedStartDate] = useState(event?.start || '');
    const [updatedEndDate, setUpdatedEndDate] = useState(event?.end || '');

    const handleTitleChange = (e) => {
        setUpdatedTitle(e.target.value);
    };

    const handleContentChange = (e) => {
        setUpdatedContent(e.target.value);
    };

    const handleStartDateChange = (e) => {
        setUpdatedStartDate(e.target.value);
    };

    const handleEndDateChange = (e) => {
        setUpdatedEndDate(e.target.value);
    };

    const navBar = useSelector(state => state.LoginReducer);
    const userData = navBar.userData;

    const handleUpdateClick = () => {
        dispatch(updateEventAPI({
            userId: userData.data.userId,
            updatedTitle,
            updatedContent,
            updatedStartDate,
            updatedEndDate
        }));
        onRequestClose();
    };

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            style={{
                overlay: {
                    zIndex: 1000,
                },
                content: {
                    width: '50%',
                    height: '50%',
                    margin: 'auto',
                },
            }}
        >
            <h2>제목</h2>
            <input type="text" value={updatedTitle} onChange={handleTitleChange} />
            <h2>일정 내용</h2>
            <textarea value={updatedContent} onChange={handleContentChange} />
            <h2>시작 일자</h2>
            <input type="datetime-local" value={updatedStartDate} onChange={handleStartDateChange} />
            <h2>종료 일자</h2>
            <input type="datetime-local" value={updatedEndDate} onChange={handleEndDateChange} />

            <button onClick={handleUpdateClick}>수정</button>
            <button onClick={onRequestClose}>닫기</button>
        </Modal>
    );
}

export default MyModal;
