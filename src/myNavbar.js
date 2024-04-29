import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar, Container, Nav} from 'react-bootstrap';

export default class MyNav extends Component {
  render() {
    return (
      <Navbar bg="light" expand="lg" sticky="top" variant="light">
        <Container>
          <Navbar.Brand href="http://www.staggeringbeauty.com">Store!</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="landing">Landing Page</Nav.Link>
              <Nav.Link href="products">Products</Nav.Link>
              <Nav.Link href="cart">Shopping Cart</Nav.Link>
              <Nav.Link href="checkout">Check Out</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
  }
}
