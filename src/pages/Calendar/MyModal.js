import React from 'react';
import Modal from 'react-modal';

function MyModal({ isOpen, onRequestClose }) {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            style={{
                overlay: {
                    zIndex: 1000, // 제일 앞에 보이게 배치
                },
                content: {
                    width: '50%',
                    height: '50%',
                    margin: 'auto',
                },
            }}
        >
            <h2>Event Title</h2>
            <button onClick={onRequestClose}>닫기</button>
        </Modal>
    );
}

export default MyModal;