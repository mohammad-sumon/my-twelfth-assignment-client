import React from "react";

const ConfirmationModal = ({
  title,
  closeModal,
  deleteUser,
  modalData,
  successButtonName,
}) => {
  return (
    <div>
      <input type="checkbox" id="confirmation-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">{title}</h3>
          <p className="py-4"></p>
          <div className="modal-action">
            <label
              onClick={() => deleteUser(modalData)}
              htmlFor="confirmation-modal"
              className="btn btn-primary"
            >
              {successButtonName}
            </label>
            <button onClick={closeModal} className="btn btn-outline btn-accent">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
