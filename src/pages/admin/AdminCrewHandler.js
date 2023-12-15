import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";

function AdminCrewHandler({ crew: {crewId, crewName, captain, introduction, crewCategoryCode, startDate,
    endDate, crewRecruitmentPost, crewRecruitmentContent, recruitmentStatus, creationDate}}) {

    const navigate = useNavigate();
    const login = useSelector(state => state.LoginReducer);
    const loginUser = login.userData;

    const onClickCrewHandler = (crewId) => {
        console.log("login ==> " + loginUser.data.userId);
        console.log("pageinfo ==> " + captain.userId);

        if (loginUser.data.userId === captain.userId){
            navigate(`/main/admin/adminCrew/${crewId}`, {replace: false})
        } else {
            navigate(`/main/admin/${crewId}`, {replace: false});
        }
    }

    return (

        <>
            <tr>
                <td>
                    <div onClick={ () => onClickCrewHandler(crewId)} >
                        <div>
                            <div>
                                {crewName}
                                {crewId}
                                {captain}
                            </div>
                        </div>
                    </div>
                </td>
            </tr>
        </>


    )

    // return(
    //     <>
    //         <tr>
    //             <td>
    //                 <div>
    //                     <div>
    //                         {crewId}
    //                     </div>
    //                     <div>
    //                         {crewName}
    //                     </div>
    //                     <div>
    //                         {captain}
    //                     </div>
    //                 </div>
    //             </td>
    //         </tr>
    //     </>
    // )
}

export default AdminCrewHandler;
