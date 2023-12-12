import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ScoreModalCSS from "./ScoreModal.module.css";
import diamondImage from "../img/diamond-image.png"; 
import {
    callCrewUserAPI
} from "../apis/CrewListAPICalls";
import UserListHandler from "./UserListHandler";

function ScoreModal({ setScoreModal,crewId }){

    const dispatch = useDispatch();
    const users = useSelector(state => state.crewUserListReducer);
    const usersList = users.data;

    useEffect(
        () => {
            dispatch(callCrewUserAPI({
                crewId: crewId
            }));
        }
        ,[]
    );

    return(
            <div className={ScoreModalCSS.scoremodalcontainer}>
            <div className={ScoreModalCSS.scoremodalcontent}>
            <div>
                <div className={ScoreModalCSS.title}>
                    <h2> 크루원을 평가해주세요!</h2>
                </div>
                <div className={ScoreModalCSS.outline}>
                    <div className={ScoreModalCSS.maind}>
                        <div className={ScoreModalCSS.crewMember}>
                            <table>
                                {Array.isArray(usersList) && usersList.map(
                                    (userlist) => (
                                        <UserListHandler key={userlist.user} 
                                        userInfo = {userlist}/> 
                                    )
                                )}    
                            </table>    
                            <div className={ScoreModalCSS.diamond}>
                                <img className={ScoreModalCSS.diaImg}src={diamondImage} alt="보석"/>
                            </div>
                            <hr/>
                        </div>
                    
                        <div className={ScoreModalCSS.closecase}>
                        <div className={ScoreModalCSS.close} onClick={() => setScoreModal(false)}>
                            확인
                        </div>
                        <div className={ScoreModalCSS.close} onClick={() => setScoreModal(false)}>
                            닫기
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            </div>
    )
    
    
}

export default ScoreModal;