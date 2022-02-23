import React from "react";

const Modal = ({ onClose, currentPhoto }) => {
  const { name, description, caption, github, deployment, index } =
    currentPhoto;

  return (
    <div className="modalBackdrop">
      <div className="modalContainer">
        <h3 className="modalTitle">{name} </h3>
        {/* text box */}
        <img
          src={require(`../../assets/large/${index}.jpg`).default}
          alt="caption"
        />
        <p>{description}</p>
        <a
          className="modal-button"
          target="_blank"
          href={github}
          rel="noreferrer"
        >
          GitHub Repo
        </a>
        <a
          className="modal-button"
          target="_blank"
          href={deployment}
          rel="noreferrer"
        >
          Deployed Application
        </a>
        <button type="button" onClick={onClose}>
          CLOSE
        </button>
      </div>
    </div>
  );
};

export default Modal;
