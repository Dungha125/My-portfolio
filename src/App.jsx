import ButtonGradient from "./assets/svg/ButtonGradient";
import Contacttome from "./components/Contacttome";
import Education from "./components/Education";
import Headers from "./components/Headers";
import Hero from "./components/Hero";
import Project from "./components/Project";
const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Headers></Headers>
        <Hero />
        <Project />
        <Education />
        <Contacttome />
      </div>
      <ButtonGradient />
    </>
  );
};

export default App;
