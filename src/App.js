import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import './App.css';
import Main from './component/Main/Main';
import User from "./component/profile/user/user";
import Userprofile from "./component/profile/userprofile/userprofile";
import SignIn from './component/SignIn/SignIn';
import Signup from './component/signup/signup';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/user" element={<User/>}/>
          <Route path="/userprofile" element={<Userprofile/>}/>
        </Routes>
      </Router >
    </div >
  )
}

export default App;
