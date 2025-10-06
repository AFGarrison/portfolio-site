import Header from "../components/header.tsx";
import DescriptionBlock from "../components/description-block.tsx";
import ListBlock from "../components/list-block.tsx";
import PhotoBlock from "../components/photo-block.tsx";
import Footer from "../components/footer.tsx";

export default function Index() {
  return (
    <main>
      <Header logo="" links={[{ link: "", text: "" }]}/>
      <div id="catch-visual">
        <div id="cv-text">Content Creation for the Digital Age</div>
      </div>
      <DescriptionBlock text={[""]}/>
      <ListBlock title="Translation" contents={[""]} callsToAction={[{link: "", text: ""}]}/>
      <ListBlock title="Copy Writing" contents={[""]} callsToAction={[{link: "", text: ""}]}/>
      <ListBlock title="Technical Writing" contents={[""]} callsToAction={[{link: "", text: ""}]}/>
      <div id="other-services" className="page-margins">
        <h4 className="orange-color">Other Services</h4>
        <ul>
          <li>Interpretation</li>
          <li>Subtitling</li>
          <li>Website Development/Maintenance</li>
        </ul>
      </div>
      <PhotoBlock alignment="left" image="" input=""/>
      <Footer />
    </main>
  );
}
