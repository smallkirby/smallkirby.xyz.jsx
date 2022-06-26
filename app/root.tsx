import type { LinksFunction, MetaFunction } from '@remix-run/node';
// @ts-ignore
import styles from './styles/index.css';
import { useEffect, useState } from 'react';
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLocation,
} from '@remix-run/react';
import Header from './components/common/header';
import Footer from './components/common/footer';
import TmuxPane from './components/tmux/tmuxPane';
import TmuxOpener from './components/tmux/tmuxOpener';

export const links: LinksFunction = () => {
  return [{ rel: 'stylesheet', href: styles }];
};

export const meta: MetaFunction = () => ( {
  charset: 'utf-8',
  title: 'smallkirby.xyz',
  viewport: 'width=device-width,initial-scale=1',
} );

export default function App() {
  const location = useLocation();
  const [title, setTitle] = useState( 'smallkirby.xyz' );

  useEffect( () => {
    const _title = location.pathname.replace( /^\//, '' );
    if (_title === '') {
      setTitle( 'smallkirby.xyz' );
    } else {
      setTitle(_title ?? 'smallkirby.xyz');
    }
  }, [location.pathname] );

  const [isTmuxOpen, setIsTmuxOpen] = useState( true );

  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Header title={title} />

        <div className='flex h-screen'>
          <div
            className={
              `sticky py-8 px-2 border-r-2 border-[#ebdbb2] overflow-y-scroll overflow-x-scroll
              ${isTmuxOpen ? 'w-1/4' : 'w-10'}`}
          >
            {isTmuxOpen && <TmuxPane />}
            <div className='absolute right-0 top-1/2'>
              <TmuxOpener stateChanged={(open) => setIsTmuxOpen(open)}/>
            </div>
          </div>

          <div className='py-8 px-4 w-full overflow-y-scroll overflow-x-scroll'>
            <Outlet />
          </div>
        </div>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />

        <Footer />
      </body>
    </html>
  );
}
