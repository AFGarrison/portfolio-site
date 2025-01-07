import { Period, Era } from "../interfaces.ts";

/*
Era data points
(Eras are timeframe classifications decided
by changes in Emperor, or by special events
decreed by the royal family)
*/
const Wado: Era = {
    name: "Wado",
    JPName: "和銅",
    yearRange: 7,
    startYear: 708,
    triviaFile: ""
}

const Reiki: Era = {
    name: "Reiki",
    JPName: "霊亀",
    yearRange: 3,
    startYear: 715,
    triviaFile: ""
}

const Yoro: Era = {
    name: "Yoro",
    JPName: "養老",
    yearRange: 7,
    startYear: 717,
    triviaFile: ""
}

const Jinki: Era = {
    name: "Jinki",
    JPName: "神亀",
    yearRange: 5,
    startYear: 724,
    triviaFile: ""
}

const Tenpyo: Era = {
    name: "Tenpyo",
    JPName: "天平",
    yearRange: 20,
    startYear: 729,
    triviaFile: ""
}

const TenpyoKanpo: Era = {
    name: "Tenpyo-Kanpo",
    JPName: "天平感宝",
    yearRange: 0,
    startYear: 749,
    triviaFile: ""
}

const TenpyoShoho: Era = {
    name: "Tenpyo-Shoho",
    JPName: "天平勝宝",
    yearRange: 8,
    startYear: 749,
    triviaFile: ""
}

const TenpyoHoji: Era = {
    name: "Tenpyo-Hoji",
    JPName: "天平宝字",
    yearRange: 8,
    startYear: 757,
    triviaFile: ""
}

const TenpyoJingo: Era = {
    name: "Tenpyo-Jingo",
    JPName: "天平神護",
    yearRange: 2,
    startYear: 765,
    triviaFile: ""
}

const TenpyoKeiun: Era = {
    name: "Tenpyo-Keiun",
    JPName: "天平景雲",
    yearRange: 3,
    startYear: 767,
    triviaFile: ""
}

const Hoki: Era = {
    name: "Hoki",
    JPName: "宝亀",
    yearRange: 11,
    startYear: 770,
    triviaFile: ""
}

const Teno: Era = {
    name: "Ten'o",
    JPName: "天応",
    yearRange: 1,
    startYear: 781,
    triviaFile: ""
}

const Enryaku: Era = {
    name: "Enryaku",
    JPName: "延暦",
    yearRange: 24,
    startYear: 782,
    triviaFile: ""
}


/*
Period data point
(Periods are the larger timeframe
classifications in Japanese history,
representing snapshots of Japanese
culture and society)
*/
export const Nara: Period = {
    name: "Nara",
    JPname: "奈良",
    startYear: 710,
    endYear: 794,
    eras: [
        Wado, Reiki, Yoro, Jinki, Tenpyo, TenpyoKanpo,
        TenpyoShoho, TenpyoHoji, TenpyoJingo,
        TenpyoKeiun, Hoki, Teno, Enryaku
    ]
}