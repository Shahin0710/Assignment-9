import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <>
      <Navbar fixed="top" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <span className='text-warning fs-3 fw-bold'>Quick Quiz</span>
          </Navbar.Brand>
          <Nav className="justify-content-end">
            <Nav.Link href="#home"><span className='text-white'>Topic</span></Nav.Link>
            <Nav.Link href="#features"><span className='text-white'>Statistic</span></Nav.Link>
            <Nav.Link href="#pricing"><span className='text-white'>Blog</span></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
