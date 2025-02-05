
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

const managementPortal: actionBlock = {
    name: "Management Portal",
    details: "Built with Cake.php",
    picture: "/pictures/management-portal.png",
    description: [
        `This is a portal site for recording and managing customer information.`,
        `It was a group development project by my current department, and is currently in use.`
    ],
    action: (<p style="font-style: italic;">Code cannot be shared due to confidentiality clause in contract.</p>)
}

const webScraper: actionBlock = {
    name: "Web Scraper",
    details: "Built with Python",
    picture: "/pictures/web-scraper.png",
    description: [
        `This is a web scraper designed to pick up information from Wikipedia articles and converted into a text file.`,
        `The program makes use of the BeautifulSoup library in order to access the designated page(s) and data.`
    ],
    action: noAction
}

export const programmingList = [eraConverter, managementPortal, webScraper];