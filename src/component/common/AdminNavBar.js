import AdminNavBarCSS from './AdminNavBar.module.css';
import {Link, NavLink, useNavigate} from "react-router-dom";
import {
    callLogoutAPI
} from '../../apis/AdminAPICalls';
import { useDispatch } from 'react-redux';
import styles from '../../pages/admin/Admin.module.css'

function AdminNavBar(){

    const navigate = useNavigate();
    const dispatch = useDispatch();
    

    const onClickLogoutHandler = () => {
        window.localStorage.removeItem('adminAccessToken');  
        //로그아웃
        dispatch(callLogoutAPI());
        
        alert('로그아웃이 되어 메인화면으로 이동합니다.');
        navigate("/admin/login", { replace: true })
        window.location.reload();
    }

    return(
        <aside className={AdminNavBarCSS.sidebar}>
            <div className={AdminNavBarCSS.logoContainer}>
                <img src="img/real-gray-logo.png" alt="메인 로고" className={AdminNavBarCSS.logo}/>
            </div>

                <div className={AdminNavBarCSS.menuList}>
                    <ul>
                        <li><NavLink to="/admin/notice">공지사항 관리</NavLink></li>
                        <li><NavLink to="/admin/user">크루원 관리</NavLink></li>
                        <li><NavLink to="/admin/crew">크루 관리</NavLink></li>
                        <li><NavLink to="/admin/userreport">크루원 신고 관리</NavLink></li>
                        <li><NavLink to="/admin/crewreport">크루 신고 관리</NavLink></li>
                    </ul>

                </div>
            <button
                onClick={ onClickLogoutHandler }
                className={styles.logoutBtn}>
                로그아웃
            </button>
        </aside>
    );
}

export default AdminNavBar;