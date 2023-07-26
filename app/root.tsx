import { LiveReload, Outlet, Links } from "@remix-run/react";
import { LinksFunction } from "@remix-run/node";
import globalStylesUrl from '~/styles/global.css';
import globalMediumStylesUrl from '~/styles/global-medium.css';
import gloalLargeStylesUrl from '~/styles/global-large.css';

export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: globalStylesUrl },
    { rel: "stylesheet", href: globalMediumStylesUrl, media: "print, (min-width: 640px)" },
    { rel: "stylesheet", href: gloalLargeStylesUrl, media: "screen and (min-width: 1024px)" },
  ];
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <title>Remix: So great, it's funny!</title>
        <Links />
      </head>
      <body>
        <Outlet />
        <LiveReload />
      </body>
    </html>
  );
}
