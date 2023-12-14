import MyPageCSS from "./MyPage.module.css";
import {
    callMyPageListAPI,
    callEndCrewListAPI
} from '../apis/MyPageAPICalls';
import styles from '../pages/crewSearch/CrewSearch.module.css';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {Link} from "react-router-dom";
import { useState } from "react";
import MypageModal from "./MypageModal";
import MyCrewHandler from "./MyCrewHandler";
import profileImage from "../img/level-image.png";
import EndCrewListHandler from "./EndCrewListHandler";

function MyPage(){

    const dispatch = useDispatch();
    const mypage = useSelector(state => state.myPageReducer);
    const myPageList = mypage.data;

    const endCrew = useSelector(state => state.endCrewListReducer);
    const endCrewList = endCrew.data;

    const pageInfo = mypage.pageInfo;

    const [mypageModal, setMypageModal ] = useState(false);
    const [start, setStart] = useState(0);
    const [currentPage,setCurrentPage] = useState(1);
    const [pageEnd, setPageEnd] = useState(1);

    const pageNumber = [];

    if(pageInfo){
        for(let i =1; i <= pageInfo.pageEnd; i++){
            pageNumber.push(i);
        }
    }

    useEffect(
        () => {
            setStart((currentPage - 1)*5);
            dispatch(callMyPageListAPI({
                currentPage: currentPage,
                captain: localStorage.getItem("userId")
            }));
            dispatch(callEndCrewListAPI({
                userId: localStorage.getItem("userId")
            }));
        }
        ,[currentPage]
    );

    const onClickNickNameHandler = () => {
        
        setMypageModal(true);
        
    }


    return(
        <>
        { mypageModal ? <MypageModal 
                     setMypageModal = { setMypageModal }/> : null }
            <div>
                <div className={MyPageCSS.upDiv}>
                        <div className={MyPageCSS.nicknameDiv}>
                            <img src={ profileImage } className={MyPageCSS.levelImage}/>                                                                
                            <p className={MyPageCSS.nickname}>{ localStorage.getItem("nickname") } 
                            <img 
                                src="../img/editButton.png" 
                                className={MyPageCSS.editImage} 
                                onClick={()=> onClickNickNameHandler()}
                            /></p>
                            
                            
                        </div>
                    <div className={MyPageCSS.spaceDiv}></div>
                    <div className={MyPageCSS.recodeDiv}>
                        <div className={MyPageCSS.tableTitle}>
                            <p className={MyPageCSS.recodeTitle}>&nbsp;&nbsp;나의 활동</p>
                        </div>
                        <table className={MyPageCSS.recodeTable}>
                            {Array.isArray(endCrewList) && endCrewList.map(
                                (endcrew) => (
                                    <EndCrewListHandler key={ endcrew.userId } crewInfo = { endcrew }/>
                                )
                            )}
                        </table>
                    </div>
                </div>
                <div className={MyPageCSS.downDiv}>
                    <div className>
                        <p className={MyPageCSS.listTitle}>내가 작성한 글</p>
                    </div>
                    <div className={MyPageCSS.informationBar}>
                        <table>
                            <thead>
                                <tr>
                                    <th className={MyPageCSS.barContent} width="200">작성자</th>
                                    <th className={MyPageCSS.barContent} width="700">제목</th>
                                    <th className={MyPageCSS.barContent} width="300">작성일</th>
                                </tr>
                            </thead>
                            <tbody>
                            {Array.isArray(myPageList) && myPageList.map(
                                (mycrew) => (
                                    <MyCrewHandler key={ mycrew.crewId } crewInfo= {mycrew}/>                            
                                )
                            )}

                            </tbody>
                        </table>
                        <div className={styles.btnMain}>
            <div className={styles.btnDiv}>
                {Array.isArray(myPageList) &&
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
                { Array.isArray(myPageList) &&
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
                </div>
            </div>
        </>
    )

}

export default MyPage;