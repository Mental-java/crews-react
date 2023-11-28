import HeaderCSS from './Header.module.css';
import { Link, NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Header(){
    const navigate = useNavigate();

    const onClickLogo = () => {

        navigate("/", { replace: true })
    }

    return(
        <>
            <header className={HeaderCSS.header}>
                <div className={ HeaderCSS.topBox }>
                    
                </div>
                <nav className={ HeaderCSS.mainNav }>
                    <div className={ HeaderCSS.logoContainer }>
                        <Link onClick={ onClickLogo }>
                            <img src="img/crews-logo.png" alt="메인 로고" className={HeaderCSS.mainLogo}/>     
                        </Link>
                    </div>
                    <ul>                           
                        <li><NavLink to="/" className={HeaderCSS.mainLink}>내캘린더</NavLink></li>
                        <li><NavLink to="/notice" className={HeaderCSS.mainLink}>공지사항</NavLink></li>
                        <li><NavLink to="/crewsearch" className={HeaderCSS.mainLink}>크루찾기</NavLink></li>
                        <li><NavLink to="/myPage" className={HeaderCSS.mainLink}>나의 활동</NavLink></li>
                    </ul>
                </nav>
            </header>
        </>
    );

}

export default Header;