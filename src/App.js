import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './layouts/Layout';
import LoginLayout from './layouts/LoginLayout';
import Notice from './pages/Notice';
import MyPage from "./pages/MyPage";
import CrewSearch from "./pages/CrewSearch";
import CreateCrew from "./pages/CreateCrew";
import Login from './pages/login/Login';
import LoginHandler from './apis/LoginHandler';

function App() {
  return (
   <BrowserRouter>

      <Routes>

        <Route path="/" element={ <LoginLayout/>}>

          <Route index element={ <Login/>}/>
          <Route path="callback" element={ <LoginHandler/>}/>
        
        </Route>

        <Route path="main" element={ <Layout/> }>
            <Route path="notice" element={<Notice/>}/>
            <Route path="mypage" element={<MyPage/>}/>
            <Route path="crewsearch" element={<CrewSearch/>}/>
            <Route path="createcrew" element={<CreateCrew/>}/>
        </Route>
        
      </Routes>

   </BrowserRouter>
  );
}

export default App;
