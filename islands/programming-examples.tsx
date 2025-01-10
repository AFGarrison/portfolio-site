import { useSignal } from "@preact/signals";
import { programmingList } from "../site-contents/programming-example-items.tsx";
import CodingExample from "../components/coding-example.tsx";

export default function ProgrammingExamples() {
    const contents = useSignal(programmingList[0]);

    function updateContents(index: number) {
        contents.value = programmingList[index];
    }
    
    return (
        <div>
            <div class="tab" onClick={() => updateContents(0)}>Japanese Year Converter</div>
            <div class="tab" onClick={() => updateContents(1)}>Web Photo Viewer</div>
            <div class="tab" onClick={() => updateContents(2)}>Web Scraper</div>
            <CodingExample {...contents.value}/>
        </div>
    )
}