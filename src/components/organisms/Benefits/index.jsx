import { useEffect, useState } from "react";
import { Division, CustomImage, Text } from "../../atoms";
import { Button } from "../../molecules"
import org from "../../../media/org.png";
import org02 from "../../../media/org_02.png";
import org03 from "../../../media/org_03.png";

export const Benefits = props => {
    const { navigationRender, setNavigationRender } = props;
  return (
    <Division divVariant="grid-container w-full flex flex-row justify-center overflow-hidden items-center lg:gap-2 gap-1 py-2 bg-blue-20">
        <Division divVariant="flex flex-col w-full max-w-1140px h-45-5 gap-2"> 
            <Division divVariant="flex flex-row place-content-left w-86-6">
                <Text textVariant="font-extrabold text-70px text-white text-left leading-[82px]">BENEFITS OF PAKISTAN TECH EXPO 2022</Text>
            </Division>
            <Division divVariant="flex flex-row">
                <Division divVariant="flex flex-row w-44-4 relative">
                    <Text textVariant="font-normal text-36px text-white text-left w-10/12  leading-[42px]">Growth in economic activity</Text>
                </Division>
            
                <Division divVariant="flex flex-row w-6-76 relative">
                    <Text textVariant="font-normal text-18px text-white text-left leading-[21.11px]">
                        Pakistan Tech Expo Aims To Brand Pakistan As An Emerging Technology Services Hub. It Aims To Create Linkages And Serve As A Platform For Pakistan’s IT  Industry To Get Access To Various US  IT Firms. Around 80 Exhibitors Will Be On The Lookout For Joint-Ventures And Collaborating Partners Who Will Play An Important Role In Reviving The Economic Activity That Has Slowed Down During The Ongoing Pandemic.
                    </Text>
                </Division>
            </Division>
            <Division divVariant="flex flex-row">
                <Division divVariant="flex flex-row w-44-4 relative">
                    <Text textVariant="font-normal text-36px text-white text-left w-10/12  leading-[42px]">Networking & business opportunities</Text>
                </Division>
            
                <Division divVariant="flex flex-row w-6-76 relative">
                    <Text textVariant="font-normal text-18px text-white text-left leading-[21.11px]">
                        In Order To Amplify The Bilateral  Trade Between Pakistan And The US, Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industrys Standard Dummy Text Ever Since The 1500S, When An Unknown Printer Took A Galley Of Type And Scrambled It To Make A Type Specimen Book.
                    </Text>
                </Division>
            </Division>
        </Division>
    </Division>
  );
};
