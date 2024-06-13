import Section from "./Section";
import { Element } from "react-scroll";
import Heading from "./design/Heading";
import { benefits } from "../constant";
import Arrow from "../assets/svg/Arrow";
import { GradientLight } from "./design/Benefits";
import ClipPath from "../assets/svg/ClipPath";
import { anh1, anh2, anh3, gra, gradient, graflip } from "../assets";
const Education = () => {
  return (
    <Element name="Project">
      <Section id="education" crosses>
        <div className="container relative z-2">
          <Heading className="md:max-w-md lg:max-w-2xl" title="Projects" />
          <div className="flex flex-wrap gap-10 mb-15">
            {benefits.map((item) => (
              <div
                className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
                style={{
                  backgroundImage: `url(${item.backgroundUrl})`,
                }}
                key={item.id}
              >
                <a
                  className="absolute flex z-3 right-5 bottom-10 items-center cursor-pointer hover:underline"
                  href={item.link}
                >
                  <span className="flex items-center">
                    <p className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider">
                      View
                    </p>
                    <Arrow />
                  </span>
                </a>
                <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
                  <h5 className="h5 mb-5">{item.title}</h5>
                  <p className="body-2 mb-6 text-n-3">{item.text}</p>
                  <div className="flex items-center mt-auto">
                    <img
                      src={item.iconUrl}
                      width={48}
                      height={48}
                      alt={item.title}
                    />
                  </div>
                </div>

                {item.light && <GradientLight />}

                <div
                  className="absolute inset-0.5 bg-n-8"
                  style={{ clipPath: "url(#benefits)" }}
                >
                  <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                    {item.imageUrl && (
                      <img
                        src={item.imageUrl}
                        width={380}
                        height={362}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>
                </div>

                <ClipPath />
              </div>
            ))}
          </div>
          <Heading
            className="md:max-w-md lg:max-w-2xl"
            title="Design Products"
          />
          <div className="relative z-1 flex items-center h-[39rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20">
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
              <img
                className=" absolute w-full opacity-90 h-full md:hidden lg:hidden xl:hidden"
                src={gra}
                width={800}
                height={730}
                alt="gra"
              />
              <img
                className="w-full h-full object-cover md:object-right"
                width={800}
                height={730}
                src={anh1}
                alt="anh1"
              />
            </div>
            <div className="relative z-1 max-w-[17rem] ml-auto">
              <h2 className="text-3xl lg:text-5xl">"MEMORIES"</h2>
            </div>
          </div>
          <div className="relative z-1 flex items-center h-[39rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20">
            <div className="relative z-1 max-w-[17rem] mr-auto">
              <h2 className="text-3xl lg:text-5xl">"NO TIME"</h2>
            </div>
            <div className="absolute top-0 right-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
              <img
                className=" absolute w-full opacity-90 h-full md:hidden lg:hidden xl:hidden"
                src={graflip}
                width={800}
                height={730}
                alt="gra"
              />
              <img
                className="w-full h-full object-cover md:object-right"
                width={800}
                height={730}
                src={anh2}
                alt="anh2"
              />
            </div>
          </div>
          <div className="relative z-1 flex items-center h-[39rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20">
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
              <img
                className=" absolute w-full opacity-90 h-full md:hidden lg:hidden xl:hidden"
                src={gra}
                width={800}
                height={730}
                alt="gra"
              />
              <img
                className="w-full h-full object-cover md:object-right"
                width={800}
                height={730}
                src={anh3}
                alt="anh3"
              />
            </div>
            <div className="relative z-1 max-w-[17rem] ml-auto">
              <h2 className="text-3xl lg:text-5xl">"SOUL NATURE"</h2>
            </div>
          </div>
          <div className="absolute top-0 -left-[10rem] w-[56.625rem] h-[56.625rem] opacity-50 mix-blend-color-dodge pointer-events-none">
            <img
              className="absolute top-1/2 w-[79.5625rem] max-w-[79.5625rem] h-[88.5625rem] translate-x-1 translate-y-10 lg:translate-x-0 lg:left-1/2"
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

export default Education;
