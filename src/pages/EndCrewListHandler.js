import MyPageCSS from "./MyPage.module.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ScoreModal from "./ScoreModal";

function EndCrewListHandler({crewInfo: { crew }}){

    const navigate = useNavigate();
    const [scoreModal, setScoreModal] = useState(false);

    const onClickScoreHandler = (crewId) => {
        setScoreModal(true);
    }

    return(
        <>
            {scoreModal ? <ScoreModal
                setScoreModal = { setScoreModal }
                crewId = {crew.crewId }/> : null }   
            <tr className={MyPageCSS.recodeTr}>
                <th className={MyPageCSS.recodeTh} width="120">{ crew.crewName}</th>
                <th className={MyPageCSS.recodeTh} width="50"><p className={MyPageCSS.category}>{ crew.crewCategoryCode.categoryName }</p></th>
                <th className={MyPageCSS.recodeTh} width="140">{ crew.startDate}~{crew.endDate}</th>
                <th className={MyPageCSS.recodeTh} onClick={() => onClickScoreHandler(crew.crewId)}><p className={MyPageCSS.rate}>평가하기</p></th>
            </tr>
        </>
    )
}

export default EndCrewListHandler;