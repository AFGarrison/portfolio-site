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

const Kenmu: Era = {
    name: "Kenmu",
    JPName: "建武",
    yearRange: 2,
    startYear: 1334,
    triviaFile: ""
}

const Engen: Era = {
    name: "Engen",
    JPName: "延元",
    yearRange: 4,
    startYear: 1336,
    triviaFile: ""
}

const Kokoku: Era = {
    name: "Kokoku",
    JPName: "興国",
    yearRange: 7,
    startYear: 1340,
    triviaFile: ""
}

const Shohei: Era = {
    name: "Shohei",
    JPName: "正平",
    yearRange: 23,
    startYear: 1347,
    triviaFile: ""
}

const Kentoku: Era = {
    name: "Kentoku",
    JPName: "健徳",
    yearRange: 2,
    startYear: 1370,
    triviaFile: ""
}

const Bunchu: Era = {
    name: "Bunchu",
    JPName: "文中",
    yearRange: 3,
    startYear: 1372,
    triviaFile: ""
}

const Tenju: Era = {
    name: "Tenju",
    JPName: "天授",
    yearRange: 6,
    startYear: 1375,
    triviaFile: ""
}

const Kowa: Era = {
    name: "Kowa",
    JPName: "弘和",
    yearRange: 3,
    startYear: 1381,
    triviaFile: ""
}

const Genchu: Era = {
    name: "Genchu",
    JPName: "元中",
    yearRange: 8,
    startYear: 1384,
    triviaFile: ""
}

/*
Period data point
(Periods are the larger timeframe
classifications in Japanese history,
representing snapshots of Japanese
culture and society)
*/
export const NanbokuchoSouthern: Period = {
    name: "Nanbokucho",
    JPname: "南北朝",
    startYear: 1336,
    endYear: 1392,
    eras: [
        Genko, Kenmu, Engen, Kokoku, Shohei, Kentoku, Bunchu,
        Tenju, Kowa, Genchu
    ]
}