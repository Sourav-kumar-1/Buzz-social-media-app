import React from "react";
import Userprofile from "../profile/userprofile/userprofile";
/* import { SearchIcon } from "@primer/octicons-react"; */
import Data from "./dummydata.json";
import { useNavigate } from 'react-router-dom'
import "./suggestion.css";
function Suggestion({title}) {
  return (
  
    
    
    <div className="suggestion-box">
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand"><h3>{title}</h3></a>
        </div>
      </nav>
      <div className="data">
        {Data.map((data, idx) => {
          return <><SingleUser key={idx} data={data} title={title}></SingleUser></>;
        })}
      </div>
    </div>
  );
}

export default Suggestion;

const SingleUser = ({data,title}) => {
  

  const navigate = useNavigate()
  return (

    <div className="username">
      <button className="bt" onClick={() => navigate("/userprofile", { replace: true })}><img
        className="image"
        src={require("./" + data.profilePicture)}
        alt="img not found"
      />{" "}
      {data.username}
      {title === 'Suggestions' ? <><button className="bton" >+ Friend</button></>: <></>}</button>
    </div>
  );
};
