import { useEffect } from "https://esm.sh/v128/preact@10.22.0/hooks/src/index.js";
import { useState } from "https://esm.sh/v128/preact@10.22.0/hooks/src/index.js";
import { createRef } from "https://esm.sh/v128/preact@10.22.0/src/index.js";
import { programmingList } from "../site-contents/programming-example-items.ts";

//TODO: change the display area div into a component

export default function ProgrammingExamples() {
    const displayArea = createRef();
    const [index, setIndex] = useState(1);

    useEffect(() => {
        displayArea.current.innerHTML = programmingList[index];
    }, [index]);
    
    return (
        <div>
            <div class="tab" onClick={() => setIndex(1)}></div>
            <div class="tab" onClick={() => setIndex(2)}></div>
            <div class="tab" onClick={() => setIndex(3)}></div>
            <div class="display-area" ref={displayArea}></div>
        </div>
    )
}