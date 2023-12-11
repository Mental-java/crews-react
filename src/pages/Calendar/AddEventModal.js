import React, { useState } from 'react';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { createEventAPI } from "../../apis/MyCalendarAPICalls";
import CreateModalCSS from './AddEventModal.module.css';

function AddEventModal({ isOpen, onRequestClose, onAdded }) {
    const dispatch = useDispatch();
    const [newTitle, setNewTitle] = useState('');
    const [newContent, setNewContent] = useState('');
    const [newStartDate, setNewStartDate] = useState('');
    const [newEndDate, setNewEndDate] = useState('');

    const handleTitleChange = (e) => {
        setNewTitle(e.target.value);
    };

    const handleContentChange = (e) => {
        setNewContent(e.target.value);
    };

    const handleStartDateChange = (e) => {
        setNewStartDate(e.target.value);
    };

    const handleEndDateChange = (e) => {
        setNewEndDate(e.target.value);
    };

    const handleAddClick = () => {
        if (!newStartDate || !newEndDate) {
            alert('시작일과 종료일을 입력해주세요.');
            return;
        }

        if (newStartDate >= newEndDate) {
            alert('종료일은 시작일보다 미래의 날짜여야 합니다.');
            return;
        }

        dispatch(
            createEventAPI({
                userId: userData.data.userId,
                newTitle,
                newContent,
                newStartDate,
                newEndDate,
            })
        ).then(() => {
            onRequestClose();
            onAdded && onAdded();
        });
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
            <div className={CreateModalCSS.modalContainer}>
                <div className={`${CreateModalCSS.updateInfo} ${CreateModalCSS.originInfo}`}>
                    <h2>새 일정 추가</h2>
                    <input type="text" placeholder="제목을 입력하세요" value={newTitle} onChange={handleTitleChange} />
                    <textarea placeholder="일정 내용" value={newContent} onChange={handleContentChange} />
                    <input type="datetime-local" placeholder="시작일" value={newStartDate} onChange={handleStartDateChange} />
                    <input type="datetime-local" placeholder="종료일" value={newEndDate} onChange={handleEndDateChange} />
                    <button onClick={handleAddClick}>추가</button>
                </div>
                <button className={CreateModalCSS.closeButton} onClick={onRequestClose}>
                    X
                </button>
            </div>
        </Modal>
    );
}

export default AddEventModal;
