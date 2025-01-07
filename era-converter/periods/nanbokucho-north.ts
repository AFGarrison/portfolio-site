import { Period, Era } from "../interfaces.ts";

/*
Era data points
(Eras are timeframe classifications decided
by changes in Emperor, or by special events
decreed by the royal family)
*/
const Genko: Era = {
    name: "Genko",
    JPName: "元弘",
    yearRange: 3,
    startYear: 1331,
    triviaFile: ""
}

const Shokyo: Era = {
    name: "Shokyo",
    JPName: "正慶",
    yearRange: 1,
    startYear: 1332,
    triviaFile: ""
}

const Kenmu: Era = {
    name: "Kenmu",
    JPName: "建武",
    yearRange: 2,
    startYear: 1336,
    triviaFile: ""
}

const Ryakuo: Era = {
    name: "Ryakuo",
    JPName: "暦応",
    yearRange: 4,
    startYear: 1338,
    triviaFile: ""
}

const Koei: Era = {
    name: "Koei",
    JPName: "康永",
    yearRange: 3, 
    startYear: 1342,
    triviaFile: ""
}

const Jowa: Era = {
    name: "Jowa",
    JPName: "貞和",
    yearRange: 5,
    startYear: 1345,
    triviaFile: ""
}

const Kanno: Era = {
    name: "Kanno",
    JPName: "観応",
    yearRange: 2,
    startYear: 1350,
    triviaFile: ""
}

const Bunna: Era = {
    name: "Bunna",
    JPName: "文和",
    yearRange: 4,
    startYear: 1352,
    triviaFile: ""
}

const Enbun: Era = {
    name: "Enbun",
    JPName: "延文",
    yearRange: 5,
    startYear: 1356,
    triviaFile: ""
}

const Koan: Era = {
    name: "Koan",
    JPName: "康安",
    yearRange: 1,
    startYear: 1361,
    triviaFile: ""
}

const Joji: Era = {
    name: "Joji",
    JPName: "貞治",
    yearRange: 6,
    startYear: 1362,
    triviaFile: ""
}

const Oan: Era = {
    name: "Oan",
    JPName: "応安",
    yearRange: 7,
    startYear: 1368,
    triviaFile: ""
}

const Eiwa: Era = {
    name: "Eiwa",
    JPName: "永和",
    yearRange: 4,
    startYear: 1375,
    triviaFile: ""
}

const Koryaku: Era = {
    name: "Koryaku",
    JPName: "康暦",
    yearRange: 2,
    startYear: 1379,
    triviaFile: ""
}

const Eitoku: Era = {
    name: "Eitoku",
    JPName: "永徳",
    yearRange: 3,
    startYear: 1381,
    triviaFile: ""
}

const Shitoku: Era = {
    name: "Shitoku",
    JPName: "至徳",
    yearRange: 3,
    startYear: 1384,
    triviaFile: ""
}

const Kakei: Era = {
    name: "Kakei",
    JPName: "嘉慶",
    yearRange: 2,
    startYear: 1387,
    triviaFile: ""
}

const Koo: Era = {
    name: "Ko'o",
    JPName: "康応",
    yearRange: 1,
    startYear: 1389,
    triviaFile: ""
}

const Meitoku: Era = {
    name: "Meitoku",
    JPName: "明徳",
    yearRange: 4,
    startYear: 1390,
    triviaFile: ""
}

/*
Period data point
(Periods are the larger timeframe
classifications in Japanese history,
representing snapshots of Japanese
culture and society)
*/
export const NanbokuchoNorthern: Period = {
    name: "Nanbokucho",
    JPname: "南北朝",
    startYear: 1336,
    endYear: 1392,
    eras: [
        Genko, Shokyo, Kenmu, Ryakuo, Koei, Jowa, Kanno,
        Bunna, Enbun, Koan, Joji, Oan, Eiwa, Koryaku,
        Eitoku, Shitoku, Kakei, Koo, Meitoku
    ]
}