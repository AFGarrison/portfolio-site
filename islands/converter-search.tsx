import { useSignal } from "@preact/signals";
import { createRef } from "https://esm.sh/v128/preact@10.22.0/src/index.js";
import search from "../era-converter/index.ts";

export default function ConverterSearch() {
    const inputArea = createRef();
    const output = useSignal([""]);

    function searchInput() {
        console.log(inputArea.current.value);
        if (inputArea.current.value === undefined) {
            output.value = ["The input was empty, please enter a year and click the search button."];
        } else {
            output.value = search(inputArea.current.value)!;
        }
    }

    return (
        <div id="converter-search">
            <div id="search-input">
                <input type="text" id="search-bar" ref={inputArea}></input>
                <button id="search-button" onClick={searchInput}>Search</button>
            </div>
            <hr />
            <div id="output-section" className="center-text">
                {output.value.map(e => <p className="result-text"><b>{e}</b></p>)}
            </div>
        </div>
    )
}