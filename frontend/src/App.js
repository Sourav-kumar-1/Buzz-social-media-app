import Feed from './containers/Feed';
// import './App.css';
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
       <Routes>
        <Route path="feed" element={<Feed />} />
      </Routes>
    </div>
  );
}

export default App;
