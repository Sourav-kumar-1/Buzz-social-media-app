import Feed from './containers/Feed';
// import './App.css';
import React from 'react';
import Main from './components/Main/Main';
import User from "./components/profile/user/user";
import Userprofile from "./components/profile/userprofile/userprofile";
import SignIn from './components/SignIn/SignIn';
import Signup from './components/signup/signup';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/user/:username" element={<User />} />
          <Route path="/userprofile" element={<Userprofile />} />
        <Route path="/feed" element={<Feed />} />
        </Routes>
      </Router >
      
    </div>
  );
}

export default App;
