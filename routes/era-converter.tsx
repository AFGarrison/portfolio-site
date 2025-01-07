import { RouteConfig } from "$fresh/server.ts";
import ConverterSearch from "../islands/converter-search.tsx";

export const config: RouteConfig = {
  skipAppWrapper: true,
};

export default function EraConverter() {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Japanese Year Converter</title>
        <link rel="stylesheet" href="/converter-styles.css" />
      </head>
      <body>
        <ConverterSearch />
      </body>
    </html>
  );
}
