import Image from "../../assets/user-photo.avif";
import { FcGallery } from "react-icons/fc";
import "./createPost.css";
import React, { useState } from "react";
import ModalLayout from '../../components/modal/ModalLayout'
import CreatePostModal from '../modal/CreatePostModal'
import AddPhotoVideoModal from "../modal/AddPhotoVideoModal";


const CreatePost = ({addNewPost}) => {
  const [showModal, setShowModal] = useState(false);
  const [showPhotoVideo,setPhotoVideo]=useState(false);

  function openPostModal() {
    setShowModal(true);
  }

  const closePostModal = () => {
    setShowModal(false);
  };

  const openPhotoVideoModal=() =>{
    setPhotoVideo(true);
  }

  const closePhotoVideoModal=() =>{
    setPhotoVideo(false);
  }
  return (
    <div className="createPost-container">
      <div className="input-container">
        <div className="user-photo">
          <img src={Image} alt=""></img>
        </div>
        <button className="createPost-btn" onClick={openPostModal}>
          Start a post...
        </button>
        <ModalLayout
          showModal={showModal}
          //   data={
          //     <>
          //       <CreatePostModal closeModal={closeModal}></CreatePostModal>
          //     </>
          //   }
        >
          <>
            <CreatePostModal openPostModal={openPostModal} closePostModal={closePostModal} addNewPost={addNewPost}></CreatePostModal>
          </>
        </ModalLayout>

        <ModalLayout showModal={showPhotoVideo}>
          <AddPhotoVideoModal closePhotoVideoModal={closePhotoVideoModal}></AddPhotoVideoModal>
        </ModalLayout>

        
      </div>

      <button className="photo-video" onClick={openPhotoVideoModal}>
        <FcGallery className="gallery-icon" />
        <div>Photo/Video</div>
      </button>
    </div>
  );
};

export default CreatePost;


