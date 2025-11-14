import styled, { css } from "styled-components";

const Row = styled.div`
  display: flex;

  ${(props) =>
    // If props.type is "horizontal", apply this CSS; otherwise do nothing. Defaults to "vertical" if undefined.

    (props.type ?? "vertical") === "horizontal" &&
    css`
      justify-content: space-between;
      align-items: center;
    `}

  ${(props) =>
    (props.type ?? "vertical") === "vertical" &&
    css`
      flex-direction: column;
      gap: 1.6rem;
    `}
`;

export default Row;
