import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './layouts/Layout';
import Notice from './pages/Notice';
import MyPage from "./pages/MyPage";
import CrewSearch from "./pages/CrewSearch";
import CreateCrew from "./pages/CreateCrew";

function App() {
  return (
   <BrowserRouter>

      <Routes>
        <Route path="/" element={ <Layout/> }>
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
