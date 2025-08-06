import React from "react";
import BubbleButton from "./BubbleButton";
import ArrowSvg from "./ArrowSvg";
import ArrowDown from "./ArrowDown";
import { useState } from "react";
import Infosvg from "./Infosvg";

const PackagesBox = ({ data, className }) => {
  const [isOpen, setisOpen] = useState(false);

  const toggleMenu = () => setisOpen((prev) => !prev);

  return (
    <div
      className={`package-box border-2 border-[#002E55] px-[30px] py-[20px] rounded-[12px] ${className}`}
    >
      <div
  className={`top mb-7 mt-2.5 ${
    data.step === "2-Step" ? "" : "min-h-[190px]"
  }`}
>
        <p className="text-[#FCFCFC] font-normal text-[16px] mb-1 uppercase">
          {data.step}
        </p>
        <h5 className="text-[#80DBB4] text-[40px] font-medium mb-3.5">
          {data.discountPrice}
          <span className="text-[18px] font-normal ml-1">/</span>
          <span className="text-[18px] font-light text-[#e2e2e2] line-through ml-1">
            {data.price}
          </span>
          <span className="text-[18px] font-light text-[#e2e2e2] ml-2">
            / {data.accounts}
          </span>
        </h5>
        <BubbleButton
          Tag="a"
          target="_blank"
          href="https://my.go4trades.com/login?_gl=1*1x22s31*_ga*MTE5MDgxNzk5OS4xNzUxNjE1ODQz*_ga_2HWEFCWNKC*czE3NTIwNzE4NjUkbzIkZzEkdDE3NTIwNzIwMTIkajYwJGwwJGgw*_ga_SS36ZZJDJK*czE3NTIwNzE4NjUkbzIkZzEkdDE3NTIwNzIwMTIkajYwJGwwJGgw"
          className="my-btn text-white font-medium w-full bg-blue-gradient hover:opacity-60 transition block text-center"
          parent_Class="w-full"
        >
          Buy Challenges
        </BubbleButton>
      </div>
      <div className="middle">
        <ul
          className={`mb-6 overflow-hidden transition-all duration-500 ease-in-out ${
            isOpen
              ? "max-h-[1000px]"
              : data.step === "2-Step"
              ? "max-h-[173px]" // bigger collapsed height for 2-Step
              : "max-h-[139px]"
          }`}
        >
          {data.list.map((item, index) => (
            <li key={index} className="flex items-center justify-between mb-3">
              <p className="text-[#FCFCFC] font-normal text-[16px]">
                {item.key}{" "}
                <button className="cursor-pointer">
                  <Infosvg />
                </button>
              </p>
              <p className="text-[#FCFCFC] font-normal text-[16px]">
                {item.value}
              </p>
            </li>
          ))}
        </ul>
        <button
          onClick={toggleMenu}
          className="flex justify-center w-full items-center text-[#FCFCFC] gap-3 cursor-pointer"
        >
          {isOpen ? "View less" : "View more"} <ArrowDown />
        </button>
      </div>
    </div>
  );
};

export default PackagesBox;
