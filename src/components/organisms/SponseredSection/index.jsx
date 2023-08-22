import { useEffect, useState } from "react";
import { Division, CustomImage, Anchor, Text } from "../../atoms";
// import { gsap } from "gsap";
// import calaender from "../../../media/Icon awesome-calendar-check.svg";
// import location from "../../../media/Icon material-location-on.svg";
export const SponseredSection = props => {
    // var tl = gsap.timeline();
    const { image1,image2,image3,text1,text2,text3,hdng1,hdng2,hdng3 } = props;

    useEffect(() => {
        // tl.fromTo(".content", {x: -20}, {duration: 2, x: 50});
      });
      return (
        <Division divVariant="grid-container flex flex-row overflow-hidden justify-center items-center relative z-1 py-10">
            <Division divVariant="sponser-wrapper max-w-1140px gap-2 flex">
                <Division divVariant="sponser-item flex flex-col">
                    <CustomImage imageVariant="sponser-img object-cover" href={image1} />
                    <Text textVariant="sponser-hdng text-white font-worksans">{hdng1}</Text>
                    <Text textVariant="sponser-desc text-white font-worksans">{text1}</Text>
                </Division>
                <Division divVariant="sponser-item flex flex-col">
                    <CustomImage imageVariant="sponser-img object-cover" href={image2} />
                    <Text textVariant="sponser-hdng text-white font-worksans">{hdng2}</Text>
                    <Text textVariant="sponser-desc text-white font-worksans">{text2}</Text>
                </Division>
                <Division divVariant="sponser-item flex flex-col">
                    <CustomImage imageVariant="sponser-img object-cover" href={image3} />
                    <Text textVariant="sponser-hdng text-white font-worksans">{hdng3}</Text>
                    <Text textVariant="sponser-desc text-white font-worksans">{text3}</Text>
                </Division>
            </Division>
        </Division>
        );
};