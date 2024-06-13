import Section from "./Section";
import { Element } from "react-scroll";
import Heading from "./design/Heading";
import { line, logohuulung, logoptit } from "../assets";
import { useEffect, useState } from "react";
const Project = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const isMobile = window.innerWidth <= 768;
  const isTablet = window.innerWidth <= 1024 && window.innerWidth > 768;

  const imgStyle = {
    width: isMobile ? "75px" : isTablet ? "75px" : "150px",
    height: isMobile ? "75px" : isTablet ? "75px" : "150px",
  };
  return (
    <Element name="Education">
      <Section crosses>
        <div className="container relative z-2">
          <Heading className="md:max-w-md lg:max-w-2xl" title="Education" />
          <div className="flex w-full justify-center">
            <div className="absolute -translate-x-[6rem] translate-y-[0.5rem] w-[10rem] md:w-[14rem] lg:min-w-[28rem] md:-translate-x-[10rem] lg:-translate-x-[16rem] px-1 py-1 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl xl:flex">
              <img
                className=" m-2 lg:m-4 scale-75"
                src={logohuulung}
                style={imgStyle}
                alt="logoptit"
              />
              <div className="flex flex-col justify-center">
                <h5 className="flex mx-1 mt-2 font-semibold text-xs md:mx-2 lg:mx-2 lg:text-xl">
                  Huu Lung High School
                </h5>
                <h6 className="flex mx-1 mb-2 md:mx-2 lg:mx-2 mt-2 text-xs lg:text-base">
                  2019 - 2022
                </h6>
              </div>
            </div>
            <div className="absolute translate-x-[6rem] translate-y-[11rem] w-[10rem] md:w-[14rem] lg:min-w-[28rem] md:translate-x-[10rem] lg:translate-x-[16.5rem] lg:translate-y-[16rem] px-1 py-1 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl xl:flex">
              <img
                className=" m-2 lg:m-4 scale-75"
                src={logoptit}
                style={imgStyle}
                alt="logoptit"
              />
              <div className="flex flex-col justify-center">
                <h5 className="flex mx-1 mt-2 font-semibold text-xs md:mx-2 lg:mx-2 lg:text-xl">
                  Posts and Telecommunications Institute of Technology
                </h5>
                <h6 className="flex mx-1 mb-2 md:mx-2 lg:mx-2 mt-2 text-xs lg:text-base">
                  2022 - 2027
                </h6>
              </div>
            </div>
            <img
              src={line}
              width={436}
              height={1800}
              alt="line"
              className="relative"
            />
          </div>
        </div>
      </Section>
    </Element>
  );
};

export default Project;
