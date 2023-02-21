import TechnologiesContainer from "./TechnologiesContainer";
import AboutContainer from "./AboutContainer";
import ProjectsContainer from "./ProjectsContainer"

import "../styles/components/maincontent.sass";

const MainContent = () => {
  return (
    <main id="main-content">
       <h1>Maria Cecília Caporale</h1>
      <AboutContainer />
      <TechnologiesContainer />
      <ProjectsContainer />
    </main>
  );
};

export default MainContent;