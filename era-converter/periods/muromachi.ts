import { Period, Era } from "../interfaces.ts";

/*
Era data points
(Eras are timeframe classifications decided
by changes in Emperor, or by special events
decreed by the royal family)
*/
const Meitoku: Era = {
    name: "Meitoku",
    JPName: "明徳",
    yearRange: 4,
    startYear: 1390,
    triviaFile: ""
}

const Oei: Era = {
    name: "Oei",
    JPName: "応永",
    yearRange: 34,
    startYear: 1394,
    triviaFile: ""
}

const Shocho: Era = {
    name: "Shocho",
    JPName: "正長",
    yearRange: 1,
    startYear: 1428,
    triviaFile: ""
}

const Eikyo: Era = {
    name: "Eikyo",
    JPName: "永享",
    yearRange: 12,
    startYear: 1429, 
    triviaFile: ""
}

const Kakitsu: Era = {
    name: "Kakitsu",
    JPName: "嘉吉",
    yearRange: 3,
    startYear: 1441,
    triviaFile: ""
}

const Bunan: Era = {
    name: "Bun'an",
    JPName: "文安",
    yearRange: 5,
    startYear: 1444,
    triviaFile: ""
}

const Hotoku: Era = {
    name: "Hotoku",
    JPName: "宝徳",
    yearRange: 3,
    startYear: 1449,
    triviaFile: ""
}

const Kyotoku: Era = {
    name: "Kyotoku",
    JPName: "享徳",
    yearRange: 3,
    startYear: 1452,
    triviaFile: ""
}

const Kosho: Era = {
    name: "Kosho",
    JPName: "康正",
    yearRange: 2,
    startYear: 1455,
    triviaFile: ""
}

const Choroku: Era = {
    name: "Choroku",
    JPName: "長禄",
    yearRange: 3,
    startYear: 1457,
    triviaFile: ""
}

const Kansho: Era = {
    name: "Kansho",
    JPName: "寛正",
    yearRange: 6,
    startYear: 1460,
    triviaFile: ""
}

const Bunsho: Era = {
    name: "Bunsho",
    JPName: "文正",
    yearRange: 1,
    startYear: 1466,
    triviaFile: ""
}

const Onin: Era = {
    name: "Onin",
    JPName: "応仁",
    yearRange: 2,
    startYear: 1467,
    triviaFile: ""
}

const Bunmei: Era = {
    name: "Bunmei",
    JPName: "文明",
    yearRange: 18,
    startYear: 1469,
    triviaFile: ""
}

const Chokyo: Era = {
    name: "Chokyo",
    JPName: "長享",
    yearRange: 2,
    startYear: 1487,
    triviaFile: ""
}

const Entoku: Era = {
    name: "Entoku",
    JPName: "延徳",
    yearRange: 3,
    startYear: 1489,
    triviaFile: ""
}

const Meio: Era = {
    name: "Meio",
    JPName: "明応",
    yearRange: 9,
    startYear: 1492,
    triviaFile: ""
}

const Bunki: Era = {
    name: "Bunki",
    JPName: "文亀",
    yearRange: 3,
    startYear: 1501,
    triviaFile: ""
}

const Eisho: Era = {
    name: "Eisho",
    JPName: "永正",
    yearRange: 17,
    startYear: 1504,
    triviaFile: ""
}

const Daiei: Era = {
    name: "Daiei",
    JPName: "大永",
    yearRange: 7,
    startYear: 1521,
    triviaFile: ""
}

const Kyoroku: Era = {
    name: "Kyoroku",
    JPName: "享禄",
    yearRange: 4,
    startYear: 1528,
    triviaFile: ""
}

const Tenbun: Era = {
    name: "Tenbun",
    JPName: "天文",
    yearRange: 23,
    startYear: 1532,
    triviaFile: ""
}

const Koji: Era = {
    name: "Koji",
    JPName: "弘治",
    yearRange: 3,
    startYear: 1555,
    triviaFile: ""
}

const Eiroku: Era = {
    name: "Eiroku",
    JPName: "永禄",
    yearRange: 12,
    startYear: 1558,
    triviaFile: ""
}

const Genki: Era = {
    name: "Genki",
    JPName: "元亀",
    yearRange: 3,
    startYear: 1570,
    triviaFile: ""
}

/*
Period data point
(Periods are the larger timeframe
classifications in Japanese history,
representing snapshots of Japanese
culture and society)
*/
export const Muromachi: Period = {
    name: "Muromachi",
    JPname: "室町",
    startYear: 1336,
    endYear: 1573,
    eras: [
        Meitoku, Oei, Shocho, Eikyo, Kakitsu, Bunan, Hotoku,
        Kyotoku, Kosho, Choroku, Kansho, Bunsho, Onin,
        Bunmei, Chokyo, Entoku, Meio, Bunki, Eisho, Daiei,
        Kyoroku, Tenbun, Koji, Eiroku, Genki
    ]
}