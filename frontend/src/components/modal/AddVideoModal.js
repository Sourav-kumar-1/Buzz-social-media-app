import { FaTimes } from "react-icons/fa";
import { useRef } from "react";
const AddVideoModal = ({closeVideoModal}) => {

  const inputFile = useRef(null);

  const onClick = (e) => {
    inputFile.current.click();
  };
  
  return (
    <div className="modal-container">
      <div className="modal-header">
        <div>Add your video</div>
        <button className="close-button"><FaTimes onClick={closeVideoModal} className='closeIcon'></FaTimes></button>
      </div>

      <div className="modal-body selectVideoBody">
      <input
          accept="video/mp4,video/x-m4v,video/*"
          type="file"
          id="file"
          ref={inputFile}
          style={{ display: "none" }}
        />
          <div className="selectVideo"><h5>Select video to share</h5></div>
      </div>

      <div className="modal-footer">
          <div className="back-done">
          <button className="back-button" onClick={closeVideoModal}>Back</button>
          <button className="done-button">Done</button>
          </div>
          
      </div>
    </div>
  );
};

export default AddVideoModal;
