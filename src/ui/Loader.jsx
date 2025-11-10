import styled, { keyframes } from "styled-components";

const rotate = keyframes`
to{
    transform: rotate(360deg);
}
`;

const LoaderWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Load = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 8px solid #3498db;
  border-top: 8px solid transparent;
  animation: ${rotate} 1.5s infinite linear;
`;

export default function Loader() {
  return (
    <LoaderWrapper>
      <Load />
    </LoaderWrapper>
  );
}
