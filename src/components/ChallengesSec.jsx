import { useState, useRef, useEffect } from "react";
import PackagesBox from "./common/PackagesBox";
import SectionHeading from "./common/SectionHeading";
import { packagesData } from "../utils/statics";
import TickSvg from "./common/TickSvg";
import AnimatedBorder from "./common/AnimatedBorder";

const ChallengesSec = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const span = useRef(null);
  const container = useRef(null);
  useEffect(() => {
    var clickedBtn = container.current.querySelector(`#button-${activeIndex}`);
    if (clickedBtn && span.current) {
      span.current.style.left = `${clickedBtn.offsetLeft}px`;
      span.current.style.width = `${clickedBtn.offsetWidth}px`;
    }
  }, [activeIndex]);

  return (
    <section
      className="challenges relative z-[10] py-[5rem] pb-5 mt-[-15%]"
      ref={container}
      id="challenges"
    >
      <div className="container">
        <SectionHeading
          badge="Challenges"
          heading="Three Ways to Win"
          para="Simulated capital, real rewards. Take on the challenge, prove your skills, and keep <br /> up to 90% of your profits. No hidden fees, no unnecessary risks"
        />

        <div className="max-w-[830px] mx-auto mb-9 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          <div className="challange-box w-full">
            <div className="border-1 border-[#002E55] rounded-[12px] py-4 px-5 bg-[#01111F]">
              <h6 className="text-white text-[18px] font-medium mb-2">
                One-Phase Challenge{" "}
              </h6>
              <p className="text-[#CCCCCC] text-[14px] font-extralight mb-1.5">
                <TickSvg /> Perfect for beginners{" "}
              </p>
            </div>
          </div>
          <div className="challange-box w-full">
            <div className="border-1 border-[#002E55] rounded-[12px] py-4 px-5 bg-[#01111F]">
              <h6 className="text-white text-[18px] font-medium mb-2">
                Two-Phase Challenge{" "}
              </h6>
              <p className="text-[#CCCCCC] text-[14px] font-extralight mb-1.5">
                <TickSvg /> Balanced and structured{" "}
              </p>
            </div>
          </div>
          <div className="challange-box w-full">
            <div className="border-1 border-[#002E55] rounded-[12px] py-4 px-5 bg-[#01111F]">
              <h6 className="text-white text-[18px] font-medium mb-2">
                Instant Funding
              </h6>
              <p className="text-[#CCCCCC] text-[14px] font-extralight mb-1.5">
                <TickSvg /> For quick, confident traders{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="package-navs max-w-[830px] w-full mx-auto mb-9 flex overflow-x-auto">
          <ul className="flex items-center justify-between relative min-w-max w-full shrink-0 z-[2] border-1 border-[#004986] rounded-full">
            {packagesData.map((item, index) => (
              <li key={index} className="w-full">
                <button
                  id={`button-${index}`}
                  onClick={() => setActiveIndex(index)}
                  type="button"
                  className={`text-[18px] text-[#FFFFFF] font-normal cursor-pointer rounded-full w-full py-3 px-4 transition ${
                    activeIndex === index ? "active" : ""
                  }`}
                >
                  {item.buttonName}
                </button>
              </li>
            ))}
            <span ref={span} className="bg-border"></span>
          </ul>
        </div>

        {packagesData.map((item, index) =>
          activeIndex === index ? (
            <div
              key={index}
              className={`grid gap-6 items-start mb-5 
        grid-cols-1 
        md:grid-cols-${item.packages.length === 2 ? "2 justify-center" : "2"} 
        lg:grid-cols-${item.packages.length === 2 ? "2 justify-center" : "3"} 
        ${item.packages.length === 2 ? "justify-center" : ""}`}
            >
              {item.packages.map((pkg, pkgIndex) => (
                <AnimatedBorder key={pkgIndex}>
                  <PackagesBox
                    className={`${
                      pkg.gradient ? "gradient" : "bg-(--base-color)"
                    }`}
                    data={pkg}
                  />
                </AnimatedBorder>
              ))}
            </div>
          ) : null
        )}

        <p className="includes mb-3 text-[#004986] font-medium text-[20px] uppercase mb-0">
          {" "}
          All Plans Include
        </p>

        <div className="flex gap-x-6 flex-wrap">
          <p className="text-[#FCFCFC] font-extralight text-[20px]">
            Trading Period{" "}
            <strong className="ml-2 font-semibold">Unlimited</strong>
          </p>
          <p className="text-[#FCFCFC] font-extralight text-[20px]">
            Minimum Trading Days{" "}
            <strong className="ml-2 font-semibold">8</strong>
          </p>
          <p className="text-[#FCFCFC] font-extralight text-[20px]">
            Expert Advisor <strong className="ml-2 font-semibold">Yes</strong>
          </p>
          <p className="text-[#FCFCFC] font-extralight text-[20px]">
            Trade Copiers <strong className="ml-2 font-semibold">Yes</strong>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ChallengesSec;
