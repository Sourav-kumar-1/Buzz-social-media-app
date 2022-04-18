import './rightSideBar.css'
import Suggestion from '../suggestion/Suggestion.js'
import Contacts from '../contacts/Contacts'

const RightSideBar = () => {
 const contacts="Contacts";
 const suggestions="Suggestions";
    return (
        <div className="rightSideBar-container">
            <Suggestion title={contacts}></Suggestion>
            <Suggestion title={suggestions}></Suggestion>
            {/* <div><Contacts title={contacts}></Contacts></div>
            <div><Contacts title={suggestions}></Contacts></div> */}
        </div>
    )
}

export default RightSideBar