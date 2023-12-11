import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import CrewListModalCSS from "./CrewListModal.module.css";

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

    useEffect(
        () => {
            dispatch(callCrewListWaitStatusAPI({
                crewId: params.crewId
            }));
        }
    , []
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
                            <tr className={CrewListModalCSS.theadTr}>
                                <th>User ID</th>
                                <td width={10}></td>
                                <th>Approval Status</th>
                            </tr>
                            </thead>
                            <tbody>
                            {Array.isArray(crewList) &&
                                crewList.map((item, index) => (
                                    <tr className={CrewListModalCSS.tbodyTr} key={index}>
                                        <td className={CrewListModalCSS.tableTd}>{item.user.userId}</td>
                                        <td width={10}></td>
                                        <td className={CrewListModalCSS.tableTd}>가입 대기 중</td>
                                        &nbsp;&nbsp;
                                        <td><p className={CrewListModalCSS.agreeBtn} onClick={()=> onClickCrewJoinAgreeHandler(item.user.userId)}>승인</p></td>
                                        &nbsp;&nbsp;
                                        <td><p className={CrewListModalCSS.disagreeBtn} onClick={() => onClickCrewJoinDisagreeHandler(item.user.userId)}>거절</p></td>
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