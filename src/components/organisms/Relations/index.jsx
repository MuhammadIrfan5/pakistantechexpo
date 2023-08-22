import { useEffect, useState } from "react";
import { Division, CustomImage, Text } from "../../atoms";
import { Button } from "../../molecules"
import image4 from "../../../media/image4.png";

export const Relations = props => {
    const { navigationRender, setNavigationRender } = props;
  return (
    <Division divVariant="grid-container w-full flex flex-row justify-center overflow-hidden items-center lg:gap-2 gap-1 py-2 bg-blue-20">
        <Division divVariant="flex flex-col w-full max-w-1140px h-45-5 gap-2 relative place-items-center"> 
            <Division divVariant="flex flex-row">
                <CustomImage imageVariant="relative" href={image4} />
            </Division>
            <Division divVariant="flex flex-col absolute w-[882px] top-[200px]">
                <Text textVariant="font-bold text-70px text-white text-left w-10/12  leading-[82px]">strengthen bilateral relations</Text>
                <Text textVariant="font-normal text-24px text-white text-left leading-[28px] w-11/12">
                 wanz trade show is integral for the promotion of trade and investment between US & Pakistan. IT aims to target the leading businesses of both the countries.
                </Text>
            </Division>
        </Division>
    </Division>
  );
};
