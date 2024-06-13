import { Element } from "react-scroll";
import Section from "./Section";
import { gradient, smallSphere } from "../assets";
import Contact from "./Contact";
const Contacttome = () => {
  return (
    <Element name="Contact">
      <Section crosses>
        <div className="relative container z-2">
          <div className="flex relative justify-center mb-[2rem]">
            <img src={smallSphere} width={100} height={100} alt="" />
          </div>
          <Contact className="relative z-10 mb-4 lg:block" />
          <div className="absolute top-0 -left-[10rem] w-[56.625rem] h-[56.625rem] opacity-50 mix-blend-color-dodge pointer-events-none">
            <img
              className="absolute -translate-x-4 md:left-1/2"
              src={gradient}
              alt="bg"
              width={1070}
              height={1070}
            />
          </div>
        </div>
      </Section>
    </Element>
  );
};

export default Contacttome;
