const Modal = ({ setIsOpenModal, children }) => {
  return (
    <div
      className="modal-overlay"
      onClick={() => setIsOpenModal(false)}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={() => setIsOpenModal(false)}>
          Cerrar
        </button>
        {children}
      </div>
    </div>
  );
};

export { Modal };
