import MyPageCSS from "./MyPage.module.css";
import {
    callMyPageListAPI
} from '../apis/MyPageAPICalls'
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {Link} from "react-router-dom";
import { useState } from "react";
import MypageModal from "./MypageModal";
import MyCrewHandler from "./MyCrewHandler";
import profileImage from "../img/level-image.png";

function MyPage(){

    const dispatch = useDispatch();
    const mypage = useSelector(state => state.myPageReducer);
    const myPageList = mypage.data;

    const navBar = useSelector(state => state.LoginReducer);
    const userData = navBar.userData;

    const [mypageModal, setMypageModal ] = useState(false);


    useEffect(
        () => {
            dispatch(callMyPageListAPI({
                captain: userData.data.userId
            }));
        }
        ,[]
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
                            <tr className={MyPageCSS.recodeTr}>
                                <th className={MyPageCSS.recodeTh} width="120">몸짱크루</th>
                                <th className={MyPageCSS.recodeTh} width="50"><p className={MyPageCSS.category}>운동</p></th>
                                <th className={MyPageCSS.recodeTh} width="140">2023.9.12~2023.10.19</th>
                                <th className={MyPageCSS.recodeTh}><p className={MyPageCSS.rate}>평가하기</p></th>
                            </tr>
                            <tr></tr>
                            <tr></tr>
                            <tr></tr>
                            <tr></tr>
                            <tr></tr>
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
                    </div>
                </div>
            </div>
        </>
    )

}

export default MyPage;