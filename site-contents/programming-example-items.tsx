
import { JSX } from "preact/jsx-runtime";
import { actionBlock } from "../interfaces/interfaces.ts";

const noAction: JSX.Element = <p>To see the code in action, please contact me for a demo.</p>;

const eraConverter: actionBlock = {
    name: "Era Converter",
    details: "Built with Typescript",
    picture: "/pictures/era-converter.png",
    description: [
        `This program converts between years in the western system and the Japanese "Nengo" era system.`,
        `It covers every year that falls within a Japanese era, and can search in both English and Japanese.`
    ],
    action: (<div>
        <a href="/era-converter">
            <button type="button">Try it out</button>
        </a>
    </div>)
}

const photoViewer: actionBlock = {
    name: "Web Photo Viewer",
    details: "Built with Node.js",
    picture: "",
    description: [
        `This is a webpage that displays photos in order of date taken.`,
        `It uses express.js and the Pug template engine to build the web server and front end.`,
        `I use it at home to allow for the backup and viewing of family photos.`
    ],
    action: noAction
}

const webScraper: actionBlock = {
    name: "Web Scraper",
    details: "Built with Python",
    picture: "",
    description: [
        `This is a web scraper designed to pick up information from Wikipedia articles and converted into a text file.`,
        `The program makes use of the BeautifulSoup library in order to access the designated page(s) and data.`
    ],
    action: noAction
}

export const programmingList = [eraConverter, photoViewer, webScraper];