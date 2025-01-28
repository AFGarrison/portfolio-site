import { useSignal } from "@preact/signals";
import { programmingList } from "../site-contents/programming-example-items.tsx";
import ProgrammingExample from "../components/programming-example.tsx";

export default function ProgrammingExamples() {
  const contents = useSignal(programmingList[0]);

  function updateContents(index: number) {
    contents.value = programmingList[index];
  }

  return (
    <div id="programming-examples" className="section-dimensions">
      <div className="text-dimensions">
        <h3 className="section-title stand-out">Work Examples</h3>
        <div id="tab-bar">
          <div className="tab" onClick={() => updateContents(0)}>
            Japanese Year Converter
          </div>
          <div className="tab" onClick={() => updateContents(1)}>
            Web Photo Viewer
          </div>
          <div className="tab" onClick={() => updateContents(2)}>
            Web Scraper
          </div>
        </div>
        <ProgrammingExample {...contents.value} />
      </div>
    </div>
  );
}
