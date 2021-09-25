import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavItem, NavbarBrand, Container } from "reactstrap";
import styled from "styled-components";

const Button = styled(Link)`
  /* display: inline-block; */
  text-decoration: none;
  outline: none;
  border: none;
  border-radius: 4px;
  color: #fff;
  background: #03c75a;
  cursor: pointer;
  font-weight: bold;
  padding: 0.5rem 1rem;
  width: 4rem;
  line-height: 2.25rem;
  height: 2.25rem;
  font-size: 1rem;
  transition: background 0.5s ease-in-out, color 0.5s ease-in-out;

  &:hover {
    background: #03c75a;
    color: #fff;
  }
`;

export default function Heading() {
  return (
    <Navbar color="dark" dark>
      <Container>
        <NavbarBrand href="/board">게시판</NavbarBrand>
        <Nav>
          <NavItem>
            <Button to="/board/write">글 작성</Button>
          </NavItem>
        </Nav>
      </Container>
    </Navbar>
  );
}
