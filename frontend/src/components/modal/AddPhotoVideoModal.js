import { FaTimes } from "react-icons/fa";
const AddPhotoVideoModal = ({openPostModal, closePhotoVideoModal}) => {
// const handleBackClick =() =>{
//     closePhotoModal();
//     showPostModal();
// }
    return (
    <div className="modal-container">
      <div className="modal-header">
        <div>Add your photos/video</div>
        <button className="close-button"><FaTimes onClick={closePhotoVideoModal} className='closeIcon'></FaTimes></button>
      </div>

      <div className="modal-body selectImagesBody">
          <div className="selectImages"><h5>Select images/video to share</h5></div>
      </div>

      <div className="modal-footer">
          <div className="back-done">
          <button className="back-button" onClick={closePhotoVideoModal}>Back</button>
          <button className="done-button">Done</button>
          </div>
          
      </div>
    </div>
  );
};

export default AddPhotoVideoModal;
