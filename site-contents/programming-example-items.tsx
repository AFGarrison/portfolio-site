
import { JSX } from "preact/jsx-runtime";
import { actionBlock } from "../interfaces/interfaces.ts";

/*
TODO: create other programming example data points
*/

const noAction: JSX.Element = <p>To see the code in action, please contact me for a demo.</p>;

const eraConverter: actionBlock = {
    name: "Era Converter",
    details: "Built in Typescript",
    picture: "",
    description: [
        `This program converts between years in the western system and the Japanese "Nengo" era system.`,
        `It covers every year that falls within a Japanese era, and can search in both English and Japanese.`
    ],
    action: (<div>
        <a href="/era-converter">
            <button>Try it out</button>
        </a>
    </div>)
}

const photoViewer: actionBlock = {
    name: "Web Photo Viewer",
    details: "Built in Node.js",
    picture: "",
    description: [
        `This is a webpage that displays photos in order of date taken.`,
        `It uses MongoDB to store the data on the photos, and express.js and the Pug template engine to build the web server and front end.`,
        `I use it at home to allow for the backup and viewing of family photos.`
    ],
    action: noAction
}

const webScraper: actionBlock = {
    name: "Example Web Scraper",
    details: "Built in Python",
    picture: "",
    description: [
        `This is a web scraper designed to pick up information from Wikipedia articles and converted into a text file.`,
        `The program makes use of the BeautifulSoup library in order to access the designated page(s) and data.`
    ],
    action: noAction
}

export const programmingList = [eraConverter, photoViewer, webScraper];