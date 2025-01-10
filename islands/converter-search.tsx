import { useSignal } from "@preact/signals";
import { createRef } from "https://esm.sh/v128/preact@10.22.0/src/index.js";
import search from "../era-converter/index.ts";

export default function ConverterSearch() {
    const textInput = createRef();
    const text = useSignal([""]);

    function searchInput() {
        console.log(textInput.current.value);
        if (textInput.current.value === undefined) {
            text.value = ["The input was empty, please enter a year and click the search button."];
        } else {
            text.value = search(textInput.current.value)!;
        }
    }

    return (
        <div id="converter-search">
            <input type="text" id="search-bar" ref={textInput}></input>
            <button id="search-button" onClick={() => searchInput()}>Search</button>
            <p id="output-section">{text.value.map(e => <p>{e}</p>)}</p>
        </div>
    )
}