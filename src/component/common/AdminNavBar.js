import AdminNavBarCSS from './AdminNavBar.module.css';
import {Link, NavLink} from "react-router-dom";

function AdminNavBar(){

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
        </aside>
    );
}

export default AdminNavBar;