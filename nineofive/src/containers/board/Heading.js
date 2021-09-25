import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavItem, NavbarBrand, Container } from "reactstrap";

export default function Heading() {
  return (
    <Navbar color="dark" dark>
      <Container>
        <NavbarBrand href="/board">게시판</NavbarBrand>
        <Nav>
          <NavItem>
            <Link className="btn btn-primary" to="/board/write">
              글 작성
            </Link>
          </NavItem>
        </Nav>
      </Container>
    </Navbar>
  );
}
