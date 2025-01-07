import { useEffect } from "https://esm.sh/v128/preact@10.22.0/hooks/src/index.js";
import { useState } from "https://esm.sh/v128/preact@10.22.0/hooks/src/index.js";
import { createRef } from "https://esm.sh/v128/preact@10.22.0/src/index.js";

const examplesList = [1, 2, 3];

export default function ProgrammingExamples() {
    const displayArea = createRef();
    const [index, setIndex] = useState(1);

    useEffect(() => {
        displayArea.current.innerHTML = examplesList[index];
    }, [index])
    return (
        <div>
            <div class="tab" onClick={() => setIndex(1)}></div>
            <div class="tab" onClick={() => setIndex(2)}></div>
            <div class="tab" onClick={() => setIndex(3)}></div>
            <div class="display-area" ref={displayArea}></div>
        </div>
    )
}