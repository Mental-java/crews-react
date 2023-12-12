import {Link, NavLink} from "react-router-dom";
import React, {useEffect} from "react";
import CrewCSS from "./CrewCommon.module.css";
import CertificationCSS from "./CrewCertification.module.css";
import {useDispatch, useSelector} from "react-redux";

function CrewCertification () {

    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const date = today.getDate();

    const formattedDate = `${year}-${month < 10 ? `0${month}` : month}-${date < 10 ? `0${date}` : date}`;

    const dispatch = useDispatch();
    const crewCertification = useSelector(state => state.crewCertificationListReducer);
    const crewCertificationList = crewCertification.data;

    // const pageInfo = crewSearchs.pageInfo;
    // const pageNumber = [];
    // if(pageInfo){
    //     for(let i =1; i <= pageInfo.pageEnd; i++){
    //         pageNumber.push(i);
    //     }
    // }

    // useEffect(
    //     () => {
    //         setStart((currentPage - 1) * 5);
    //         dispatch(callCrewSearchListAPI({
    //             currentPage: currentPage
    //         }));
    //     }
    //     ,[currentPage]
    // );

    return(

        <div>
            <div>
                <ul>
                    <li><NavLink to="/main/crewMain" className={CrewCSS.crewPage}>크루 메인 페이지</NavLink></li>
                    <li><NavLink to="/main/crewCertification" className={`${CrewCSS.crewPage} ${CertificationCSS.certification}`}>인증게시판</NavLink></li>
                    <li><NavLink to="/main/activeStatus" className={CrewCSS.crewPage}>활동현황</NavLink></li>
                </ul>
            </div>
            <hr className={CrewCSS.crewLine}/>

            <div className={CertificationCSS.bar}>
                <p className={CertificationCSS.date}>오늘 날짜 : {formattedDate}</p>
                <Link to="/main/writePost" className={CertificationCSS.writeButton}>
                    글쓰기
                </Link>
            </div>
            <hr/>

            <div>
                <table>
                    {
                        Array.isArray(crewCertificationList) && crewCertificationList.map((crew) => (<CrewCertification key={ crew.crewId } crew={ crew }/>))
                    }
                </table>
            </div>

        </div>
    );
}

export default CrewCertification;