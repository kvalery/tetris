import Maine from '../pages/Main';
import About from '../pages/About';

export const routs = [
  // главная страница
  {
    path: '/',
    title: 'Game!',
    element: <Maine/>,
  },
  // страница описния
  {
    path: '/about',
    title: 'about me',
    element: <About/>,
  }
];
