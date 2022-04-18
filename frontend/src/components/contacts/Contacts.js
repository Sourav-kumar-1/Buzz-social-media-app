import { BiSearch } from "react-icons/bi";
import { Users } from "../../dummydata";
import "./contacts.css"
import Data from "../suggestion/dummydata.json"
const Contacts = ({ title }) => {


  return (
    <div className="container">
      <div className="header">
        <h4>{title}</h4>
        <div className="search-icon">
          <BiSearch></BiSearch>
        </div>
      </div>

      <div className="user-list">
     
        {Data.map((u,idx)=>(
            <SingleUser u={u} key={idx}></SingleUser>
        ))}
      </div>
    </div>
  );
};

export default Contacts;

const SingleUser = ({u}) =>{
    return(
        <div className="singleUser-details">
        <img className='image' src={require('./' + u.profilePicture)} alt="img not found" /> 
        <div>{u.username}</div>
    </div>
    )
}

