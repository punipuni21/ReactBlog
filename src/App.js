import logo from './logo.svg';
import './App.css';
import { FormControl, Form, NavDropdown, Grid, Row, Col, Nav, Navbar, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";


function App() {

  
  return (
    <div className="App">
        <div className="navigation2">
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand  href="#home">Contents</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Portfolio</Nav.Link>
            <Nav.Link href="#pricing">Blogs</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-info">Search</Button>
          </Form>
        </Navbar>
        <br />
      </div>
      <div className="content">
        ここに本文とかを書く
      </div>
    </div>
  );
}

export default App;
