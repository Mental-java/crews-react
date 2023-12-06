import MyPageCSS from "./MyPage.module.css";
import {
    callMyPageListAPI
} from '../apis/MyPageAPICalls'
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {Link} from "react-router-dom";
import { useState } from "react";
import MypageModal from "./MypageModal";

function MyPage(){

    const dispatch = useDispatch();
    const mypage = useSelector(state => state.myPageReducer);
    const myPageList = mypage.data;

    const navBar = useSelector(state => state.LoginReducer);
    const userData = navBar.userData;

    const [mypageModal, setMypageModal ] = useState(false);
    const [nickname,setNickname] = useState(0);
    const [userId,setUserId] = useState(0);



    useEffect(
        () => {
            dispatch(callMyPageListAPI());
        }
        ,[]
    );

    const onClickNickNameHandler = (fromNickname,fromUserId) => {
        setNickname(fromNickname);
        setMypageModal(true);
        setUserId(fromUserId);
    }


    return(
        <>
            <div>
                <div className={MyPageCSS.upDiv}>
                    { mypageModal ? <MypageModal nickname ={ nickname } userId={ userId } setMypageModal = { setMypageModal }/> : null }
                        <div className={MyPageCSS.nicknameDiv}>
                            <img src="../img/level-image.png" className={MyPageCSS.levelImage}/>                                                                
                            <p className={MyPageCSS.nickname}>{ userData.data.nickname } 
                            <img 
                                src="../img/editButton.png" 
                                className={MyPageCSS.editImage} 
                                onClick={()=> onClickNickNameHandler(userData.data.nickname,userData.data.userId)}
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
                                    <th className={MyPageCSS.barContent} width="100">번호</th>
                                    <th className={MyPageCSS.barContent} width="700">제목</th>
                                    <th className={MyPageCSS.barContent} width="200">조회수</th>
                                    <th className={MyPageCSS.barContent} width="300">작성일</th>
                                </tr>
                            </thead>
                            <tbody>
                            {Array.isArray(myPageList) && myPageList.map(
                                (mypage, index) => (
                                    <tr
                                        key={mypage.captain}
                                    >
                                        <td>{index + 1}</td>
                                        <Link to={'/'} className={MyPageCSS.postdetaillink}><td>{mypage.crewRecruitmentPost}</td></Link>
                                        <td>3</td>
                                        <td>{mypage.creationDate}</td>
                                        <div className={MyPageCSS.endline}></div>
                                    </tr>
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