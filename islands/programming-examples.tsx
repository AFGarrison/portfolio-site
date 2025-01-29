import { useSignal } from "@preact/signals";
import { programmingList } from "../site-contents/programming-example-items.tsx";
import ProgrammingExample from "../components/programming-example.tsx";
import { createRef } from "https://esm.sh/v128/preact@10.22.0/src/index.js";
import { useSignalEffect } from "@preact/signals";

export default function ProgrammingExamples() {
  const contents = useSignal(programmingList[0]);
  const selected = useSignal(0);
  const refArray = programmingList.map(_ => createRef());


  function updateContents(index: number) {
    selected.value = index;
  }

  useSignalEffect(() => {
    contents.value = programmingList[selected.value];
    
    refArray.forEach(e => {
      if (refArray.indexOf(e) === selected.value) {
        e.current.classList = "tab selected";
      } else {
        e.current.classList = "tab unselected";
      }
    })
  });

  return (
    <div id="programming-examples" className="section-dimensions">
      <div className="text-dimensions">
        <h3 className="section-title stand-out">Work Examples</h3>
        <div id="tab-bar">
          {programmingList.map((e, i) => {
            return <div className={i === 0 ? "tab selected": "tab unselected"} onClick={() => updateContents(i)} ref={refArray[i]}>{e.name}</div>
          })}
        </div>
        <ProgrammingExample {...contents.value} />
      </div>
    </div>
  );
}
