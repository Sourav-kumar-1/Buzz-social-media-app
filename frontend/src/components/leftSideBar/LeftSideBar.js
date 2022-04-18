import RecentGroupSubs from "../recentGroupSubs/RecentGroupSubs";
import AboutUser from "../aboutUser/AboutUser";
import './leftSideBar.css'
const LeftSideBar =() =>{
    const style={
        "width":'300px',
    }
    return(
        <div className="leftSideBar-container">
            <AboutUser></AboutUser>
            <RecentGroupSubs></RecentGroupSubs>
        </div>
    )
}

export default LeftSideBar;