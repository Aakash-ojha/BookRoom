import React, {
  cloneElement,
  createContext,
  useContext,
  useEffect,
  useState,
  useRef,
} from "react";
import styled from "styled-components";
import Button from "./Button";
import { IoMdClose } from "react-icons/io";
import { createPortal } from "react-dom";

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: var(--backdrop-color);

  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3.2rem 4rem;
  z-index: 999;
  opacity: 1;
`;
const Container = styled.div`
  background: #fff;
  max-width: 100%;
  padding: 24px;
  border-radius: 12px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
  position: relative;
`;

const CloseBtn = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 22px;
`;

const ModalContext = createContext();

function Modal({ children }) {
  const [openName, setOpenName] = useState("");

  const openModal = (name) => {
    setOpenName(name);
  };

  const closeModal = () => {
    setOpenName("");
  };

  return (
    <ModalContext.Provider value={{ openName, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
}

function Open({ children, opens }) {
  const { openModal } = useContext(ModalContext);

  return React.cloneElement(children, { onClick: () => openModal(opens) });
}

function Close({ children }) {
  const { closeModal } = useContext(ModalContext);

  return React.cloneElement(children, { onClick: () => closeModal() });
}

function Window({ children, name }) {
  const ref = useRef();

  const { openName, closeModal } = useContext(ModalContext);

  useEffect(
    function () {
      function handleClick(e) {
        if (ref.current && !ref.current.contains(e.target)) {
          console.log("click all");
          closeModal();
        }
      }

      function handleKeyDown(e) {
        if (e.key === "Escape") {
          closeModal();
        }
      }

      document.addEventListener("click", handleClick, true);
      document.addEventListener("keydown", handleKeyDown);

      return () => {
        document.removeEventListener("click", handleClick, true);
        document.removeEventListener("keydown", handleKeyDown);
      };
    },
    [closeModal]
  );

  if (name !== openName) return null;
  return createPortal(
    <Overlay>
      <Container ref={ref}>
        <CloseBtn onClick={closeModal}>
          <IoMdClose />
        </CloseBtn>

        <div>{cloneElement(children, { onCloseModal: closeModal })}</div>
      </Container>
    </Overlay>,
    document.body
  );
}

Modal.Open = Open;
Modal.Close = Close;
Modal.Window = Window;

export default Modal;
