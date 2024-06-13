import { back, curve } from "../assets";
import Button from "./Button";
import Section from "./Section";
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";
import { heroIcons } from "../constant";
import { ScrollParallax } from "react-just-parallax";
import { useRef } from "react";
import Generating from "./Generating";
import Notification from "./Notification";
import { Link, Element } from "react-scroll";
import Contact from "./Contact";
const Hero = () => {
  const parallaxRef = useRef(null);
  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className="container relative" href={parallaxRef}>
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[4rem] md:mb-20 lg:mb-[6.25rem]">
          <h1 className="h1 mb-6">
            Hello World
            <br />
            My name's{" "}
            <span className="inline-block relative">
              Dungha{" "}
              <img
                src={curve}
                alt="Curve"
                className="absolute top-full left-0 w-full xl:-mt-0.5"
                width={624}
                height={28}
              />
            </span>
          </h1>
          <p className="body-1 max-w-3xl text-n-2 lg:mb-8 mx-auto mb-6">
            Welcome to my portfolio ...
          </p>
          <Button href="#" white>
            <Link to="main" smooth={true} duration={400}>
              Get started
            </Link>
          </Button>
        </div>
        <div className="relative max-w-[23rem] mx-auto mb-12 md:max-w-5xl xl:mb-15">
          <Element name="main">
            <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
              <div className="relative bg-n-8 rounded-[1rem]">
                <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem]"></div>
                <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
                  <img
                    src={back}
                    className="w-full scale-[1.7] -translate-y-[12%] -translate-x-[8%] md:scale-[1] md:-translate-y-[20%] md:-translate-x-[0%] lg:-translate-y-[30%]"
                    width={1024}
                    height={490}
                    alt="Dungha"
                  />
                  <Generating className="absolute left-4 right-4 bottom-5 md:left-1/2 md:right-auto md:bottom-8 md:w-[31rem] md:-translate-x-1/2" />
                  <ScrollParallax isAbsolutelyPositioned>
                    <ul className="hidden absolute -left-[5.5rem] bottom-[7.5rem] px-1 py-1 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl xl:flex">
                      {heroIcons.map((icon, index) => (
                        <li className="p-5" key={index}>
                          <img src={icon} width={24} height={25} alt={icon} />
                        </li>
                      ))}
                    </ul>
                  </ScrollParallax>

                  <ScrollParallax isAbsolutelyPositioned>
                    <Notification
                      className="absolute hidden -right-[5.5rem] bottom-[11rem] w-[18rem] xl:flex"
                      title="Github"
                    ></Notification>
                  </ScrollParallax>
                </div>
              </div>
              <Gradient />
            </div>
          </Element>
          <div
            className="absolute -top-[54%] opacity-5 left-1/2 w-[234%] blur-sm -translate-x-1/2 md:-top-[46%] md:w-[138%]
          lg:-top-[104%]"
          >
            <img
              src={back}
              className="w-full"
              width={1440}
              height={2000}
              alt="hero"
            />
          </div>

          <BackgroundCircles />
        </div>
        <p className="body-1 max-w-4xl text-n-2 lg:mb-8 mx-auto mb-6">
          I am a developer and a designer. Currently a 3rd year Posts and
          Telecommunications Institute of Technology student.
          <br />
          This is my portfolio
        </p>
      </div>
      <BottomLine />
    </Section>
  );
};

export default Hero;
