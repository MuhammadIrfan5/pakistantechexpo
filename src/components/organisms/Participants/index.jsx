import { useEffect, useState } from "react";
import { Division, CustomImage, Anchor, Text } from "../../atoms";
import Participants_img from "../../../media/img-Participants.png";

export const Participants = props => {
    const { navigationRender, setNavigationRender } = props;
  return (
    <Division divVariant="grid-container w-full flex flex-row justify-center overflow-hidden bg-navyBlue items-center lg:gap-2 gap-1">
        <Division divVariant="flex flex-col w-full place-items-center"> 
            <Division divVariant="flex flex-row place-content-center">
                <Text textVariant="font-extrabold lg:text-70px text-40px text-white text-center lg:w-3/4 w-full font-worksans">PAKISTAN TECH EXPO PARTICIPANTS</Text>
            </Division>
            <Division divVariant="flex flex-row place-content-center py-1 gap-1">
                <CustomImage imageVariant="particpants-image" href={Participants_img} width={1024} height={745} />
            </Division>
        </Division>
    </Division>
  );
};
