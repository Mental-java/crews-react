import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

import { callCrewListAPI } from '../../apis/CrewListAPICalls';
import CrewListHandler from './CrewListHandler';
import callLogoutAPI from '../../apis/LoginAPICalls';

import NavBarCSS from './NavBar.module.css';
import levelImg from '../../img/level-image.png'
import diamondImg from '../../img/diamond-image.png';

function NavBar(){

  const navBar = useSelector(state => state.LoginReducer);
  const userData = navBar.userData;
  const isLogin = window.localStorage.getItem('accesstoken');
  const navigate = useNavigate();

  console.log("로그인상태"+isLogin); 

  const dispatch = useDispatch();
  const crew = useSelector(state => state.crewListReducer);
  const crewList = crew.data;

  const onClickLogoutHandler = () => {
    window.localStorage.removeItem('accessToken');  
    //로그아웃
    dispatch(callLogoutAPI());
    
    alert('로그아웃이 되어 메인화면으로 이동합니다.');
    navigate("/", { replace: true })
    window.location.reload();
  }

  useEffect(
    
    () => {
        
        dispatch(callCrewListAPI({
            userId: userData.data.userId
        }));

    },
    [dispatch, userData.data.userId]
  );

  console.log("크루리스트" , crewList);
  console.log("사용자" , userData.data.userId);



    return(
            <aside className={ NavBarCSS.navAside }>
                <div className={ NavBarCSS.sideBar}>
                    <div className={ NavBarCSS.userInfo }>
                            <img src={levelImg} alt="1레벨 이미지" className={ NavBarCSS.userLogo }/>
                            <p className={NavBarCSS.userName}>{localStorage.getItem("nickname")}</p>
                            <div className={ NavBarCSS.diamondInfo}>
                                <img src={diamondImg} alt="보석"/>
                                <p className={ NavBarCSS.imageNumber }><p>{userData.data.diamondCount}</p></p>
                            </div>
                            <div className={ NavBarCSS.logoutButton }>
                                <button onClick={ onClickLogoutHandler }>로그아웃</button>
                            </div>
                            <div className={ NavBarCSS.crewList }>
                                <h2>내 크루 목록</h2>
                                <ul
                                    className={ NavBarCSS.crewBox}
                                 >
                                    {/*<NavLink to={`/main/crewMain/${crew.crewId}`}>*/}
                                    {/*    {Array.isArray(crewList)&& crewList.map(*/}
                                    {/*        (crewlist) => (*/}
                                    {/*            <CrewListHandler key={crewlist.crew} crewlist = { crewlist }/>*/}
                                    {/*        )*/}
                                    {/*    )}*/}
                                    {/*</NavLink>*/}

                                    {Array.isArray(crewList) && crewList.map((crewlist) => (
                                        <NavLink key={crewlist.crew} to={`/main/crewMain/${crewlist.crew.crewId}`}>
                                            <CrewListHandler key={crewlist.crew} crewlist={crewlist} />
                                        </NavLink>
                                    ))}


                                </ul>
                            </div>

                        </div>
                    </div>
                    <div className={ NavBarCSS.introduceBox}></div>
            </aside>

    );
}

export default NavBar;