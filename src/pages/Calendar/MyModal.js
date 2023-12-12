import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import {deleteEventAPI, updateEventAPI} from '../../apis/MyCalendarAPICalls';
import MyModalCSS from './MyModal.module.css';

function MyModal({ isOpen, onRequestClose, event, onUpdated ,onDelete }) {
    const dispatch = useDispatch();
    const [isEditMode, setIsEditMode] = useState(false);
    const [updatedTitle, setUpdatedTitle] = useState(event?.title || '');
    const [updatedContent, setUpdatedContent] = useState(event?.extendedProps?.content || '');
    const [updatedStartDate, setUpdatedStartDate] = useState(event?.start || '');
    const [updatedEndDate, setUpdatedEndDate] = useState(event?.end || '');

    useEffect(() => {

        setIsEditMode(false);

        setUpdatedTitle(event.title);
        setUpdatedContent(event.extendedProps.content);
        setUpdatedStartDate('');
        setUpdatedEndDate('');
    }, [isOpen, event]);

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

    const handleDeleteClick = () => {
        const confirmDelete = window.confirm('이 일정을 삭제하시겠습니까?');
        if (confirmDelete) {

            dispatch(
                deleteEventAPI({
                    userId: userData.data.userId,
                    userCalendarId: event.id,
                })
            ).then(() => {
                onRequestClose();
                onDelete && onDelete();
            });
        }
    };

    const handleUpdateClick = () => {
        if (!updatedStartDate || !updatedEndDate) {
            alert('시작일과 종료일을 입력해주세요.');
            return;
        }

        if (new Date(updatedStartDate) >= new Date(updatedEndDate)) {
            alert('종료일은 시작일보다 미래의 날짜여야 합니다.');
            return;
        }

        dispatch(
            updateEventAPI({
                userId: userData.data.userId,
                userCalendarId: event.id,
                updatedTitle,
                updatedContent,
                updatedStartDate,
                updatedEndDate,
            })
        ).then(() => {
            onRequestClose();
            onUpdated && onUpdated();
        });
    };

    const navBar = useSelector((state) => state.LoginReducer);
    const userData = navBar.userData;

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
            <div className={MyModalCSS.modalContainer}>
                <div className={MyModalCSS.originInfo}>
                    <h2>일정 번호</h2>
                    <p>{event.id}</p>
                    <h2>일정 제목</h2>
                    <p>{event.title}</p>
                    <h2>일정 내용</h2>
                    <p>{event.extendedProps?.content}</p>
                    <h2>시작일</h2>
                    <p>{event.start?.toISOString()}</p>
                    <h2>종료일</h2>
                    <p>{event.end?.toISOString()}</p>
                </div>
                <div className={MyModalCSS.updateInfo}>
                    {isEditMode ? (
                        <>
                            <h2>수정할 제목</h2>
                            <input type="text" placeholder="제목을 입력하세요" value={updatedTitle} onChange={handleTitleChange} />
                            <h2>수정할 일정</h2>
                            <textarea placeholder="일정 내용" value={updatedContent} onChange={handleContentChange} />
                            <h2>수정할 시작일</h2>
                            <input type="datetime-local" value={updatedStartDate} onChange={handleStartDateChange} />
                            <h2>수정할 종료일</h2>
                            <input type="datetime-local" value={updatedEndDate} onChange={handleEndDateChange} />
                            <button onClick={handleUpdateClick}>적용</button>
                            <button onClick={() => setIsEditMode(false)}>취소</button>
                        </>
                    ) : (
                        <>
                            <button onClick={() => setIsEditMode(true)}>✎수정</button>
                            <button onClick={handleDeleteClick}>🗑️삭제</button>
                        </>
                    )}
                </div>
            </div>
            <button className={MyModalCSS.closeButton} onClick={onRequestClose}>
                X
            </button>
        </Modal>
    );
}

export default MyModal;
