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

  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Header title={title} />

        <div className='py-8'>
          <Outlet />
        </div>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />

        <Footer />
      </body>
    </html>
  );
}
