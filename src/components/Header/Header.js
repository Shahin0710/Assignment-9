import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <>
      <Navbar fixed="top" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <NavLink className='text-warning fs-3 fw-bold link-path' to='/'>
                Quick Quiz
            </NavLink>
          </Navbar.Brand>
          <Nav className="justify-content-end">
            <Nav.Link>
              <NavLink className='text-white link-path' to='/'>
                Topic
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink className='text-white link-path' to='/statistic'>
                Statistic
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink className='text-white link-path' to='/blog'>
                Blog
              </NavLink>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
