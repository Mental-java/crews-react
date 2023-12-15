import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import CrewListModalCSS from "./CrewListModal.module.css";

import diamond from "../../img/diamond-image.png";

import {
    callCrewListWaitStatusAPI,
    callCrewJoinAgreeAPI,
    callCrewJoinDisagreeAPI
} from "../../apis/CrewListAPICalls";
import {useParams} from "react-router-dom";

function CrewListModal({ setCrewListModal }) {

    const dispatch = useDispatch();
    const params = useParams();
    const crewList = useSelector(state => state.crewListReducer);

    console.log('test ============ ', crewList);

    let people = 0;
    const howManyPeople = (crewList) =>{

        if (crewList.length > 0) {
            people = crewList.length;
        }
        return people;
    }

    useEffect(
        () => {
            dispatch(callCrewListWaitStatusAPI({
                crewId: params.crewId
            }));
        }
    , [crewList.length]
    );

    const onClickCrewJoinAgreeHandler = (userId) => {
        console.log('신청을 승인합니다.', userId, '크루' , params.crewId);

        alert(`${userId}의 크루 가입을 승인합니다.`);

        dispatch(callCrewJoinAgreeAPI({
            crewId: params.crewId,
            userId: userId
        }));

    }

    const onClickCrewJoinDisagreeHandler = (userId) => {
        console.log('신청을 거절합니다.', userId, '크루' , params.crewId);

        alert(`${userId}의 크루 가입을 거절합니다.`);

        dispatch(callCrewJoinDisagreeAPI({
            crewId: params.crewId,
            userId: userId
        }))
    }

    return (
        <div className={CrewListModalCSS.modal}>
            <div className={CrewListModalCSS.modalContainer}>
                <div className={CrewListModalCSS.main}>
                    <div className={CrewListModalCSS.closeBtn} onClick={() => setCrewListModal(false)}> X </div>
                    <table className={CrewListModalCSS.listTable}>
                        <div className={CrewListModalCSS.inTable}>
                            <thead>
                            <tr>
                                <th className={CrewListModalCSS.theadTr1}>신청자</th>
                                <th className={CrewListModalCSS.theadTr2}><img src={diamond} className={CrewListModalCSS.diamond} alt="보석"/></th>
                                <th width={10}></th>
                                <th className={CrewListModalCSS.theadTr3}>처리 상태</th>
                                <th className={CrewListModalCSS.howMany}>가입 신청 : {howManyPeople(crewList)}명</th>
                            </tr>
                            </thead>
                            <tbody>
                            {Array.isArray(crewList) &&
                                crewList.map((item, index) => (
                                    <tr className={CrewListModalCSS.tbodyTr} key={index}>
                                        <td className={CrewListModalCSS.tableTd1}>{item.user.userId}</td>
                                        <td className={CrewListModalCSS.tableTd2}>{item.user.diamondCount}</td>
                                        <td width={10}></td>
                                        <td className={CrewListModalCSS.tableTd3}>처리 대기 중</td>
                                        <td className={CrewListModalCSS.btnHandle}>
                                            <p className={CrewListModalCSS.agreeBtn} onClick={()=> onClickCrewJoinAgreeHandler(item.user.userId)}>승인</p>
                                            &nbsp;
                                            <p className={CrewListModalCSS.disagreeBtn} onClick={() => onClickCrewJoinDisagreeHandler(item.user.userId)}>거절</p>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </div>
                    </table>
                </div>
            </div>
        </div>
    );
}
export default CrewListModal;