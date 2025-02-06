// deno-lint-ignore-file prefer-const
import { Period } from "./interfaces.ts";
import { Asuka } from "./periods/asuka.ts";
import { Nara } from "./periods/nara.ts";
import { Heian } from "./periods/heian.ts";
import { Kamakura } from "./periods/kamakura.ts";
import { NanbokuchoSouthern } from "./periods/nanbokucho-south.ts";
import { NanbokuchoNorthern } from "./periods/nanbokucho-north.ts";
import { Muromachi } from "./periods/muromachi.ts";
import { AzuchiMomoyama } from "./periods/azuchi–momoyama.ts";
import { Edo } from "./periods/edo.ts";
import { Modern } from "./periods/modern.ts";

/*
An ordered list of the periods, used for
accessing each period's information
*/
const periods: readonly Period[] = [
    Asuka, Nara, Heian, Kamakura, NanbokuchoSouthern,
    NanbokuchoNorthern, Muromachi, AzuchiMomoyama,
    Edo, Modern
];

/*
Search for the JP year based on English
input
*/
function searchJPYear(inputYear: number): string[] | null {
    let yearSearchResults: string[] = [];
    let correctPeriods = periods.filter(e => e.startYear <= inputYear && e.endYear >= inputYear);

    for (let period of correctPeriods) {
        let correctEras = period.eras.filter(
            e => e.startYear <= inputYear && e.startYear + e.yearRange >= inputYear
        );

        for (let era of correctEras) {
            for (let year = 0; year <= era.yearRange; year++) {
                if (era.startYear + year === inputYear) {
                    yearSearchResults.push(
                        `${era.name} (${era.JPName}) ${year + 1}, ${period.name} (${period.JPname}) period`
                    );
                }
            }
        }
    }

    if (yearSearchResults.length === 0) {
        return null;
    } else {
        return yearSearchResults;
    }
}

/*
Search for the EN year based on Japanese
input
*/
function searchENYear(inputYear: [string, number]): string[] | null {
    let yearSearchResults: string[] = [];

    let correctPeriods = periods.filter(period => period.eras.some(
        era => era.name === inputYear[0] || era.JPName === inputYear[0])
    );

    for (let period of correctPeriods) {
        let correctEras = period.eras.filter(
            era => (era.name === inputYear[0] || era.JPName === inputYear[0])
            && era.yearRange + 1 >= inputYear[1]
        );

        for (let era of correctEras) {
            yearSearchResults.push(
                `${era.startYear + (inputYear[1] - 1)} (${period.name} period)`
            );
        }
    }

    if (yearSearchResults.length === 0) {
        return null;
    } else {
        return yearSearchResults;
    }
}

//Return the year range of the requested period
function getPeriodRange(input: string): string[] | null {
    let foundPeriod = periods.find(
        period => period.name === input || period.JPname === input
    );
    if (foundPeriod !== undefined) {
        return [`${foundPeriod.name} (${foundPeriod.JPname}) period - ${foundPeriod.startYear} to ${foundPeriod.endYear}`];
    } else {
        return null;
    }
}

/*
Get the year ranges of all eras where the name matches
the input
*/
function getEraRange(input: string): string[] | null {
    let eraSearchResults: string[] = [];
    let correctPeriods = periods.filter(period => period.eras.some(
        era => era.name === input || era.JPName === input)
    );

    for (let period of correctPeriods) {
        let correctEras = period.eras.filter(era =>
            era.name === input || era.JPName === input
        );

        correctEras.forEach(era => eraSearchResults.push(
            `${era.name} (${era.JPName}) era - ${era.startYear} to ${era.startYear + era.yearRange} (${period.name} period)`
        ));
    }

    if (eraSearchResults.length === 0) {
        return null;
    } else {
        return eraSearchResults;
    }
}

//Process the input for searching
function inputType(input: string): null | number | string | [string, number] {
    let numbers = input.match(/[0-9０-９]+/);
    let eraFlag = input.match(/^[a-zA-Z一-龠]+/);
    
    if (numbers === null && eraFlag === null) return null;
    if (numbers !== null && eraFlag === null) return Number(numbers);
    if (numbers === null && eraFlag !== null) return eraFlag.toString();
    if (numbers !== null && eraFlag !== null) return [eraFlag.toString(), Number(numbers)];
    else return null;
}

//Fire everything here
export default function search(input: string) {
    const nullResult = ["The entered query returned no results."];
    let result;

    let formattedInput = inputType(input);
    if (formattedInput === null) result = nullResult;
    else if (typeof formattedInput === "number") result = searchJPYear(formattedInput);
    else if (typeof formattedInput === "string") {
        let tempresult = getPeriodRange(formattedInput);
        if (tempresult === null) tempresult = getEraRange(formattedInput);
        result = tempresult;
    }
    else if (Array.isArray(formattedInput)) result = searchENYear(formattedInput);
    
    if (result === null) return nullResult;
    else return result;
}