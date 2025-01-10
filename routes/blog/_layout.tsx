import { type PageProps } from "$fresh/server.ts";
import { RouteConfig } from "$fresh/server.ts";

export const config: RouteConfig = {
  routeOverride: "/",
  skipAppWrapper: true,
};

export default function App({ Component }: PageProps) {
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Amateur Musings</title>
        <link rel="stylesheet" href="/blog-styles.css" />
      </head>
      <body>
        <Component />
      </body>
    </html>
  );
}
