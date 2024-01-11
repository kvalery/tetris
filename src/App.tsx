import React from 'react';
import 'normalize.css';
import './styles/App.scss';

import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import {
  Route,
  Link, BrowserRouter,
  Routes
} from "react-router-dom";
import { routs } from './router/routs';

/** главный компонент приложения */
function App() {

  /** получаем список роутов для отображения в навигации */
  const routsApp = routs;

  return (
    <div id="App">
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand>TETRIS by React</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {routsApp.map( (rout, index:number) =>{
              return <Nav.Link key={index} as={Link} to={rout.path}>{rout.title}</Nav.Link>
            })}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    { /* Основной контент */}
    <Container>
    <Row>
      <Routes>
        {routsApp.map((rout, index:number) => {
          return <Route key={index} path={ rout.path } element={ rout.element }/>
        })}
      </Routes>
    </Row>
  </Container>
  </div>
  );
}

export default App;
