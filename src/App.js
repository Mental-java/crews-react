import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './layouts/Layout';
import LoginLayout from './layouts/LoginLayout';
import Notice from './pages/notice/Notice';
import NoticeDetail from './pages/notice/NoticeDetail';
import MyPage from "./pages/MyPage";
import CrewSearch from "./pages/crewSearch/CrewSearch";
import CreateCrew from "./pages/CreateCrew";
import Login from './pages/login/Login';
import LoginHandler from './pages/login/LoginHandler';
import AdminLayout from "./layouts/AdminLayout";
import AdminNotice from "./pages/admin/AdminNotice";
import MyCalendar from "./pages/Calendar/MyCalendar";
import CrewCalendar from "./pages/crew/CrewCalendar";
import CrewSearchPage from "./pages/crewSearch/CrewSearchPage";
import CrewSearchDetail from "./pages/crewSearch/CrewSearchDetail";

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
            <Route path="createcrew" element={<CreateCrew/>}/>
            <Route path="myCalendar" element={<MyCalendar/>}/>
            <Route path="crewCalendar" element={<CrewCalendar/>}/>
        </Route>
        
      </Routes>

      <Routes>
          <Route path="admin" element={ <AdminLayout/> }>
            <Route path="notice" element={<AdminNotice/>}/>
          </Route>
      </Routes>

      
   </BrowserRouter>
  );
}

export default App;
