import { Outlet} from "react-router-dom";
import AdminNavBar from "../component/common/AdminNavBar";
import AdminLayoutCSS from './AdminLayout.module.css';

function AdminLayout(){

    return(
      <>
        <main className={AdminLayoutCSS.main}>
            <AdminNavBar/>
            <section>
                <Outlet/>
            </section>
        </main>
      </>
    );
}

export default AdminLayout;