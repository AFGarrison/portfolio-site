import { Period, Era } from "../interfaces.ts";

/*
Era data points
(Eras are timeframe classifications decided
by changes in Emperor, or by special events
decreed by the royal family)
*/
const Meiji: Era = {
    name: "Meiji",
    JPName: "明治",
    yearRange: 44,
    startYear: 1868,
    triviaFile: ""
}

const Taisho: Era = {
    name: "Taisho",
    JPName: "大正",
    yearRange: 14,
    startYear: 1912,
    triviaFile: ""
}

const Showa: Era = {
    name: "Showa",
    JPName: "昭和",
    yearRange: 63,
    startYear: 1926,
    triviaFile: ""
}

const Heisei: Era = {
    name: "Heisei",
    JPName: "平成",
    yearRange: 30,
    startYear: 1989,
    triviaFile: ""
}

const Reiwa: Era = {
    name: "Reiwa",
    JPName: "令和",
    yearRange: new Date().getFullYear() - 2018,
    startYear: 2019,
    triviaFile: ""
}

/*
Period data point
(Periods are the larger timeframe
classifications in Japanese history,
representing snapshots of Japanese
culture and society)
*/
export const Modern: Period = {
    name: "Modern",
    JPname: "現代",
    startYear: 1868,
    endYear: new Date().getFullYear(),
    eras: [Meiji, Taisho, Showa, Heisei, Reiwa]
}