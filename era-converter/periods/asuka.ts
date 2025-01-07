import { Period, Era } from "../interfaces.ts";

/*
Era data points
(Eras are timeframe classifications decided
by changes in Emperor, or by special events
decreed by the royal family)
*/
const Taika: Era = {
    name: "Taika",
    JPName: "大化",
    yearRange: 5,
    startYear: 645,
    triviaFile: ""
}

const Hakuchi: Era = {
    name: "Hakuchi",
    JPName: "白雉",
    yearRange: 5,
    startYear: 650,
    triviaFile: ""
}

const Shucho: Era = {
    name: "Shucho",
    JPName: "朱鳥",
    yearRange: 0,
    startYear: 686,
    triviaFile: ""
}

const Taiho: Era = {
    name: "Taiho",
    JPName: "大宝",
    yearRange: 3,
    startYear: 701,
    triviaFile: ""
}

const Keiun: Era = {
    name: "Keiun",
    JPName: "慶雲",
    yearRange: 4,
    startYear: 704,
    triviaFile: ""
}

const Wado: Era = {
    name: "Wado",
    JPName: "和銅",
    yearRange: 7,
    startYear: 708,
    triviaFile: ""
}

/*
Period data point
(Periods are the larger timeframe
classifications in Japanese history,
representing snapshots of Japanese
culture and society)
*/
export const Asuka: Period = {
    name: "Asuka",
    JPname: "飛鳥",
    startYear: 538,
    endYear: 710,
    eras: [Taika, Hakuchi, Shucho, Taiho, Keiun, Wado]
}