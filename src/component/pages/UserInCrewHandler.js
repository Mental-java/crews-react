import {useState} from 'react';
import {useDispatch} from "react-redux";
import captainCapImg from "../../img/captaincap1.png";
import diamondImg from "../../img/diamond-image.png";

import ActiveStatusCSS from "../../pages/crew/ActiveStatus.module.css"
import CrewCheckModal from "../../pages/crew/CrewCheckModal";

function UserInCrewHandler({ userInfo: { user, crew, checkCount, isCaptain } }){

    const dispatch = useDispatch();

    console.log('테스트 : =========', user.userId);

    const [crewCheckModal, setCrewCheckModal] = useState(false);
    const [userEmail, setUserEmail] = useState('');

    const onClickCrewCheckModalHandler = (userId) => {
        setCrewCheckModal(true);
        setUserEmail(userId);
    }

    return(
        <>
            { crewCheckModal ? <CrewCheckModal setCrewCheckModal={setCrewCheckModal} userId={userEmail}/> : null}
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
                    </div>
                </td>
            </tr>
        </>
    )
}

export default UserInCrewHandler