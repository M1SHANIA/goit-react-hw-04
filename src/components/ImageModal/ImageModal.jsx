import Modal from "react-modal";
import css from "./ImageModal.module.css";

const customStyles = {
  content: {
    padding: "0",
    background: "unset",
    overflow: "unset",
    border: "none",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

export const ImageModal = ({ isOpen, photo, onRequestClose }) => {
  if (!photo) {
    return null;
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName={css.overlay}
      style={customStyles}
    >
      <button className={css.closeButton} onClick={onRequestClose}>
        x
      </button>
      <img
        src={photo.urls.regular}
        alt={photo.alt_description}
        className={css.imageModal}
      />
    </Modal>
  );
};

export default ImageModal;
