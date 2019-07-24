import React from 'react';
import './App.css';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store';
import setAuthToken from './utils/setAuthtoken';
import jwt_decode from 'jwt-decode';
import { setCurrentUser, logoutUser } from './actions/authActions';

//Check for token
if (localStorage.jwtToken){
  // set auth token header
  setAuthToken(localStorage.jwtToken);
  // Decode
  const decoded = jwt_decode(localStorage.jwtToken);
  //set user isauthenticated
  store.dispatch(setCurrentUser(decoded));

  //Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    //Logout user
    store.dispatch(logoutUser());
    //Clear current profile

    //Redirect the user to login
    window.location.href = '/login';
  } 
}

function App() {
  return (
    <Provider store={store}>
    <Router>
        <div className="App">
           <h1>Instagram App</h1>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
