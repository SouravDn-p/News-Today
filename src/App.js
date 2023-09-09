import './App.css';
import React from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';

function App() {
  let pageSize = 12;
  return (
<>
  <div className='bg-dark bg-gradient' >
      <Router>
          <Navbar />
          <Routes >
              <Route path='/' element={<News key={'home'} country={'in'} category={'Headline'} pageSize={pageSize} />} /> 
              <Route path='/home' element={<News key={'general'} country={'in'} category={'general'} pageSize={pageSize} />} /> 
              <Route path='/entertainment' element={<News key={'entertainment'} country={'in'} category={'entertainment'} pageSize={pageSize} />} /> 
              <Route path='/business' element={<News key={'business'} country={'in'} category={'business'} pageSize={pageSize} />} /> 
              <Route path='/health' element={<News key={'health'} country={'in'} category={'health'} pageSize={pageSize} />} /> 
              <Route path='/science' element={<News key={'science'} country={'in'} category={'science'} pageSize={pageSize} />} /> 
              <Route path='/sports' element={<News key={'sports'} country={'in'} category={'sports'} pageSize={pageSize} />} /> 
          </Routes>
      </Router>
  </div>
</>
  );
}

export default App;


