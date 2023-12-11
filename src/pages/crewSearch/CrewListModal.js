import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import CrewListModalCSS from "./CrewListModal.module.css";

import {
    callCrewListWaitStatusAPI
} from "../../apis/CrewListAPICalls";
import {useParams} from "react-router-dom";

function CrewListModal({ setCrewListModal }) {

    const dispatch = useDispatch();
    const params = useParams();
    const crewList = useSelector(state => state.crewListReducer);


    console.log(crewList);
    useEffect(
        () => {
            dispatch(callCrewListWaitStatusAPI({
                crewId: params.crewId
            }));
        }
    , []
    );

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
                                        <td><p className={CrewListModalCSS.joinBtn}>승인</p></td>
                                        &nbsp;&nbsp;
                                        <td><p className={CrewListModalCSS.refuseBtn}>거절</p></td>
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