import { Period, Era } from "../interfaces.ts";

/*
Era data points
(Eras are timeframe classifications decided
by changes in Emperor, or by special events
decreed by the royal family)
*/
const Tensho: Era = {
    name: "Tensho",
    JPName: "天正",
    yearRange: 19,
    startYear: 1573,
    triviaFile: ""
}

const Bunroku: Era = {
    name: "Bunroku",
    JPName: "文禄",
    yearRange: 4,
    startYear: 1592,
    triviaFile: ""
}

const Keicho: Era = {
    name: "Keicho",
    JPName: "慶長",
    yearRange: 19,
    startYear: 1596,
    triviaFile: ""
}

/*
Period data point
(Periods are the larger timeframe
classifications in Japanese history,
representing snapshots of Japanese
culture and society)
*/
export const AzuchiMomoyama: Period = {
    name: "Azuchi–Momoyama",
    JPname: "安土桃山",
    startYear: 1568,
    endYear: 1600,
    eras: [Tensho, Bunroku, Keicho]
}