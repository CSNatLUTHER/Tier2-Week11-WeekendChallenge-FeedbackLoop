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
// creating a global variable "pizza", that is given a state and action 
// every time an action takes place, it will run the reducer
const feedback = (state = {
                    feelings:0,
                    content: 0,
                    support:0,
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
    return state;
  }; // end pizzaListReducer

  
  // a store
  const storeInstance = createStore(
      combineReducers(
        {
          feedback
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
