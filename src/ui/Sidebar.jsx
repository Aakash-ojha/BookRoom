import React from "react";
import styled from "styled-components";
import Logo from "./Logo";

const StyledSidebar = styled.aside`
  background-color: var(--color-grey-0);
  padding: 3.2rem 2.4rem;
  border-radius: 1px solid var(--color-gray-100);

  grid-row: 1/3;
`;

const Sidebar = () => {
  return (
    <StyledSidebar>
      <Logo />
    </StyledSidebar>
  );
};

export default Sidebar;
