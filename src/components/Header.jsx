import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>      
      <Navbar expand="lg" bg="dark" variant='dark' >
      <Container fluid>
        <Navbar.Brand href="#">
          <img src="https://images.ctfassets.net/4cd45et68cgf/7LrExJ6PAj6MSIPkDyCO86/542b1dfabbf3959908f69be546879952/Netflix-Brand-Logo.png?w=700&h=456" alt='로고이미지' width={'190px'}></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px'}}
            navbarScroll>
            <Link className='nav-item' to={"/"}>Home</Link>
            <Link className='nav-item' to={"/movies"}>Movies</Link>
            {/* <Link to={'/'} /> */}
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="검색할 영화명을 입력"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="danger">search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </div>
  )
}

export default Header