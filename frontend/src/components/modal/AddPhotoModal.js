import { FaTimes } from "react-icons/fa";
import React, { useRef, useState } from "react";
import axios from "axios";

// import { update } from "tar";
const AddPhotoModal = ({ openPostModal, closePhotoModal, updateMedia }) => {
  const inputFile = useRef(null);

  const [media, setMedia] = useState();

  const handleMediaChange = (e) => {
    setMedia(e.target.files[0]);
  };

  const uploadImage = async () => {
    const formData = new FormData();
    formData.append("file", media);
    formData.append("upload_preset", "buzz-app");

    const res = await axios.post(
      "https://api.cloudinary.com/v1_1/myphotoscloud/image/upload",
      formData
    );


    updateMedia(res.data.url);
    setMedia(res.data.url);

    return res;
  };

  const addMediaToPost = async () => {
    await uploadImage();
    closePhotoModal();
  };

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
          <button className="done-button" onClick={addMediaToPost}>
            Done
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddPhotoModal;
