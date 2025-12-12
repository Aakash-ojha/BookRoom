import { Children } from "react";
import styled from "styled-components";
import Button from "./Button";
import { IoMdClose } from "react-icons/io";

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

function Modal({ children, onClose }) {
  return (
    <Overlay>
      <Container>
        <CloseBtn onClick={onClose}>
          <IoMdClose />
        </CloseBtn>
        <div>{children}</div>
      </Container>
    </Overlay>
  );
}

export default Modal;
