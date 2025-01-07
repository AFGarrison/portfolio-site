import { useEffect, useState } from "https://esm.sh/v128/preact@10.22.0/hooks/src/index.js";
import { createRef } from "https://esm.sh/v128/preact@10.22.0/src/index.js";
import search from "../era-converter/index.ts";

export default function ConverterSearch() {
    const textInput = createRef();
    const [text, setText] = useState([""]);

    useEffect(() => {
        let output;
        if (textInput.current.value === undefined) {
            output = search("")!;
        } else {
            output = search(textInput.current.value)!;
        }
        
        setText(output);
    }, []);

    return (
        <div id="converter-search">
            <input type="text" id="search-bar" ref={textInput}></input>
            <button id="search-button" onClick={() => useEffect}>Search</button>
            <p id="output-section">{text.map(e => <p>{e}</p>)}</p>
        </div>
    )
}