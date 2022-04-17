import { MdArrowDropDown } from "react-icons/md";
import './sortByButton.css'
const SortByButton = () => {
  return (
    <div className="sortButton-container">
      <label>Sort by :</label>
      <select className="sort">
        <option value="volvo">Top</option>
        <option value="saab">Recent</option>
      </select>
    </div>
  );
};

export default SortByButton;
