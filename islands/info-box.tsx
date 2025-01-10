import { createRef } from "https://esm.sh/v128/preact@10.22.0/src/index.js";

//TODO: remove horizontal scroll bar, change position of parent div

export default function InfoBox() {
    const target = createRef();
    let displayed = false;

    function wrapAndUnwrap() {
        if (!displayed) {
            displayed = true;
            target.current.style.visibility = "visible";
            target.current.style.height = "300px";
        } else {
            displayed = false;
            target.current.style.height = "1px";
            target.current.style.visibility = "hidden";
        }
        console.log(target.current);
    }

  return (
    <div id="info-box">
      <div id="info-button" onClick={() => wrapAndUnwrap()}>?</div>
      <div id="more-info" ref={target}>
        <h4>What is this?</h4>
        <p>
          This is a search program for converting years between the western
          system of CE and the Japanese "Nengo" era system. The program is
          designed to accept any of the following inputs:
          <br />
          <ul>
            <li>Western years in English and Japanese ("2025" or "2025年")</li>
            <li>
              Japanese "Nengo" era years in English and Japanese ("Showa 15" or
              "昭和15年")
            </li>
            <li>
              Japanese "Nengo" era names in English and Japanese ("Showa" or
              "昭和"; returns the equivalent western year range)
            </li>
            <li>
              Periods of Japanese history in English and Japanese ("Edo" or
              "江戸"; returns the equivalent western year range)
            </li>
          </ul>
          Enter your source year or timeframe into the input box and click the
          "search" button. The result of the search will appear below the box.
        </p>
        <h4>
          Okay, but what <i>is</i> this?
        </h4>
        <p>
          Since the 600s, Japan has used an era system defined by the emperor to
          segment its time frames. These eras are written with the name of the
          era followed by the number of the year within that era. For example,
          1956 is equivalent to Showa 31, or the 31st year in the Showa
          era.<br />In the past, eras, called "Nengo (年号) in Japanese, were
          designated for the beginning of the reign of a new emperor, but also
          for any of several reasons such as celebrations or natural disasters.
          This meant that several eras could occur within a single reign. After
          the fall of the shogunate in 1868, Japan switched to a system where
          eras would pertain only to the rule of a single emperor.<br />While
          Japan uses the western system for its years in many cases, the Nengo
          era system can still be seen in use. This can make interacting with
          Japanese contents difficult if only the Nengo era year is provided.
          This program is designed to allow you to confirm any year that fits
          within a Japanese era, in either direction.
        </p>
        <h4>My search didn't return anything!</h4>
        <p>
          There may be a few reasons why a year didn't return from your input.
          Please check the following:
          <ul>
            <li>
              The input box didn't contain a valid input, or didn't contain an
              input at all.
            </li>
            <li>
              The input year is before 658 or after{" "}
              {new Date().getFullYear()}; this program only covers years that
              are officially part of a Japanese era, so any years before the
              creation of the system (or that haven't happened yet) aren't
              included.
            </li>
            <li>
                Some years in the 600s and early 700 hundreds don't have eras despite being between eras in the system. These years cannot be converted, and so are left out for simplicity.
            </li>
            <li>This program only accepts half-width numbers. If you don't know what that means, this probably isn't why your search didn't return anything.</li>
          </ul>
        </p>
        <h4>My search returned multiple results, what does that mean?</h4>
        <p>Because Nengo eras could be decided at any time throughout history, some western years are covered by multiple eras. These different eras are listed out when this happens. Either, the year you input was a transition year for the eras in question, or there were multiple eras during that time for some historical reason. (Look up the Northern and Southern Courts for a good example.)</p>
      </div>
    </div>
  );
}
