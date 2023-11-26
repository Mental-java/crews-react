import { Outlet } from 'react-router-dom';
import Header from '../component/common/Header';
import LayoutCSS from './Layout.module.css';
import NavBar from '../component/common/NavBar'

function Layout(){

    return(

        <>
            <Header/>
            <NavBar/>
            <section className={LayoutCSS.section}>
                <Outlet/>
            </section>
        </>

    )
}

export default Layout;