/*
Interfaces for the different data types
*/
export interface Period {
    name: string;
    JPname: string;
    startYear: number;
    endYear: number;
    eras: readonly Era[];
}

export interface Era {
    name: string;
    JPName: string;
    yearRange: number;
    startYear: number;
    triviaFile: string;
}