import "./modal.css";

const Modal = ({ showModal, children}) => {
  return (
    <>
      {showModal ? (
        <div className="modal-overlay">
          <div className="modal-container">
           {children}
          </div>
        </div>
      ) : null}
    </>
  );
};
export default Modal;
