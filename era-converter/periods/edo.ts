import { Period, Era } from "../interfaces.ts";

/*
Era data points
(Eras are timeframe classifications decided
by changes in Emperor, or by special events
decreed by the royal family)
*/
const Keicho: Era = {
    name: "Keicho",
    JPName: "慶長",
    yearRange: 19,
    startYear: 1596,
    triviaFile: ""
}

const Genna: Era = {
    name: "Genna",
    JPName: "元和",
    yearRange: 9,
    startYear: 1615,
    triviaFile: ""
}

const Kanei: Era = {
    name: "Kan'ei",
    JPName: "寛永",
    yearRange: 20,
    startYear: 1624,
    triviaFile: ""
}

const Shoho: Era = {
    name: "Shoho",
    JPName: "正保",
    yearRange: 3,
    startYear: 1645,
    triviaFile: ""
}

const Keian: Era = {
    name: "Keian",
    JPName: "慶安",
    yearRange: 4,
    startYear: 1648,
    triviaFile: ""
}

const Joo: Era = {
    name: "Jo'o",
    JPName: "承応",
    yearRange: 3,
    startYear: 1652,
    triviaFile: ""
}

const Meireki: Era = {
    name: "Meireki",
    JPName: "明暦",
    yearRange: 3,
    startYear: 1655,
    triviaFile: ""
}

const Manji: Era = {
    name: "Manji",
    JPName: "万治",
    yearRange: 3,
    startYear: 1658,
    triviaFile: ""
}

const Kanbun: Era = {
    name: "Kanbun",
    JPName: "寛文",
    yearRange: 12,
    startYear: 1661,
    triviaFile: ""
}

const Enpo: Era = {
    name: "Enpo",
    JPName: "延宝",
    yearRange: 8,
    startYear: 1673,
    triviaFile: ""
}

const Tenna: Era = {
    name: "Tenna",
    JPName: "天和",
    yearRange: 3,
    startYear: 1681,
    triviaFile: ""
}

const Jokyo: Era = {
    name: "Jokyo",
    JPName: "貞享",
    yearRange: 4,
    startYear: 1684,
    triviaFile: ""
}

const Genroku: Era = {
    name: "Genroku",
    JPName: "元禄",
    yearRange: 16,
    startYear: 1688,
    triviaFile: ""
}

const Hoei: Era = {
    name: "Hoei",
    JPName: "宝永",
    yearRange: 7,
    startYear: 1704,
    triviaFile: ""
}

const Shotoku: Era = {
    name: "Shotoku",
    JPName: "正徳",
    yearRange: 5,
    startYear: 1711,
    triviaFile: ""
}

const Kyoho: Era = {
    name: "Kyoho",
    JPName: "享保",
    yearRange: 20,
    startYear: 1716,
    triviaFile: ""
}

const Genbun: Era = {
    name: "Genbun",
    JPName: "元文",
    yearRange: 5,
    startYear: 1736,
    triviaFile: ""
}

const Kanpo: Era = {
    name: "Kanpo",
    JPName: "寛保",
    yearRange: 3,
    startYear: 1741,
    triviaFile: ""
}

const Enkyo: Era = {
    name: "Enkyo",
    JPName: "延享",
    yearRange: 4,
    startYear: 1744,
    triviaFile: ""
}

const Kanen: Era = {
    name: "Kan'en",
    JPName: "寛延",
    yearRange: 3,
    startYear: 1748,
    triviaFile: ""
}

const Horeki: Era = {
    name: "Horeki",
    JPName: "宝暦",
    yearRange: 13,
    startYear: 1751,
    triviaFile: ""
}

const Meiwa: Era = {
    name: "Meiwa",
    JPName: "明和",
    yearRange: 8,
    startYear: 1764,
    triviaFile: ""
}

const Anei: Era = {
    name: "An'ei",
    JPName: "安永",
    yearRange: 9,
    startYear: 1772,
    triviaFile: ""
}

const Tenmei: Era = {
    name: "Tenmei",
    JPName: "天明",
    yearRange: 8,
    startYear: 1781,
    triviaFile: ""
}

const Kansei: Era = {
    name: "Kansei",
    JPName: "寛政",
    yearRange: 12,
    startYear: 1789,
    triviaFile: ""
}

const Kyowa: Era = {
    name: "Kyowa",
    JPName: "享和",
    yearRange: 3,
    startYear: 1801,
    triviaFile: ""
}

const Bunka: Era = {
    name: "Bunka",
    JPName: "文化",
    yearRange: 14,
    startYear: 1804,
    triviaFile: ""
}

const Bunsei: Era = {
    name: "Bunsei",
    JPName: "文政",
    yearRange: 12,
    startYear: 1818,
    triviaFile: ""
}


const Tenpo: Era = {
    name: "Tenpo",
    JPName: "天保",
    yearRange: 14,
    startYear: 1830,
    triviaFile: ""
}

const Koka: Era = {
    name: "Koka",
    JPName: "弘化",
    yearRange: 4, 
    startYear: 1844,
    triviaFile: ""
}

const Kaei: Era = {
    name: "Kaei",
    JPName: "嘉永",
    yearRange: 6,
    startYear: 1848,
    triviaFile: ""
}

const Ansei: Era = {
    name: "Ansei",
    JPName: "安政",
    yearRange: 6,
    startYear: 1854,
    triviaFile: ""
}

const Manen: Era = {
    name: "Man'en",
    JPName: "万延",
    yearRange: 1,
    startYear: 1860,
    triviaFile: ""
}

const Bunkyu: Era = {
    name: "Bunkyu",
    JPName: "文久",
    yearRange: 3,
    startYear: 1861,
    triviaFile: ""
}

const Genji: Era = {
    name: "Genji",
    JPName: "元治",
    yearRange: 1,
    startYear: 1864,
    triviaFile: ""
}

const Keio: Era = {
    name: "Keio",
    JPName: "慶応",
    yearRange: 3,
    startYear: 1865,
    triviaFile: ""
}

/*
Period data point
(Periods are the larger timeframe
classifications in Japanese history,
representing snapshots of Japanese
culture and society)
*/
export const Edo: Period = {
    name: "Edo",
    JPname: "江戸",
    startYear: 1600,
    endYear: 1868,
    eras: [
        Keicho, Genna, Kanei, Shoho, Keian, Joo, Meireki,
        Manji, Kanbun, Enpo, Tenna, Jokyo, Genroku,
        Hoei, Shotoku, Kyoho, Genbun, Kanpo, Enkyo,
        Kanen, Horeki, Meiwa, Anei, Tenmei, Kansei,
        Kyowa, Bunka, Bunsei, Tenpo, Koka, Kaei, Ansei,
        Manen, Bunkyu, Genji, Keio
    ]
}