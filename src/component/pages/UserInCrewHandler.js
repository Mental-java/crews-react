import {useState} from 'react';
import {useDispatch} from "react-redux";
import captainCapImg from "../../img/captaincap1.png";
import diamondImg from "../../img/diamond-image.png";

import ActiveStatusCSS from "../../pages/crew/ActiveStatus.module.css"
import CrewCheckModal from "../../pages/crew/CrewCheckModal";
import UserReportModal from "../../pages/report/UserReportModal";

function UserInCrewHandler({ userInfo: { user, crew, checkCount, isCaptain } }){

    const dispatch = useDispatch();

    console.log('테스트 : =========', user.userId);

    const [crewCheckModal, setCrewCheckModal] = useState(false);
    const [userEmail, setUserEmail] = useState('');

    const [reportModal, setReportModal] = useState(false);
    const [reportUserId, setReportUserId] = useState('');
    const [reportUserName, setReportUserName] = useState('');

    const onClickCrewCheckModalHandler = (userId) => {
        setCrewCheckModal(true);
        setUserEmail(userId);
    }

    const onClickReportModalHandler = (userId, userName) => {
        setReportModal(true);
        setReportUserId(userId);
        setReportUserName(userName);
    }

    return(
        <>
            { crewCheckModal ? <CrewCheckModal setCrewCheckModal={setCrewCheckModal} userId={userEmail}/> : null}
            { reportModal ? <UserReportModal setReportModal={setReportModal} reportTarget={reportUserId} reportTargetName={reportUserName}/> : null}
            <tr className={ActiveStatusCSS.trDiv}>
                <td className={ActiveStatusCSS.tdDiv}>
                    <div className={ActiveStatusCSS.isCaptainDiv}>
                        {isCaptain === "CAPTAIN" ? <img src={captainCapImg} className={ActiveStatusCSS.captainImg}/> : null}
                    </div>
                    <div className={ActiveStatusCSS.nicknameDiv}>
                        {user.nickname}
                    </div>
                    <div className={ActiveStatusCSS.diamondDiv}>
                        <img src={diamondImg} className={ActiveStatusCSS.diamondImg}/>&nbsp;{user.diamondCount}
                    </div>
                    <div className={ActiveStatusCSS.checkCountDiv}>
                        크루 활동 횟수 : {checkCount}
                    </div>
                    <div className={ActiveStatusCSS.checkBtnDiv}>
                        <div className={ActiveStatusCSS.checkDiv} onClick={() => onClickCrewCheckModalHandler(user.userId)}>
                            활동 내역
                        </div>
                        <div
                            className={ActiveStatusCSS.reportBtn}
                            onClick={() => onClickReportModalHandler(user.userId, user.nickname)}
                        >
                            신고하기
                        </div>
                    </div>
                </td>
            </tr>
        </>
    )
}

export default UserInCrewHandler