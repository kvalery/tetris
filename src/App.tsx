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
import { gameAdd, gameStart } from './redux/actions/gameActions';
import { store } from './redux/store';

function App() {
  // список роутов
  const routsApp = routs;

  // ссылка на стор
  const storeApp = store;

  const dispatch = useDispatch()

  const game = useSelector(state => state)

  console.log('', game)

  // получить данные state
  // const state = store.getState()

  // // создание стора вызов createStore()
  // const appStore: any = store;


  // const game = useSelector(state => state.game)
  // console.log('', state )
  // console.log('', store, routs)


  // const isLoggedIn = useSelector((state: any) => state.game(1) );

  // const dispatch = store.dispatch(  )
  // const game = useSelector(state => state.game)

  // const isLoggedIn = useSelector(() => {
  //   return console.log('sss',)
  // });

  // подписка на изменение стора
  store.subscribe(() => console.log('-----', store.getState() ) )

  function testTest() {
    console.log('testTest dispatch',)
    dispatch(gameAdd())

    // store.dispatch( gameStart())
  }

  return (
    <div id="App">

      <button onClick={testTest}>test</button>

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
