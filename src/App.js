import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './layouts/Layout';
import LoginLayout from './layouts/LoginLayout';
import Notice from './pages/notice/Notice';
import NoticeDetail from './pages/notice/NoticeDetail';
import MyPage from "./pages/MyPage";
import CreateCrew from "./pages/crewSearch/CreateCrew";
import Login from './pages/login/Login';
import LoginHandler from './pages/login/LoginHandler';
import AdminLayout from "./layouts/AdminLayout";
import AdminNotice from "./pages/admin/AdminNotice";
import MyCalendar from "./pages/Calendar/MyCalendar";
import CrewMain from "./pages/crew/CrewMain";
import CrewSearchPage from "./pages/crewSearch/CrewSearchPage";
import CrewSearchDetail from "./pages/crewSearch/CrewSearchDetail";
import CrewSearchDetailForCaptian from "./pages/crewSearch/CrewSearchDetailForCaptian";
import CrewCertification from "./pages/crew/CrewCertification";
import ActiveStatus from "./pages/crew/ActiveStatus";
import WritePost from "./pages/crew/WritePost";
import AdminCrew from "./pages/admin/AdminCrew";
import AdminUser from "./pages/admin/AdminUser";
import AdminCrewReport from "./pages/admin/AdminCrewReport";
import AdminUserReport from "./pages/admin/AdminUserReport";
import AdminLogin from './pages/admin/AdminLogin';
import Error from './pages/admin/Error';
import CertificationDetail from './pages/crew/CertificationDetail';


function App() {
  return (
   <BrowserRouter>
   

      <Routes>

        <Route path="/" element={ <LoginLayout/>}>

          <Route index element={ <Login/>}/>
        
        </Route>

        <Route path="/oauth" element ={<LoginHandler/>}/>
    

        <Route path="main" element={ <Layout/> }>
            <Route path="notice" element={<Notice/>}/>
            <Route path="noticeDetail/:noticeId" element={<NoticeDetail/>}/>
            <Route path="mypage" element={<MyPage/>}/>
            <Route path="crewsearch" element={<CrewSearchPage/>}/>
            <Route path="crewsearchdetail/:crewId" element={<CrewSearchDetail/>}/>
            <Route path="crewsearchdetail/mycrew/:crewId" element={<CrewSearchDetailForCaptian/>}/>
            <Route path="createcrew" element={<CreateCrew/>}/>
            <Route path="myCalendar" element={<MyCalendar/>}/>
            <Route path="crewmain/:crewId" element={<CrewMain/>}/>
            <Route path="crewcertification/:crewId" element={<CrewCertification/>}/>
            <Route path="crewcertification/:postId/detail" element={<CertificationDetail/>}/>
            <Route path="activestatus/:crewId" element={<ActiveStatus/>}/>
            <Route path="writepost" element={<WritePost/>}/>
        </Route>
        
      </Routes>
      

      <Routes>
          <Route path="admin" element={ <AdminLayout/> }>
           
              <Route path="notice" element={<AdminNotice/>}/>
              <Route path="crew" element={<AdminCrew/>}/>
              <Route path="user" element={<AdminUser/>}/>
              <Route path="crewreport" element={<AdminCrewReport/>}/>
              <Route path="userreport" element={<AdminUserReport/>}/>
          </Route>
          <Route path="admin/login" element={<AdminLogin/>}/>
          <Route path="error" element={<Error/>}/>
          
      </Routes>

      
   </BrowserRouter>
  );
}

export default App;
