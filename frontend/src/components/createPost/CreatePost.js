import Image from "../../assets/user-photo.avif";
import { FcGallery } from "react-icons/fc";
import "./createPost.css";
import React, { useState } from "react";
import ModalLayout from '../../components/modal/ModalLayout'
import CreatePostModal from '../modal/CreatePostModal'



const CreatePost = ({addNewPost}) => {
  const [showModal, setShowModal] = useState(false);
  const [showPhotoVideo,setPhotoVideo]=useState(false);

  function openPostModal() {
    setShowModal(true);
  }

  const closePostModal = () => {
    setShowModal(false);
  };


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


        
      </div>

      <button className="photo-video" onClick={openPostModal}>
        <FcGallery className="gallery-icon" />
        <div>Photo/Video</div>
      </button>
    </div>
  );
};

export default CreatePost;


