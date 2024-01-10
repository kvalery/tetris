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
import { useDispatch, useSelector, } from 'react-redux';
import { gameAdd, gameStart } from './store/actions/gameActions';
import { store } from './store';
import { gameReducer } from './store/redusers/gameReducer';

/** главный компонент приложения */
function App() {

  /** получаем список роутов для отображения в навигации */
  const routsApp = routs;

  // ссылка на стор
  // const storeApp = index;
  const dispatch = useDispatch()

  const game = useSelector(state => state)

  // подписка на изменение стора
  store.subscribe(() => console.log('-----', store.getState() ) )

  function testTest() {
    console.log('testTest dispatch',)
    dispatch(gameAdd())

    // index.dispatch( gameStart())
  }

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
