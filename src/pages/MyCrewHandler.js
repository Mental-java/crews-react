import MyPageCSS from "./MyPage.module.css";
import { useNavigate } from "react-router-dom";

function MyCrewHandler({ crewInfo: { crewId,crewRecruitmentPost,creationDate}}){

    const navigate = useNavigate();

    const onClickCaptainCrwHandler = (crewId) => {
        navigate(`/main/crewsearchdetail/${crewId}`,{ replace:false });
    }

    return(
        <>
            <tr
                onClick={ () => onClickCaptainCrwHandler(crewId)}
            >
                    <td>{crewRecruitmentPost}</td>
                    <td>{creationDate}</td>
            </tr>
        </>
    )
}

export default MyCrewHandler;