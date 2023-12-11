import MyPageCSS from "./MyPage.module.css";
import { useNavigate } from "react-router-dom";

function MyCrewHandler({ crewInfo: { captain,crewId,crewRecruitmentPost,creationDate}}){

    const navigate = useNavigate();

    const onClickCaptainCrwHandler = (crewId) => {
        navigate(`/main/crewsearchdetail/mycrew/${crewId}`,{ replace:false });
    }

    return(
        <>
            <tr
                onClick={ () => onClickCaptainCrwHandler(crewId)}
                className = { MyPageCSS.myCrewList }
            >
                    <td>{captain.nickname}</td>
                    <td>{crewRecruitmentPost}</td>
                    <td>{creationDate}</td>
            </tr>
        </>
    )
}

export default MyCrewHandler;