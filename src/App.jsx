import React from 'react';
import Header from './component/Header';
import Footer from './component/Footer';
import HomePage from './component/HomePage';
import { Route, Routes } from 'react-router-dom';
import Shophome from './component/Shophome';

const App = () => {

  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/shop' element={<Shophome />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

