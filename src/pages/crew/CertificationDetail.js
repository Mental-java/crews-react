import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
    callCertificationPostAPI
} from "../../apis/CrewPageAPICalls";
import {Link, NavLink} from "react-router-dom";
import CrewCSS from "./CrewCommon.module.css";
import CertificationCSS from "./CrewCertification.module.css";

function CertificationDetail(){

    const dispatch = useDispatch();
    const certifications = useSelector(state => state.crewPageReducer);
    const params = useParams();
    const crew = useSelector(state => state.crewSearchListReducer);

    useEffect(
        () => {
            dispatch(callCertificationPostAPI({
                postId: params.postId
            }));
        }
        ,[]
    )

    return(
        <>
            <div>
            <div>
                <ul>
                    <li><NavLink to={`/main/crewmain/${params.crewId}`} className={CrewCSS.crewPage}>{crew.crewName}</NavLink></li>
                    <li><NavLink to={`/main/crewcertification/${params.crewId}`} className={`${CrewCSS.crewPage} ${CertificationCSS.certification}`}>인증게시판</NavLink></li>
                    <li><NavLink to={`/main/activestatus/${params.crewId}`} className={CrewCSS.crewPage}>활동현황</NavLink></li>
                </ul>
            </div>
            <hr className={CrewCSS.crewLine}/>
                <div> 
                    <ul>
                        <li><p>{certifications.postContent}</p></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default CertificationDetail;