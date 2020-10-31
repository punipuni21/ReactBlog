import { Container, FormControl, Form, NavDropdown, Grid, Row, Col, Nav, Navbar, Button } from "react-bootstrap";
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";

const Page001 = () => <p>Page001</p>
const Page002 = () => <p>Page002</p>
const Page003 = () => <p>Page003</p>

function Navigation(){
	return (
		<div className="navigation">
			<BrowserRouter>
				<div className="navigation2">
					<Navbar bg="dark" variant="dark">
						<LinkContainer to='/'>
						<Navbar.Brand  href="#home">Contents</Navbar.Brand>
						</LinkContainer>

						<Nav className="mr-auto">
							<LinkContainer to='/page001'>
								<Nav.Link href="#home">Home</Nav.Link>
							</LinkContainer>
							<LinkContainer to='/page002'>
								<Nav.Link href="#features">Portfolio</Nav.Link>
							</LinkContainer>
							<LinkContainer to='/page003'>
								<Nav.Link href="#pricing">Blogs</Nav.Link>
							</LinkContainer>
						</Nav>
						<Form inline>
							<FormControl type="text" placeholder="Search" className="mr-sm-2" />
							<Button variant="outline-info">Search</Button>
						</Form>
					</Navbar>
					<br />
				</div>
				<Container>
					<Switch>
						<Route exact path='/page001' component={Page001} />
						<Route exact path='/page002' component={Page002} />
						<Route exact path='/page003' component={Page003} />
					</Switch>
				</Container>
			</BrowserRouter>
		</div>
	);
}
export default Navigation;