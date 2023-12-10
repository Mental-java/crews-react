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
                <table>
                    <thead>
                    <tr>
                        <th>User ID</th>
                        <th>Approval Status</th>
                    </tr>
                    </thead>
                    <tbody>
                    {Array.isArray(crewList) &&
                        crewList.map((item, index) => (
                            <tr key={index}>
                                <td>{item.user.userId}</td>
                                <td>{item.approvalStatus}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
export default CrewListModal;