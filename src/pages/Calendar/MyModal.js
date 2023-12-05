import React from 'react';
import Modal from 'react-modal';
import MyCalendar from "./MyCalendar";

function MyModal({ isOpen, onRequestClose, event }) {
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
            {event && (
                <div>
                    <h2>{event.title}</h2>
                    <p>시작일: {event.start.toLocaleString()}</p>
                    <p>종료일: {event.end.toLocaleString()}</p>
                </div>
            )}
            <button onClick={onRequestClose}>닫기</button>
        </Modal>
    );
}

export default MyModal;
