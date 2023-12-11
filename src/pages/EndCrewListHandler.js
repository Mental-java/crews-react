import MyPageCSS from "./MyPage.module.css";

function EndCrewListHandler({crewInfo: { crew }}){
    return(
        <>
            <tr className={MyPageCSS.recodeTr}>
                <th className={MyPageCSS.recodeTh} width="120">{ crew.crewName}</th>
                <th className={MyPageCSS.recodeTh} width="50"><p className={MyPageCSS.category}>{ crew.crewCategoryCode.categoryName }</p></th>
                <th className={MyPageCSS.recodeTh} width="140">{ crew.startDate}~{crew.endDate}</th>
                <th className={MyPageCSS.recodeTh}><p className={MyPageCSS.rate}>평가하기</p></th>
            </tr>
        </>
    )
}

export default EndCrewListHandler;