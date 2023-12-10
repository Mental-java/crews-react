import CrewSearchDetailCSS from './CrewSearchDetail.module.css';
import {useNavigate, useParams} from "react-router-dom";
import { useSelector, useDispatch} from "react-redux";
import {useEffect, useState} from "react";
import calenderIcon from '../../img/calendar.png';
import userIcon from '../../img/userImg.png';

import {
    callCrewSearchDetailAPI
} from "../../apis/CrewSearchAPICalls";
import CrewReportModal from "../report/CrewReportModal";
import {callCrewListApplyAPI} from "../../apis/CrewListAPICalls";

function CrewSearchDetail() {

    const dispatch = useDispatch();
    const params = useParams();
    const crew = useSelector(state => state.crewSearchListReducer);
    const navigate = useNavigate();

    const user = useSelector(state => state.LoginReducer);
    const loginUser = user.userData;

    const [reportModal, setReportModal] = useState(false);
    const [reportCrewId, setReportCrewId] = useState(0);
    const [reportCrewName, setReportCrewName] = useState('');

    console.log('선택된 크루 정보 : ', crew);

    useEffect(
        () => {
            dispatch(callCrewSearchDetailAPI( {
                crewId: params.crewId
            }));
        }
        , []
    );

    const onClickReportModalHandler = (crewId, crewName) => {
        setReportModal(true);
        setReportCrewId(crewId);
        setReportCrewName(crewName);
        console.log('눌렀음', crewId);
    }

    const onClickApplyCrewListHandler = () => {
        console.log('[CrewSearchDetail] onClickApplyCrewListHandler start');

        dispatch(callCrewListApplyAPI({
            crewId: params.crewId,
            userId: loginUser && loginUser.data ? loginUser.data.userId : null
        }));

        alert('크루 가입을 신청했습니다.');
    }

    return(
        <>
            { reportModal ? <CrewReportModal setReportModal={ setReportModal } reportCrewId={ reportCrewId } reportCrewName={reportCrewName}/> : null}
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
                        <div
                            className={CrewSearchDetailCSS.joinBtn}
                            onClick={() => {
                                if (crew.recruitmentStatus === "1") {
                                    onClickApplyCrewListHandler();
                                } else {
                                    alert("모집이 종료되었습니다.");
                                }
                                }}
                        >
                            신청하기
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
                                <div
                                    className={CrewSearchDetailCSS.reportBtn}
                                    onClick={() => onClickReportModalHandler(crew.crewId, crew.crewName)}
                                >
                                    신고하기
                                </div>
                                <div className={CrewSearchDetailCSS.backpageBtn} onClick={() => navigate(-1)}>
                                    목록으로 돌아가기
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

}

export default CrewSearchDetail;