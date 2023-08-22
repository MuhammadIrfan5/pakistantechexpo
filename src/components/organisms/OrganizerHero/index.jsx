import { useEffect, useState } from "react";
import { Division, CustomImage, Anchor, Text } from "../../atoms";
// import { gsap } from "gsap";
// import calaender from "../../../media/Icon awesome-calendar-check.svg";
// import location from "../../../media/Icon material-location-on.svg";
export const OrganizerHero = props => {
    // var tl = gsap.timeline();
    const { image,text1,text2 } = props;

    useEffect(() => {
        // tl.fromTo(".content", {x: -20}, {duration: 2, x: 50});
      });

  return (
    <Division divVariant="flex flex-row overflow-hidden justify-center items-center relative z-1">
        <Division divVariant="flex flex-col bg-Linear-gradient-custom drop-shadow-[0px 4px 4px rgba(0, 0, 0, 0.25)]"> 
            <Division divVariant="flex flex-row Organizerh-screen ">
            {/* mix-blend-overlay */}
                <CustomImage imageVariant="relative object-cover" href={image} />
            </Division>
            <Division divVariant="flex flex-col absolute organize-hero-inner">
                {/* static */}
                <Division divVariant="flex flex-col justify-center">
                    <Text textVariant="organize-hero-inner-hdng font-worksans">{text1}</Text>
                    <Text textVariant="organize-hero-inner-text font-worksans">
                        {text2}
                    </Text>
                </Division>
                {/**/}
                {/* <Division divVariant="flex flex-col justify-center">
                    <Division divVariant="flex flex-row">
                        <Division divVariant="flex flex-row gap-1 mr-[50px]">
                            {icon1 && <CustomImage imageVariant="relative" href={icon1} />}
                            <Text textVariant="font-normal lg:text-21px text-16px text-white text-right">{icontext1}</Text>
                        </Division>
                        <Division divVariant="flex flex-row gap-1">
                            {icon2 &&<CustomImage imageVariant="relative" href={icon2} /> }
                            <Text textVariant="font-normal lg:text-21px text-16px text-white text-right ">{icontext2}</Text>
                        </Division>
                    </Division>
                </Division> */}
            </Division>
        </Division>
    </Division>
  );
};