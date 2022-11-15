import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Header from './component/Header';
import Main from './component/Main';
import Sec1 from './component/Sec1';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} /> {/* 메인 페이지 */}
          <Route path="/Sec1" element={<Sec1 />} /> {/* Sec1 페이지 */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
