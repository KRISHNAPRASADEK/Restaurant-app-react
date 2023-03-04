import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

function Header() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">
          <img
            alt=""
            src="https://www.seekpng.com/png/full/201-2018208_clipart-restaurant-icon-restaurant-symbol-white-png.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
          &nbsp; Food Corner
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Header;
