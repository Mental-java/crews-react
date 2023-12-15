import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";

import CrewCheckModalCSS from "./CrewCheckModal.module.css";

import {
    callCrewCheckListAPI
} from "../../apis/CrewCheckAPICalls";

function CrewCheckModal({userId, setCrewCheckModal}) {

    const dispatch = useDispatch();
    const params = useParams();
    const crewCheckList = useSelector(state => state.crewCheckReducer);

    console.log('test ===========', crewCheckList);

    const pageInfo = crewCheckList.pageInfo;

    const [start, setStart] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageEnd, setPageEnd] = useState(1);

    const pageNumber = [];
    if(pageInfo){
        for(let i = 1; i <= pageInfo.pageEnd; i++){
            pageNumber.push(i);
        }
    }

    useEffect(
        () => {
            setStart((currentPage - 1) * 5);
            dispatch(callCrewCheckListAPI({
                currentPage: currentPage,
                crewId: params.crewId,
                userId: userId
            }))
        }
        , []
    );

    return(
        <>
            <div className={CrewCheckModalCSS.modal}>
                <div className={CrewCheckModalCSS.modalContainer}>
                    <div className={CrewCheckModalCSS.main}>
                        <table>
                            <tr>
                                <td>{crewCheckList.data[0].user.nickname}</td>
                            </tr>
                            {Array.isArray(crewCheckList.data) &&
                                crewCheckList.data.map((item, index) => (
                                    <tr>
                                        <td>{item.today}</td>
                                    </tr>
                                ))
                            }
                        </table>
                    </div>
                </div>
            </div>
        </>
    )

}
export default CrewCheckModal