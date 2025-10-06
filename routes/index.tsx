import Header from "../components/header.tsx";
import DescriptionBlock from "../components/description-block.tsx";
import ListBlock from "../components/list-block.tsx";
import PhotoBlock from "../components/photo-block.tsx";
import Footer from "../components/footer.tsx";
import {
  CopywritingContents,
  CopywritingCTAs,
  Introduction,
  TechnicalWritingCTAs,
  TranslationCTAs,
  TechnicalWritingContents,
  TranslationContents
} from "../utils/contents.ts";

export default function Index() {
  return (
    <main>
      <Header logo="" links={[{ link: "", text: "" }]} />
      <div id="catch-visual">
        <div id="cv-text">Content Creation for the Digital Age</div>
      </div>
      <DescriptionBlock text={Introduction} />
      <ListBlock
        title="Copy Writing"
        contents={CopywritingContents}
        callsToAction={CopywritingCTAs}
      />
      <ListBlock
        title="Technical Writing"
        contents={TechnicalWritingContents}
        callsToAction={TechnicalWritingCTAs}
      />
      <ListBlock
        title="English/Japanese Translation"
        contents={TranslationContents}
        callsToAction={TranslationCTAs}
      />
      <div id="other-services" className="page-margins">
        <h4 className="orange-color">Other Services</h4>
        <ul>
          <li>Interpretation</li>
          <li>Subtitling</li>
          <li>Website Development/Maintenance</li>
        </ul>
      </div>
      <PhotoBlock alignment="left" image="" input="" />
      <Footer />
    </main>
  );
}
