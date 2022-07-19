import type { RouteEntry } from 'typings/route';
import Index from 'routes/index';
import About from 'routes/about';
import Likes from 'routes/likes';
import Dislikes from 'routes/dislikes';
import Pronunciation from 'routes/pronunciation';
import Trash from 'routes/trash';
import Sotsuron from 'routes/sotsuron';
import Resume from 'routes/resume';

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
  {
    name: 'trash',
    url: '/trash',
    component: () => <Trash preRender={true}/>,
  },
  {
    name: 'sotsuron',
    url: '/sotsuron',
    component: () => <Sotsuron preRender={true}/>,
  },
  {
    name: 'resume',
    url: '/resume',
    component: () => <Resume preRender={true}/>,
  },
];
