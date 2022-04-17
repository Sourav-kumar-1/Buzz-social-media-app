import { useState } from "react";
import Image from "../../assets/user-photo.avif";
import { BsCardImage } from "react-icons/bs";
import { RiVideoFill } from "react-icons/ri";
import ModalLayout from "../../components/modal/ModalLayout";
import AddPhotoModal from "./AddPhotoModal";
import AddVideoModal from "./AddVideoModal";
import { FaTimes } from "react-icons/fa";

const CreatePostModal = ({ openPostModal, closePostModal, addNewPost }) => {
  const [showPhoto, setShowPhoto] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const [textInput, seTextInput] = useState("");
  const [media, setMedia] = useState(null);

  const updateMedia = (m) => {
    setMedia(m);
  };

  const openPhotoModal = () => {
    setShowPhoto(true);
  };

  const closePhotoModal = () => {
    setShowPhoto(false);
  };

  const openVideoModal = () => {
    setShowVideo(true);
  };

  const closeVideoModal = () => {
    setShowVideo(false);
  };

  const createNewPost = () => {
    addNewPost(textInput, media);
    closePostModal();
  };

  const handleTextInput = (e) => {
    seTextInput(e.target.value);
  };

  return (
    <>
      <ModalLayout showModal={showPhoto}>
        <AddPhotoModal
          showPostModal={openPostModal}
          closePhotoModal={closePhotoModal}
          updateMedia={updateMedia}
        ></AddPhotoModal>
      </ModalLayout>

      <ModalLayout showModal={showVideo}>
        <AddVideoModal closeVideoModal={closeVideoModal}></AddVideoModal>
      </ModalLayout>

      <div className="modal-header">
        <div>Create a post</div>
        <button className="close-button">
          <FaTimes onClick={closePostModal} className="closeIcon"></FaTimes>
        </button>
      </div>
      <div className="modal-body">
        <div className="user-profile">
          <img src={Image} alt=""></img>
          <h5>Shekhar Agarwal </h5>
        </div>
        <div>
          <textarea
            className="post-inputBox"
            placeholder="What do you want to talk about?"
            rows={10}
            value={textInput}
            onChange={handleTextInput}
          ></textarea>
          {/* {media ? (
            <div className="post-image">
              <img src={URL.createObjectURL(media)}></img>
            </div>
          ) : (
            <></>
          )} */}
        </div>
      </div>
      <div className="modal-footer">
        <div className="modal-icons">
          <BsCardImage
            onClick={openPhotoModal}
            className="photo-btn"
          ></BsCardImage>
          <RiVideoFill
            onClick={openVideoModal}
            className="video-btn"
          ></RiVideoFill>
        </div>
        <button className="post-button" onClick={createNewPost}>
          Post
        </button>
      </div>
    </>
  );
};

export default CreatePostModal;
