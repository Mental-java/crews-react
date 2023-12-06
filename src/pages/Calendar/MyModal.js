import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { updateEventAPI } from '../../apis/MyCalendarAPICalls';

function MyModal({ isOpen, onRequestClose, event }) {
    const dispatch = useDispatch();
    const [isEditMode, setIsEditMode] = useState(false);
    const [updatedTitle, setUpdatedTitle] = useState(event?.title || '');
    const [updatedContent, setUpdatedContent] = useState(event?.extendedProps?.content || '');
    const [updatedStartDate, setUpdatedStartDate] = useState(event?.start || '');
    const [updatedEndDate, setUpdatedEndDate] = useState(event?.end || '');

    useEffect(() => {
        // 모달이 열릴 때마다 수정 모드를 초기화
        setIsEditMode(false);

        // 모달이 열릴 때마다 이벤트 데이터를 받아와서 상태 업데이트
        setUpdatedTitle(event?.title || '');
        setUpdatedContent(event?.extendedProps?.content || '');
        setUpdatedStartDate(event?.start || '');
        setUpdatedEndDate(event?.end || '');
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

    const navBar = useSelector(state => state.LoginReducer);
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
            <div style={{ display: "flex" }}>
                <div style={{ marginRight: '20%' }}>
                    <h2>일정 제목</h2>
                    <p>{event.title}</p>
                    <h2>일정 내용</h2>
                    <p>{event.extendedProps.content}</p>
                    <h2>시작일</h2>
                    <p>{event.start.toISOString()}</p>
                    <h2>종료일</h2>
                    <p>{event.end.toISOString()}</p>
                </div>
                <div>
                    {isEditMode ? (
                        <>
                            <h2>수정할 제목</h2>
                            <input type="text" value={updatedTitle} onChange={handleTitleChange} />
                            <h2>수정할 일정</h2>
                            <textarea value={updatedContent} onChange={handleContentChange} />
                            <h2>수정할 시작일</h2>
                            <input type="datetime-local" value={updatedStartDate} onChange={handleStartDateChange} />
                            <h2>수정할 종료일</h2>
                            <input type="datetime-local" value={updatedEndDate} onChange={handleEndDateChange} />
                            <button onClick={handleUpdateClick}>수정</button>
                            <button onClick={() => setIsEditMode(false)}>수정 창 닫기</button>
                        </>
                    ) : (
                        <button onClick={() => setIsEditMode(true)}>수정하기</button>

                    )}
                    <button onClick={onRequestClose}>닫기</button>
                </div>
            </div>
        </Modal>
    );
}

export default MyModal;
