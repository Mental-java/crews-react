import React, { useState } from 'react';
import styles from './UserListHandler.module.css'; // 모듈형 CSS 파일을 import

function UserListHandler({ userInfo: { user } }) {
  const [selectedValue, setSelectedValue] = useState(0);

  const handleButtonClick = (value) => {
    setSelectedValue(value);
  };

  return (
    <>
      <tr>
        <th>{user.nickname}</th>
        <td>
          <button
            className={selectedValue === -1 ? styles.selected : ''}
            onClick={() => handleButtonClick(-1)}
          >
            -1
          </button>
          <button
            className={selectedValue === 0 ? styles.selected : ''}
            onClick={() => handleButtonClick(0)}
          >
            0
          </button>
          <button
            className={selectedValue === 1 ? styles.selected : ''}
            onClick={() => handleButtonClick(1)}
          >
            1
          </button>
        </td>
        <td>
          <button>제출</button>
        </td>
      </tr>
    </>
  );
}

export default UserListHandler;
