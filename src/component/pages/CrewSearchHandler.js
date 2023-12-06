import {useNavigate} from "react-router-dom";
import HandlerCSS from "./CrewSearchHandler.module.css"
import {useSelector} from "react-redux";

function CrewSearchHandler({ crew: {crewId, crewName, captain, introduction, crewCategoryCode, startDate,
    endDate, crewRecruitmentPost, crewRecruitmentContent, recruitmentStatus, creationDate}}) {

    const navigate = useNavigate();
    const login = useSelector(state => state.LoginReducer);
    const loginUser = login.userData;
    console.log("login ==> " + loginUser.data.userId);

    const onClickCrewSearchHandler = (crewId) => {
        navigate(`/main/crewsearchdetail/${crewId}`, {replace: false});
    }

    return (

            <tr>
                <td>
                    <div
                        className={HandlerCSS.content}
                        onClick={ () => onClickCrewSearchHandler(crewId)}
                    >
                        <div className={HandlerCSS.div1}>
                            <div className={HandlerCSS.recruitmentStatusOn}>
                                { recruitmentStatus === "1" ? '모집중' : '모집종료'}
                            </div>
                            <div className={HandlerCSS.crewNameDiv}>
                                {crewName}
                            </div>
                        </div>
                        <div className={HandlerCSS.div2}>
                            <div className={HandlerCSS.post}>
                                {crewRecruitmentPost}
                            </div>
                            <div className={HandlerCSS.makeInfo}>
                                {creationDate} | {captain.userId}
                            </div>
                        </div>
                    </div>
                </td>
            </tr>

    )


}

export default CrewSearchHandler;