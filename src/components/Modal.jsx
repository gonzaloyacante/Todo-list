const Modal = ({ setIsOpenModal, children }) => {
  return (
    <div
      className="modal-overlay"
      onClick={() => setIsOpenModal(false)}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export { Modal };
