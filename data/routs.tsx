import type { RouteEntry } from 'typings/route';
import Index from 'app/routes/index';
import About from 'app/routes/about';
import Likes from 'app/routes/likes';
import Dislikes from 'app/routes/dislikes';
import Pronunciation from 'app/routes/pronunciation';

export const routeEntries: RouteEntry[] = [
  {
    name: 'index',
    url: '/',
    component: () => <Index preRender={true}/>,
  },
  {
    name: 'about',
    url: '/about',
    component: () => <About preRender={true}/>,
  },
  {
    name: 'likes',
    url: '/likes',
    component: () => <Likes preRender={true}/>,
  },
  {
    name: 'dislikes',
    url: '/dislikes',
    component: () => <Dislikes preRender={true}/>,
  },
  {
    name: 'pronunciation',
    url: '/pronunciation',
    component: () => <Pronunciation preRender={true}/>,
  },
];
