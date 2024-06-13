import { check, dungha, gradient } from "../assets";
import { collabApps, collabContent } from "../constant";
import Section from "./Section";
import { Element } from "react-scroll";
import { LeftCurve, RightCurve } from "./design/Collaboration";
import Heading from "./design/Heading";
import Button from "./Button";
const Skills = () => {
  return (
    <div>
      <Element name="Skills">
        <Section crosses>
          <div className="relative container z-2">
            <Heading className="md:max-w-md lg:max-w-2xl" title="Skills" />
            <div className="lg:flex">
              <div className="lg:ml-4 max-w-[25rem]">
                <ul className="max-w-[22rem] mb-10 md:mb-14">
                  {collabContent.map((item) => (
                    <li className="mb-3 py-3" key={item.id}>
                      <div className="flex items-center">
                        <img src={check} width={24} height={24} alt="check" />
                        <h6 className="body-2 ml-5">{item.title}</h6>
                      </div>
                      {item.text && (
                        <p className="body-2 mt-3 text-n-4">{item.text}</p>
                      )}
                    </li>
                  ))}
                </ul>

                <Button className=" absolute -top-2 md:left-6 md:top-6 md:ml-6">
                  My skills
                </Button>
              </div>
              <div className="lg:ml-auto xl:w-[38rem] mt-4">
                <div className="relative left-1/2 flex w-[22rem] aspect-square border border-n-6 rounded-full -translate-x-1/2 scale:75 md:scale-100">
                  <div className="flex w-60 aspect-square m-auto border border-n-6 rounded-full">
                    <div className="w-[6rem] aspect-square m-auto p-[0.2rem] bg-conic-gradient rounded-full">
                      <div className="flex items-center justify-center w-full h-full bg-n-8 rounded-full">
                        <img src={dungha} width={60} height={60} alt="dungha" />
                      </div>
                    </div>
                  </div>

                  <ul>
                    {collabApps.map((app, index) => (
                      <li
                        key={app.id}
                        className={`absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom rotate-${
                          index * 45
                        }`}
                      >
                        <div
                          className={`relative -top-[1.6rem] flex w-[3.2rem] h-[3.2rem] bg-n-7 border border-n-1/15 hover:bg-n-5 hover:border-n-1/75 rounded-xl -rotate-${
                            index * 45
                          }`}
                        >
                          <img
                            className="m-auto"
                            width={app.width}
                            height={app.height}
                            alt={app.title}
                            src={app.icon}
                          />
                        </div>
                      </li>
                    ))}
                  </ul>

                  <LeftCurve />
                  <RightCurve />
                </div>
              </div>
              <div className="absolute top-0 -left-[10rem] w-[56.625rem] h-[56.625rem] opacity-50 mix-blend-color-dodge pointer-events-none">
                <img
                  className="absolute w-[79.5625rem] max-w-[79.5625rem] h-[88.5625rem] -translate-y-[20rem] opacity-45"
                  src={gradient}
                  alt="bg"
                  width={1070}
                  height={1070}
                />
              </div>
            </div>
          </div>
        </Section>
      </Element>
    </div>
  );
};

export default Skills;
