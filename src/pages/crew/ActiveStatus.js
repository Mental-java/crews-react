import {NavLink, useParams} from "react-router-dom";
import { useSelector, useDispatch} from "react-redux";
import React, { useState, useEffect } from 'react';

import CrewCSS from "./CrewCommon.module.css";
import ActiveCSS from "./ActiveStatus.module.css";
import styles from "../crewSearch/CrewSearch.module.css";

import {
    callCrewUserAPI
} from "../../apis/CrewListAPICalls";

import UserInCrewHandler from "../../component/pages/UserInCrewHandler";

function ActiveStatus () {

    const dispatch = useDispatch();
    const params = useParams();

    const crew = useSelector(state => state.crewSearchListReducer);

    const users = useSelector(state => state.crewUserListReducer);
    const usersList = users.data;

    const pageInfo = users.pageInfo;

    const [start, setStart] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageEnd, setPageEnd] = useState(1);

    const pageNumber = [];
    if(pageInfo){
        for(let i =1; i <= pageInfo.pageEnd; i++){
            pageNumber.push(i);
        }
    }

    console.log('테스트 : ', usersList);

    useEffect(
        () => {
            dispatch(callCrewUserAPI({
                crewId: params.crewId
            }));
        }
        , []
    );

    return(

        <div>
            <div>
                <ul>
                    <li><NavLink to={`/main/crewmain/${params.crewId}`} className={CrewCSS.crewPage}>{usersList[0].crew.crewName}</NavLink></li>
                    <li><NavLink to={`/main/crewcertification/${params.crewId}`} className={CrewCSS.crewPage}>인증게시판</NavLink></li>
                    <li><NavLink to={`/main/activestatus/${params.crewId}`} className={`${CrewCSS.crewPage} ${ActiveCSS.activeStatus}`}>활동현황</NavLink></li>
                </ul>
            </div>
            <hr className={CrewCSS.crewLine}/>
            <div className={CrewCSS.crewListTable}>
                <table>
                    {Array.isArray(usersList) && usersList.map(
                        (userInfo) => (
                            <UserInCrewHandler key={userInfo.user} userInfo={userInfo}/>
                        )
                    )}
                </table>
            </div>
            <div className={styles.btnMain}>
                <div className={styles.btnDiv}>
                    {Array.isArray(usersList) &&
                        <button
                            onClick={() => setCurrentPage(currentPage - 1)}
                            disabled={currentPage === 1}
                            className={styles.pagingBtn}
                        >
                            &lt;
                        </button>
                    }
                    {pageNumber.map((num) => (
                        <li key={num} onClick={() => setCurrentPage(num)}>
                            <button
                                style={ currentPage === num ? {background : '#000928'} : null}
                                className={styles.pagingBtn}
                            >
                                {num}
                            </button>
                        </li>
                    ))}
                    { Array.isArray(usersList) &&
                        <button
                            onClick={() => setCurrentPage(currentPage + 1)}
                            disabled={currentPage === pageInfo.pageEnd || pageInfo.total ==0}
                            className={styles.pagingBtn}
                        >
                            &gt;
                        </button>
                    }
                </div>
            </div>
        </div>
    );
}

export default ActiveStatus;