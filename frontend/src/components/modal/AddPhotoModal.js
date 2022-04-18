import { FaTimes } from "react-icons/fa";
import React, { useRef, useState } from "react";
// import { update } from "tar";
const AddPhotoModal = ({ openPostModal, closePhotoModal,updateMedia}) => {
  const inputFile = useRef(null);

  const [media, setMedia] = useState();

  const handleMediaChange= (e) => {
    console.log(e.target.files);
    setMedia(e.target.files[0]);
  };

  const addMediaToPost= () =>{
    updateMedia(media);
    closePhotoModal();
  }
  const onClick = (e) => {
    inputFile.current.click();
  };
  return (
    <div className="modal-container">
      <div className="modal-header">
        <div>Add your photos</div>
        <button className="close-button">
          <FaTimes onClick={closePhotoModal} className="closeIcon"></FaTimes>
        </button>
      </div>

      <div className="modal-body selectImagesBody">
        <input
          accept="image/jpeg,image/png"
          type="file"
          id="file"
          onChange={handleMediaChange}
          ref={inputFile}
          style={{ display: "none" }}
        />
        {media ? (
          <div className="post-image">
          <img src={URL.createObjectURL(media)}></img>
          </div>
        ) : (
          <div className="selectImages" onClick={onClick}>
            <h5>Select images to share</h5>
          </div>
        )}
      </div>

      <div className="modal-footer">
        <div className="back-done">
          <button className="back-button" onClick={closePhotoModal}>
            Back
          </button>
          <button className="done-button" onClick={addMediaToPost}>Done</button>
        </div>
      </div>
    </div>
  );
};

export default AddPhotoModal;
