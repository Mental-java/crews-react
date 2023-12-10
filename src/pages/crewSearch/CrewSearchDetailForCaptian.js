import CrewSearchDetailCSS from './CrewSearchDetail.module.css';
import {useNavigate, useParams} from "react-router-dom";
import { useSelector, useDispatch} from "react-redux";
import {useEffect, useState} from "react";
import calenderIcon from '../../img/calendar.png';
import userIcon from '../../img/userImg.png';

import {
    callCrewSearchDetailAPI
} from "../../apis/CrewSearchAPICalls";

import {
    callCrewDeleteAPI
} from "../../apis/CrewAPICalls";

function CrewSearchDetailForCaptain() {

    const dispatch = useDispatch();
    const params = useParams();
    const crew = useSelector(state => state.crewSearchListReducer);
    const navigate = useNavigate();

    useEffect(
        () => {
            dispatch(callCrewSearchDetailAPI( {
                crewId: params.crewId
            }));
        }
        , []
    );

    const onClickDeleteCrewHandler = () =>{
        console.log('[CrewSearchDetailForCaptain] CrewSearchDetailForCaptain start');

        dispatch(callCrewDeleteAPI({
            crewId: params.crewId
        }));

        alert('크루를 삭제했습니다.');
        navigate(`/main/crewsearch`, {replace: true});
        window.location.reload();
    }

    return(

        <div className={CrewSearchDetailCSS.main}>
            <div className={CrewSearchDetailCSS.upDiv}>
                <div className={CrewSearchDetailCSS.stateDiv}>
                    <div className={crew.recruitmentStatus === "1" ? CrewSearchDetailCSS.recruitmentOn : CrewSearchDetailCSS.recruitmentOff}>
                        {crew.recruitmentStatus === "1" ? '모집중' : '모집종료'}
                    </div>
                    <div className={CrewSearchDetailCSS.crewDiv}>
                        <br/>
                        <h2>{crew.crewName}</h2>
                        <img src={calenderIcon} className={CrewSearchDetailCSS.calendarImage}/>
                        <h5 className={CrewSearchDetailCSS.crewh4a1}>목표기간 : {crew.startDate} ~ {crew.endDate}</h5>
                        <img src={userIcon} className={CrewSearchDetailCSS.userImage}/>
                        <h5 className={CrewSearchDetailCSS.crewh4a2}>캡틴 : {crew.captain && crew.captain.nickname}</h5>
                    </div>
                </div>
                <div className={CrewSearchDetailCSS.joinDiv}>
                    <div className={CrewSearchDetailCSS.category}>
                        #{crew.crewCategoryCode && crew.crewCategoryCode.categoryName}
                    </div>
                    <div className={CrewSearchDetailCSS.updateBtn}>
                        수정하기
                    </div>
                    <div className={CrewSearchDetailCSS.checkBtn}>
                        신청현황
                    </div>
                </div>
            </div>
            <div className={CrewSearchDetailCSS.downDiv}>
                <div className={CrewSearchDetailCSS.contentDiv}>
                    <div className={CrewSearchDetailCSS.empty}></div>
                    <div className={CrewSearchDetailCSS.titleDiv}>
                        <div className={CrewSearchDetailCSS.title}>
                            <h1>{crew.crewRecruitmentPost}</h1>
                        </div>
                        <div className={CrewSearchDetailCSS.content}>
                            <h5>{crew.crewRecruitmentContent}</h5>
                        </div>
                    </div>
                    <div className={CrewSearchDetailCSS.actionDiv}>
                        <div className={CrewSearchDetailCSS}>
                            <div className={CrewSearchDetailCSS.deleteBtn} onClick={ onClickDeleteCrewHandler }>
                                삭제하기
                            </div>
                            <div className={CrewSearchDetailCSS.backpageBtn} onClick={() => navigate(-1)}>
                                목록으로 돌아가기
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );

}

export default CrewSearchDetailForCaptain;