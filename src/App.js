import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from'./components/Navbar';
import Home from'./pages/Home'; // 추가 된 내용
import Station from'./pages/station/Station';
import Voc from'./pages/voc/Voc';
import VocView from'./pages/voc/VocView';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/station' element={<Station />} />
          <Route path='/voc' element={<Voc />} />
          
          <Route path='/voc/:vocId' element={<VocView />}  />
        </Routes>
      </Router>
      </>
  );
}

export default App;
