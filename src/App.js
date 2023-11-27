import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './layouts/Layout';
import Notice from './pages/Notice';

function App() {
  return (
   <BrowserRouter>

      <Routes>
        <Route path="/" element={ <Layout/> }>
          <Route path="notice" element={<Notice/>}/>
        </Route>
      </Routes>

   </BrowserRouter>
  );
}

export default App;
