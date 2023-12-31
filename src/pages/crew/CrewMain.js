import React, { useState, useEffect } from 'react';
import {useNavigate, useParams} from "react-router-dom";
import { useSelector, useDispatch} from "react-redux";
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import {NavLink} from "react-router-dom";
import CrewCSS from "./CrewCommon.module.css";
import CrewMainCSS from "./CrewMain.module.css";

import {
    callCrewIntroListAPI
} from "../../apis/CrewIntroAPICalls";
import UpdateIntroModal from "./UpdateIntroModal";

import {
    callCrewSearchDetailAPI
} from "../../apis/CrewSearchAPICalls";

function CrewMain() {
    // const crewcalendar = useSelector((state) => state.myCalendarReducer);
    // const crewCalendarList = crewcalendar.data;
    //
    // const events = crewCalendarList.map(event => ({
    //     title: event.title,
    //     start: event.start,
    //     end: event.end
    // }));

    const [updateIntroModal, setUpdateIntroModal] = useState(false);

    const dispatch = useDispatch();
    const params = useParams();

    const crew = useSelector(state => state.crewSearchListReducer);
    const intro = crew.introduction;
    const captain = crew.captain && crew.captain.userId;
    
    const login = useSelector(state => state.LoginReducer);
    const loginUser = login.userData;
    const userEmail = loginUser && loginUser.data ? loginUser.data.userId : null;

    console.log(crew.crewId ,'로그인 유저 : ', loginUser.data.userId);
    console.log(crew.crewId ,'크루아이디 : ');
    console.log(crew.endDate ,'종료일 : ');
    console.log(crew.startDate ,'시작일 : ');
    console.log(crew.crewRecruitmentPost ,'제목 : ');


    useEffect(
        () => {
            dispatch(callCrewSearchDetailAPI({
                crewId: params.crewId
            }));
        }
        , [params.crewId]
    );

    const onClickUpdateModalHandler = () => {
        if(captain === userEmail) {
            setUpdateIntroModal(true);
        } else{
            alert('#경고# 캡틴만 수정할 수 있습니다.');
        }
    }


    return (
        <>
            {updateIntroModal ? <UpdateIntroModal crewIntro={intro} setUpdateIntroModal={setUpdateIntroModal}/> : null}
            <div>
                <div>
                    <ul>
                        <li><NavLink to={`/main/crewmain/${params.crewId}`} className={`${CrewCSS.crewPage} ${CrewMainCSS.main}`}>{crew.crewName}</NavLink></li>
                        <li><NavLink to={`/main/crewcertification/${params.crewId}`} className={CrewCSS.crewPage}>인증게시판</NavLink></li>
                        <li><NavLink to={`/main/activestatus/${params.crewId}`} className={CrewCSS.crewPage}>활동현황</NavLink></li>
                    </ul>
                </div>
                <hr className={CrewCSS.crewLine}/>
                <FullCalendar
                    firstDay={1}
                    initialView="dayGridMonth"
                    plugins={[dayGridPlugin]}
                    events={[{
                        id: crew.crewId,
                        end : crew.endDate,
                        start : crew.startDate,
                        title : crew.crewRecruitmentPost,
                    }]}
                    height={'75vh'}
                    eventBackgroundColor={'#000928'}
                    eventBorderColor={'#000920'}
                />
                <div className={CrewMainCSS.introbox}>
                    <div className={CrewMainCSS.introdiv}>{intro}</div>
                    <div className={CrewMainCSS.buttondiv}>
                        <div onClick={onClickUpdateModalHandler} className={CrewMainCSS.introEditBtn}>수정하기</div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CrewMain;