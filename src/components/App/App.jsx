import React from 'react';
import axios from 'axios';
import './App.css';
import Feelings_1 from '../Feelings_1/Feelings_1';
import Content_2 from '../Content_2/Content_2';
import Support_3 from '../Support_3/Support_3';
import Comments_4 from '../Comments_4/Comments_4';
import { BrowserRouter } from 'react-router-dom';
import { Routes } from 'react-router';
import { Route } from 'react-router';

function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback Survey</h1>
      </header>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Feelings_1 />} ></Route>
            <Route path="/content" element={<Content_2 />} ></Route>
            <Route path="/support" element={<Support_3 />} ></Route>
            <Route path="/comments" element={<Comments_4 />} ></Route>
            {/* <Route path="/review" element={<Review_5 />} ></Route> */}
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
