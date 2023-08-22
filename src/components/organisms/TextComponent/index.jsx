import { useEffect, useState } from "react";
import { Division, CustomImage, Anchor, Text } from "../../atoms";

export const TextComponent = props => {
    const { Image1 } = props;

  return (
    <Division divVariant="grid-container w-full flex flex-row overflow-hidden justify-center items-center lg:gap-2 gap-1 py-2 bg-blue-20 ">
        <Division divVariant="flex flex-row max-w-1140px">
            <Division divVariant="flex flex-row gap-2 w-70-0 place-items-start"> 
                <Division divVariant="flex flex-col">
                    <Division divVariant="flex flex-row">
                        <Text textVariant="font-extrabold text-white lg:text-70px font-worksans leading-[82px]">Santa Clara Convention Centre</Text>
                    </Division>
                    <Division divVariant="flex flex-row">
                        <Text textVariant="font-normal text-white  lg:text-18px font-worksans leading-[21px]">
                            Between the flexible space, friendly staff, additional services and multiple accommodations, <br/> our event will certainly be a success. Sccc features fully equipped, high-tech facilities that can <br/> accommodate events of all types and sizes, including conventions, trade shows, weddings and <br/> receptions, corporate meetings, banquets, and  any type of special occasion. The ideal, silicon <br/> valley location, just south of san francisco offers guests numerous nearby attractions, hotels, <br/> restaurants, and all types of entertainment to explore.
                        </Text>
                    </Division>
                </Division>
            </Division>
        </Division>
    </Division>
  );
};