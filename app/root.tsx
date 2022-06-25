import type { LinksFunction, MetaFunction } from '@remix-run/node';
// @ts-ignore
import styles from './styles/index.css';
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';

export const links: LinksFunction = () => {
  return [{ rel: 'stylesheet', href: styles }];
};

export const meta: MetaFunction = () => ( {
  charset: 'utf-8',
  title: 'smallkirby.xyz',
  viewport: 'width=device-width,initial-scale=1',
} );

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
