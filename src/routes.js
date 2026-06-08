import routesPaths from './constants/routesPaths';
import HomePageMgBludcode from './components/pages/HomePageMgBludcode';
import NotFoundPage from './components/pages/NotFoundPage';

const routes = [
  {
    path: routesPaths.index,
    component: HomePageMgBludcode,
    exact: true
  },
  {
    path: routesPaths.mgLanding,
    component: HomePageMgBludcode,
    exact: true
  },
  {
    component: NotFoundPage
  }
];

export default routes;
