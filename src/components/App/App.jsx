import React, {useEffect} from 'react';
import './App.css';
import Feelings_1 from '../Feelings_1/Feelings_1';
import Content_2 from '../Content_2/Content_2';
import Support_3 from '../Support_3/Support_3';
import Comments_4 from '../Comments_4/Comments_4';
import Review_5 from '../Review_5/Review_5'
import ThankYou_6 from '../ThankYou_6/ThankYou_6';
import Admin from '../Admin/Admin'
import { BrowserRouter } from 'react-router-dom';
import { Routes } from 'react-router';
import { Route } from 'react-router';
import axios from 'axios';
import { useDispatch } from 'react-redux'

function App() {

  useEffect( ()=>{
    getSurveyResults();
  }, []);

  const dispatch = useDispatch()

  const getSurveyResults = () => {
    axios.get( '/api/admin' ).then( (response)=>{
      dispatch( {type: 'SET_RESULTS', payload:response.data} );
    }).catch((err)=>{
      alert('GET call error');
      console.log(err);
    })
  }

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
            <Route path="/review" element={<Review_5 />} ></Route>
            <Route path="/thankyou" element={<ThankYou_6 />} ></Route>
            <Route path="/admin" element={<Admin />} ></Route>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
