import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styles from './UserListHandler.module.css'; // 모듈형 CSS 파일을 import
import { callSubmitDiamondAPI } from '../apis/CrewListAPICalls';
import { callChangeScoreStatusAPI } from '../apis/CrewListAPICalls';

function UserListHandler({ userInfo: { user, scoreStatus,crew } }) {
  const [selectedValue, setSelectedValue] = useState(0);
  const dispatch = useDispatch();

  const handleButtonClick = (value) => {
    setSelectedValue(value);
  };

  const submitDiamondHandler = () => {
    
        dispatch(callSubmitDiamondAPI({
            userId: user.userId,
            diamond: selectedValue
        }));

        dispatch(callChangeScoreStatusAPI({
            userId: user.userId,
            crew: crew.crewId,
            scoreStatus: "yes"
        }));

        window.location.reload();

  }

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
        {scoreStatus === 'no' && (
            <button onClick={() => submitDiamondHandler()}>제출</button>
          )}
        </td>
      </tr>
    </>
  );
}

export default UserListHandler;
