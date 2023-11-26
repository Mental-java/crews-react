import { Outlet } from 'react-router-dom';
import Header from '../component/common/Header';
import LayoutCSS from './Layout.module.css';

function Layout(){

    return(

        <>
            <Header/>
            <main className={LayoutCSS.main}>
                <Outlet/>
            </main>
        </>

    )
}

export default Layout;