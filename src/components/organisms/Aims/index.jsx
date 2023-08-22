import { useEffect, useState } from "react";
import { Division, CustomImage, Anchor, Text } from "../../atoms";
import img43 from "../../../media/Image_43.svg";


export const Aims = props => {
    const { navigationRender, setNavigationRender } = props;
  return (
    <Division divVariant="grid-container w-full flex flex-row justify-center overflow-hidden bg-navyBlue items-center lg:gap-2 gap-1 py-2">
        <Division divVariant="flex flex-col w-full place-items-center z-10 relative" >
            <Division divVariant="flex flex-row relative h-55-50 w-111-40 bg-Bg-Image drop-shadow-[0px 4px 4px rgba(0, 0, 0, 0.25)] ">
                <CustomImage imageVariant="object-cover absolute mix-blend-overlay" href={img43} />
            </Division>
            <Division divVariant="flex flex-row absolute place-content-left lg:w-1/2 w-full py-2 left-19-1">
                <Text textVariant="font-bold lg:text-70px text-40px text-hr text-left lg:w-1/2 w-full leading-82px">AIMS & OBJECTIVES</Text>
            </Division>
            <Division divVariant="flex flex-row absolute inset-x-35 inset-y-20 place-content-left lg:w-50-13 w-full left-19-1  absolute">
                <Text textVariant="font-semibold lg:text-36px text-18px text-white text-left lg:w-50-1 w-full leading-42px">To take pakistan’s IT industry $20 Billion by 2025</Text>
            </Division>
            <Division divVariant="flex flex-row absolute inset-x-35 inset-y-32 place-content-left lg:w-50-13 w-full left-19-1">
                <Text textVariant="font-normal lg:text-18px text-18px text-white text-left lg:w-50-1 w-full">
                The Pakistan Tech Expo Global IT Tradeshow Aims To Create A Platform For Local Companies To Further Their Digital Advancement, Match-Making, Networking, And Business Growth Opportunities. The Tradeshow Aims To Bridge The Gap Between The Local IT Companies And The IT Giants For Startups, IT Professionals, Smes, And Experts, The Tradeshow Will Be A Great Opportunity To Connect With Other Key Players In The IT Industry.
                </Text>
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
