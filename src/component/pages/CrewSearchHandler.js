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
                            <div className={HandlerCSS.recruitmentStatusOn}>
                                { recruitmentStatus === "1" ? '모집중' : '모집종료'}
                            </div>
                            <div className={HandlerCSS.crewNameDiv}>
                                {crewName}
                            </div>
                        </div>
                        <div className={HandlerCSS.div2}>
                            <div>

                            </div>
                        </div>
                    </div>
                </td>
            </tr>

    )


}

export default CrewSearchHandler;