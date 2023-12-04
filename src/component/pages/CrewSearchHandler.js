import {useNavigate} from "react-router-dom";

function CrewSearchHandler({ crew: {crewId, crewName, captain, introduction, crewCategory, startDate,
    endDate, crewRecruitmentPost, crewRecruitmentContent, recruitmentStatus, creationDate}}) {

    const navigate = useNavigate();

    const onClickCrewSearchHandler = (crewId) => {
        navigate(`main/crewsearch/detail/${crewId}`, {replace: false});
    }

    return (
        <tr>
            <td></td>
        </tr>
    )


}