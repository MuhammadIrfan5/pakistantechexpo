import { useEffect, useState } from "react";
import { Division, CustomImage, Anchor, Text } from "../../atoms";

export const Networking = props => {
    const { image, heading, body } = props;
  return (
    <Division divVariant="grid-container w-full flex flex-row justify-center overflow-hidden max-w-1530px bg-navyBlue items-center lg:gap-2 gap-1 py-2">
        <Division divVariant="flex flex-col w-full place-items-center z-10 relative" >
            <Division divVariant="flex flex-row relative left-20 h-59-3 w-113-38 bg-Bg-Image drop-shadow-[0px 4px 4px rgba(0, 0, 0, 0.25)] ">
                <CustomImage imageVariant="object-cover absolute mix-blend-overlay" href={image} />
            </Division>
            <Division divVariant="flex flex-row fixed place-content-left lg:w-3/4 w-full py-2 left-2 top-[100px] absolute">
                <Text textVariant="font-bold lg:text-70px text-40px text-white text-left w-6-68 leading-[82.11px]">{heading}</Text>
            </Division>
            <Division divVariant="flex flex-row fixed place-content-left lg:w-50-0 w-full top-[370px] left-2 absolute" >
                <Text textVariant="font-semibold lg:text-18px text-18px text-white text-left lg:w-50-0 w-full leading-[21px]">{body}</Text>
            </Division>
        
             {/* <Division divVariant="flex flex-row w-full py-1 place-content-center">
                <Division divVariant="flex flex-row">
                    <CustomImage imageVariant="" href={org03} width={120} height={41} />
                </Division>
                <Division divVariant="flex flex-row ">
                    <CustomImage imageVariant="" href={Strategic_15} width={115} height={26} />
                </Division>
                <Division divVariant="flex flex-row ">
                    <CustomImage imageVariant="" href={Strategic_18} width={115} height={16} />
                </Division>
                <Division divVariant="flex flex-row ">
                    <CustomImage imageVariant="" href={Strategic_03} width={81} height={59} />
                </Division>
                <Division divVariant="flex flex-row ">
                    <CustomImage imageVariant="" href={Strategic_09} width={111} height={35} />
                </Division>
                <Division divVariant="flex flex-row ">
                    <CustomImage imageVariant="" href={Strategic_12} width={107} height={20} />
                </Division>
            </Division>  */}
         </Division>
      </Division>
  );
};
