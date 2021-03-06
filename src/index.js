import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';
//import redux
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger'; //this essentially acts as a console log 
import registerServiceWorker from './registerServiceWorker';

// reducer

  const feedback = (state = {
                    feelings:'',
                    content: '',
                    support:'',
                    comments:''
                        }, 
                 action) => {
    console.log('feedback payload:', action.payload);
    if(action.type === 'UPDATE_FEELINGS'){
        state = {...state, feelings:action.payload};
        return state;
    }
    else if(action.type === 'UPDATE_CONTENT'){
        state = {...state, content:action.payload};
        return state;
    }
    else if(action.type === 'UPDATE_SUPPORT'){
        state = {...state, support:action.payload};
        return state;
    }
    else if(action.type === 'UPDATE_COMMENTS'){
        state = {...state, comments:action.payload};
        return state;
    }
    else if(action.type === 'CLEAR_VALUES'){
      state = {
        feelings:'',
        content: '',
        support:'',
        comments:''
            }
      return state;
    }
    return state;
  }; // end feedback reducer
  
  const surveyResults = (state = [], action) => {
    if (action.type === 'SET_RESULTS'){
      state = action.payload;
      return state;
    }
    return state;
  }

  // a store
  const storeInstance = createStore(
      combineReducers(
        {
          feedback,
          surveyResults
        }
      ),
      applyMiddleware(
        logger
      )
    );
  
  
  
  
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={storeInstance}>
        <App />
      </Provider>
    </React.StrictMode>,
    document.getElementById('root'));
  
reportWebVitals();
registerServiceWorker();
