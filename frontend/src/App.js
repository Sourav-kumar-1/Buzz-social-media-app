import Feed from './containers/Feed';
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
  useNavigate,
} from "react-router-dom";
import PrivateRoute from './PrivateRoute';

function App() {
 
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/user/:username" element={
          <PrivateRoute>
            <User />
          </PrivateRoute>
          } />

          <Route path="/userprofile" element={
            <PrivateRoute>
              <Userprofile />
            </PrivateRoute>
          } />

          <Route exact path="/feed" element={
            <PrivateRoute>
              <Feed />
            </PrivateRoute>
          } />
        </Routes>
      </Router >

    </div>
  );
}

export default App;

