import { Outlet } from 'react-router-dom';
import Header from '../component/common/Header';
import LayoutCSS from './Layout.module.css';
import NavBar from '../component/common/NavBar'

function Layout(){

    return(

        <>
            <Header/>
            <main className={LayoutCSS.navMain}>
                <NavBar/>
                <section className={LayoutCSS.content}>
                    <Outlet/>
                </section>
            </main>
        </>

    )
}

export default Layout;