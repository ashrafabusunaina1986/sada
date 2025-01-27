import React from "react";
import aboutus from "../../../jsons/aboutus.json";

function AboutUs() {
  return (
    <div className="w-[402px] h-[544px] lg:w-[1512px] lg:h-[486px] pt-[32px] pr-[16px] pl-[16px] pb-[32px] lg:pt-[40px] lg:pr-[110px] lg:pl-[110px] lg:pb-[40px] m-auto bg-[#D7DFF0]">
      <div className="w-[364px] h-[480px] lg:w-[1292px] lg:h-[406px] flex flex-col gap-5 ">
        {aboutus.map((info: string, index: number) => (
          <p
            key={index}
            className=" font-sans font-normal text-lg lg:text-[24px] leading-[24px] lg:leading-[34px] tracking-wide lg:tracking-wider text-[#444444]"
          >
            {info}
          </p>
        ))}
      </div>
    </div>
  );
}

export default AboutUs;
