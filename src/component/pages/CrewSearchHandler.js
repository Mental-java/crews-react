import {useNavigate} from "react-router-dom";
import HandlerCSS from "./CrewSearchHandler.module.css"

function CrewSearchHandler({ crew: {crewId, crewName, captain, introduction, crewCategory, startDate,
    endDate, crewRecruitmentPost, crewRecruitmentContent, recruitmentStatus, creationDate}}) {

    const navigate = useNavigate();

    const onClickCrewSearchHandler = (crewId) => {
        navigate(`main/crewsearch/detail/${crewId}`, {replace: false});
    }

    return (

            <tr>
                <td>
                    <div className={HandlerCSS.content}>
                        <div className={HandlerCSS.div1}>
                            <div className={HandlerCSS.recruitmentStatus}>
                                {recruitmentStatus}
                            </div>
                        </div>
                        <div className={HandlerCSS.div2}>
                            {crewId}
                        </div>
                    </div>
                </td>
            </tr>

    )


}

export default CrewSearchHandler;