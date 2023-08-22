import { useEffect, useState } from "react";
import { Division, CustomImage, Anchor, Text } from "../../atoms";
import Yousuf_amin from "../../../media/Amin-Yousuf 1.png";
import org03 from "../../../media/org_03.png";
import Strategic_03 from "../../../media/Strategic_03.png";
import Strategic_09 from "../../../media/Strategic_09.png";
import Strategic_12 from "../../../media/Strategic_12.png";
import Strategic_15 from "../../../media/Strategic_15.png";
import Strategic_18 from "../../../media/Strategic_18.png";

import UOK from "../../../media/UOK.png";
import PDA from "../../../media/PDA.png";
import IOBM from "../../../media/IOBM.png";

export const StrategicPartners = props => {
    const { navigationRender, setNavigationRender } = props;
    return (
        // <Division data-aos="fade-up"
        // data-aos-anchor-placement="center-bottom" divVariant="bg-white">
        //     <Division divVariant="grid-container flex flex-col place-items-center gap-2 py-10 strategic-partner-wrapper"> 
        //         <Division divVariant="place-content-center">
        //             <Text textVariant="font-extrabold md:text-40px sm:text-30px xs:text-20px text-blue-30 text-left ">STRATEGIC PARTNERS</Text>
        //         </Division>
        //         <Division divVariant="strategic-partner-icons flex md:flex-nowrap flex-wrap flex-row py-1 items-center gap-5">
        //             <Division>
        //                 <CustomImage imageVariant="" href={org03} />
        //             </Division>
        //             <Division>
        //                 <CustomImage imageVariant="" href={Strategic_15}/>
        //             </Division>
        //             <Division>
        //                 <CustomImage imageVariant="" href={Strategic_18}/>
        //             </Division>
        //             <Division>
        //                 <CustomImage imageVariant="" href={Strategic_03}/>
        //             </Division>
        //             <Division>
        //                 <CustomImage imageVariant="" href={Strategic_09}/>
        //             </Division>
        //             <Division>
        //                 <CustomImage imageVariant="" href={Strategic_12}/>
        //             </Division>
        //         </Division>
        //     </Division>
        // </Division>


        <Division divVariant="bg-white">
            <Division divVariant="grid-container flex flex-col place-items-center gap-2 py-4 strategic-partner-wrapper">
                <Division divVariant="place-content-center">
                    <Text textVariant="font-extrabold md:text-40px sm:text-30px xs:text-20px text-blue-30 text-left ">STRATEGIC PARTNERS</Text>
                </Division>
                {/* <Division divVariant="strategic-partner-icons flex md:flex-nowrap flex-wrap flex-row py-1 items-center gap-2 md:gap-5"> */}
                <Division divVariant="strategic-partner-icons flex md:flex-nowrap flex-wrap flex-row py-1 items-center gap-2 md:gap-5">
                    <Division>
                        <CustomImage imageVariant="" href={org03} />
                    </Division>
                    <Division>
                        <CustomImage imageVariant="" href={Strategic_15} />
                    </Division>
                    <Division>
                        <CustomImage imageVariant="" href={Strategic_18} />
                    </Division>
                    <Division>
                        <CustomImage imageVariant="" href={Strategic_03} />
                    </Division>
                    <Division>
                        <CustomImage imageVariant="" href={Strategic_09} />
                    </Division>
                    <Division>
                        <CustomImage imageVariant="" href={Strategic_12} />
                    </Division>
                </Division>



                <Division divVariant="flex md:flex-wrap md:flex-row py-1 items-center gap-2 md:gap-5">
                    <Division divVariant="flex justify-center items-center">
                        <CustomImage imageVariant="" href={UOK} />
                    </Division>
                    <Division>
                        <CustomImage imageVariant="" href={PDA} />
                    </Division>
                    <Division>
                        <CustomImage imageVariant="" href={IOBM} />
                    </Division>
                </Division>
            </Division>
        </Division>
    );
};
