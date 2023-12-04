import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import NavBarCSS from './NavBar.module.css';

function NavBar(){

    
  const navBar = useSelector(state => state.LoginReducer);
  const userData = navBar.userData;
  console.log(userData);

    return(
            <aside className={ NavBarCSS.navAside }>
                <div className={ NavBarCSS.sideBar}>
                    <div className={ NavBarCSS.userInfo }>
                            <img src="img/level-image.png" alt="1레벨 이미지" className={ NavBarCSS.userLogo }/>
                            <p className={NavBarCSS.userName}>{userData.data.nickname}</p>
                            <div className={ NavBarCSS.diamondInfo}>
                                <img src="img/diamond-image.png" alt="보석"/>
                                <p className={ NavBarCSS.imageNumber }><p>{userData.data.diamondCount}</p></p>
                            </div>
                            <div className={ NavBarCSS.logoutButton }>
                                <button>로그아웃</button>
                            </div>
                            <div className={ NavBarCSS.crewList }>
                                <h2>내 크루 목록</h2>
                                <ul>
                                    <li><NavLink to="/crew/detail" className={ NavBarCSS.navLink }>코딩크루</NavLink></li>
                                </ul>
                            </div>
                            
                        </div>
                    </div>
                    <div className={ NavBarCSS.introduceBox}></div>
            </aside>
        
    );
}

export default NavBar;