import Image from "next/image";
import React from "react";
import techno from "../../../jsons/technologies.json";

function Technologies() {
  return (
    <div className="flex flex-col m-auto items-center">
      <div className="lg:w-[1512px] lg:h-[132px] w-[402px] h-[120px] flex gap-10 pt-[32px] pl-[16px] pb-[32px] pr-[16px] lg:pt-[40px] lg:pl-[110px] lg:pb-[40px] lg:pr-[110px] bg-[#D7DFF0]">
        <p className="w-[344px] h-[56px] lg:w-[1292px] lg:h-[52px] font-sans leading-[28px] lg:leading-[38px] font-normal lg:font-medium text-2xl lg:text-5xl bg-gradient-to-tr from-[#779BDD] to-[#3369CC] text-transparent bg-clip-text">
          {techno.sentence}
        </p>
      </div>
      <div className=" lg:w-[1512px] w-[402px] flex flex-col gap-[10px] pt-[32px] pl-[16px] pb-[32px] pr-[16px] lg:pt-[46px] lg:pl-[110px] lg:pb-[46px] lg:pr-[110px] bg-[#D7DFF0]">
        <div className=" lg:w-[1292px] w-[370px] flex flex-col gap-[64px]">
          {Object.values(techno.info).map((img, ind: number) => (
            <div
              key={ind}
              className=" lg:w-[1292px] w-[370] flex flex-col lg:gap-[32px] gap-[16px]"
            >
              <p className=" lg:w-[1292px] lg:h-[44px] w-[370px] font-sans font-semibold lg:font-medium leading-[40px] lg:leading-[44px] text-4xl lg:text-5xl bg-gradient-to-tr from-[#779BDD] to-[#3369CC] text-transparent bg-clip-text">
                {img.title}
              </p>
              <div className=" lg:w-[1292px] w-[370px] flex flex-wrap lg:gap-[24px] gap-[12px]">
                {img.images.map((image, i) => (
                  <div
                    key={i}
                    className="bg-white relative rounded-[24px] lg:w-[195px] lg:h-[164px] w-[177px] h-[190px] flex flex-col gap-[24px] p-[24px] items-center"
                  >
                    <Image
                      src={`/${img.name}${image.image}`}
                      alt={image.title}
                      width={64}
                      height={64}
                    />
                    <span className="font-sans font-bold leading-[28px] absolute bottom-5">
                      {image.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Technologies;
