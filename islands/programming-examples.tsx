import { useSignal } from "@preact/signals";
import { programmingList } from "../site-contents/programming-example-items.tsx";
import ProgrammingExample from "../components/programming-example.tsx";

export default function ProgrammingExamples() {
    const contents = useSignal(programmingList[0]);

    function updateContents(index: number) {
        contents.value = programmingList[index];
    }
    
    return (
        <div className="section-dimensions">
            <h3>Work Examples</h3>
            <div className="tab" onClick={() => updateContents(0)}>Japanese Year Converter</div>
            <div className="tab" onClick={() => updateContents(1)}>Web Photo Viewer</div>
            <div className="tab" onClick={() => updateContents(2)}>Web Scraper</div>
            <ProgrammingExample {...contents.value}/>
        </div>
    )
}