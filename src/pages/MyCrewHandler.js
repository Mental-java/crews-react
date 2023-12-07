import MyPageCSS from "./MyPage.module.css";

function MyCrewHandler({ crewInfo: { crewRecruitmentPost,creationDate}}){
    return(
        <>
            <tr>
                    <td>{crewRecruitmentPost}</td>
                    <td>{creationDate}</td>
            </tr>
        </>
    )
}

export default MyCrewHandler;