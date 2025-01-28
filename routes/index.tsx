import AboutMe from "../components/about-me.tsx";
import TitleSection from "../components/title-section.tsx";
import WorkSection from "../components/work-section.tsx";
import OtherSkills from "../components/other-skills.tsx";
import { workHistoryItems } from "../site-contents/work-history-items.tsx";
import ProgrammingExamples from "../islands/programming-examples.tsx";
import TechnologyExperience from "../components/technology-experience.tsx";
import ContactMe from "../islands/contact-me.tsx";

export default function Home() {
  return (
    <div id="main-contents">
      <TitleSection />
      <AboutMe image={""} />
      <div id="work-history" className="section-dimensions">
        <div className="text-dimensions">
          <h3 className="section-title stand-out">Work History</h3>
        </div>
        {workHistoryItems.map((e) => <WorkSection info={e} />)}
      </div>
      <ProgrammingExamples />
      <TechnologyExperience />
      <OtherSkills />
      <ContactMe />
    </div>
  );
}
