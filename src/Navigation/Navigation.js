import { Container, FormControl, Form, Nav, Navbar, Button } from "react-bootstrap";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { React, Component } from 'react';
import { LinkContainer } from 'react-router-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";
import './Navigation.css';
import Portfolio from "../Portfolio/Portfolio";
import Home from "../Home/Home";
import Blogs from "../Blogs/Blogs"
import Contents from "../Contents/Contents"

class Navigation extends Component{

	render(){
		return (
			<div className="Navigation">
				<BrowserRouter>
					<div className="NavigationVar">
						<Navbar bg="dark" variant="dark">
							<LinkContainer to='/'>
							<Navbar.Brand className="Navbar-brand" href="#home">Contents</Navbar.Brand>
							</LinkContainer>
							<Nav className="mr-auto">
								<LinkContainer to='/home'>
									<Nav.Link href="#home">Home</Nav.Link>
								</LinkContainer>
								<LinkContainer to='/portfolio'>
									<Nav.Link href="#features" >Portfolio</Nav.Link>
								</LinkContainer>
								<LinkContainer to='/blogs'>
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
							<Route exact path='/' component={Contents} />
							<Route exact path='/home' component={Home} />
							<Route exact path='/portfolio' component={Portfolio} />
							<Route exact path='/blogs' component={Blogs} />
						</Switch>
					</Container>
				</BrowserRouter>
			</div>
		);
	}
}

export default Navigation;