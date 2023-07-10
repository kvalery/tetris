import React from 'react';
import 'normalize.css';
import './styles/App.scss';
import Button from 'react-bootstrap/Button';
import Stack  from 'react-bootstrap/Stack';
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import Maine from './pages/Main';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link, BrowserRouter,
  Routes
} from "react-router-dom";
import { routs } from './router/routs';
import About from './pages/About';

function App() {
  // список роутов
  const routsList = routs;

  return (
    <div id="App">
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand>TETRIS by React</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {routs.map(rout =>
              <Nav.Link as={Link} to={rout.path}>{rout.title}</Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Container>
      <Row>
        <Routes>
          {routs.map(rout =>
            <Route path={rout.path} element={rout.element} />
          )}
        </Routes>
      </Row>
    </Container>
  </div>
  );
}

export default App;
