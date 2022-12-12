import ReactDOM from "react-dom";
// import { ReactDOM } from "react";

function Modal(props) {
  const portalElement = document.getElementById("overlays");
  const flag = props.flag;
  function canselHandeler() {
    props.modalHandler(false);
  }
  return (
    <>
      {flag &&
        ReactDOM.createPortal(
          <div>
            <div className="backdrop" onClick={canselHandeler} />
            <div className="modal">
              <div className="flex-row x" onClick={canselHandeler}>
                X
              </div>
              <br />
              {props.children}
            </div>
          </div>,
          portalElement
        )}
    </>
  );
}

export default Modal;
