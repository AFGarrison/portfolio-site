import { RouteConfig } from "$fresh/server.ts";
import Footer from "../components/footer.tsx";
import ConverterSearch from "../islands/converter-search.tsx";
import InfoBox from "../islands/info-box.tsx";

export const config: RouteConfig = {
  skipAppWrapper: true,
};

export default function EraConverter() {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Japanese/Western Year Converter</title>
        <link rel="stylesheet" href="/converter-styles.css" />
      </head>
      <body>
        <div id="header" className="center-text">
          <h1>Japanese-Western Year Converter</h1>
        </div>
        <div className="contents-margin">
          <InfoBox />
          <div id="contents-section">
            <p>
              Input a year in either the Western system (e.g. 2025) or the
              Japanese era system (e.g. Heisei 4) to see its equivalent in the
              opposite system. Both English and Japanese inputs are accepted.
            </p>
            <ConverterSearch />
          </div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
