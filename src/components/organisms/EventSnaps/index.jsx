import { useEffect, useState } from "react";
import { Division, CustomImage, Anchor, Text } from "../../atoms";
import { Button } from "../../molecules"
import uit from "../../../media/UIT-University-11.png";
import event12 from "../../../media/event12.png";
export const EventSnaps = props => {
    const { Image1,Image2,text1,text2, Image4 } = props;
  return (
    <Division divVariant="grid-container w-full flex flex-row justify-center overflow-hidden items-center lg:gap-2 gap-1 py-2 bg-blue-20 ">
        <Division divVariant="flex flex-col max-w-1140px gap-2 w-full"> 
        <h2 className="font-worksans font-extrabold text-white tab-hndg">INSIGHTS</h2>
            <Division  divVariant="flex flex-col  place-content-left gap-2">
                <Division divVariant="flex flex-row place-content-left w-6-76">
                    <Text textVariant="font-bold lg:text-70px text-16px text-white text-left leading-[82px] font-worksans">{text1}</Text>
                    {/* Pakistan tech expo events snaps */}
                </Division>
                <Division divVariant="flex flex-row  place-content-left w-83-2">
                    <Text textVariant="font-normal lg:text-36px text-16px text-white text-left leading-[42.23px] font-worksans">{text2}</Text>
                </Division>
            </Division>
            <Division divVariant="flex flex-row md:flex-nowrap flex-wrap place-content-left gap-1 sm:gap-2">
                
                <Division divVariant="event-featured-image flex flex-col place-content-left relative">
                    <CustomImage data-aos="fade-left" imageVariant="object-cover" href={Image1} />
                    <div className="featured-overlay-title">
                        <h2>INSIGHTS</h2>
                        <p className="font-worksans font-extrabold text-white">Local Companies To Further Their Digital Advancement</p>
                    </div>

                </Division>     
                <Division  data-aos="fade-right" divVariant="flex flex-col place-content-left bg-blue-10 leadership-card">
                    <CustomImage imageVariant="object-cover" href={Image2} />
                    <Division divVariant="flex flex-col place-content-center py-2 md:px-4 px-1">
                        <h2 className="insights-tags">#shoutouts</h2>
                        <Text textVariant="font-bold md:text-20px text-18px text-white text-left leading-[23px] md:w-3/4 w-full font-worksans">President WANZ Group</Text>
                    </Division>
                </Division>
                <Division divVariant="md:hidden flex flex-col place-content-left bg-blue-10 leadership-card">
                    <CustomImage imageVariant="object-cover" href={Image4} />
                    <Division divVariant="flex flex-col place-content-center py-2 md:px-4 px-1">
                        <h2 className="insights-tags">#shoutouts</h2>
                        <Text textVariant="font-bold md:text-20px text-18px text-white text-left leading-[23px] md:w-3/4 w-full font-worksans">President WANZ Group</Text>
                    </Division>
                </Division>
            </Division>
            <Division divVariant="md:hidden flex flex-row place-content-center">
                <Button className="text-hr font-semibold w-23-3 h-5-9 bg-bg-blue-20 border border-blue-40 rounded-xl text-20px px-2 flex items-center justify-center font-robotoCondensed" > 
                    READ MORE
                </Button>
            </Division>
        </Division>
    </Division>
  );
};
