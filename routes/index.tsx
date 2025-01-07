import AboutMe from "../components/about-me.tsx";
import TitleSection from "../components/title-section.tsx";
import Footer from "../components/footer.tsx";
import WorkSection from "../components/work-section.tsx";
import OtherSkills from "../components/other-skills.tsx";
import { workHistoryItems } from "../site-contents/work-history-items.ts";

export default function Home() {
  return (
    <div id="main-contents">
      <TitleSection />
      <AboutMe image={""} />
      <div id="work-history">
        {workHistoryItems.map(e => <WorkSection info={e}/>)}
      </div>
      <OtherSkills />
      <Footer />
    </div>
  );
}
