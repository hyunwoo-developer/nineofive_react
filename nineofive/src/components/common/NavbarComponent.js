import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NavWrap = styled.div`
  padding: 10px 30px;
  display: flex;
  border-bottom: 1px solid #000;
`;

const LinkWrap = styled.div`
  font-size: 16px;
  font-weight: bolder;
  display: flex;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #000;
  margin-right: 10px;
  &:hover {
    color: hotpink;
  }
`;

export default function NavbarComponent() {
  return (
    <>
      <NavWrap>
        <LinkWrap>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/signin">Sign In</StyledLink>
          <StyledLink to="/signup">Sign Up</StyledLink>
          <StyledLink to="/board">Board</StyledLink>
          <StyledLink to="/gallery">Gallery</StyledLink>
          <StyledLink to="/todos">Todos</StyledLink>
        </LinkWrap>
      </NavWrap>
    </>
  );
}
