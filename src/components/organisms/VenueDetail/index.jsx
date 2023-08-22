import { useEffect, useState } from "react";
import { Division, CustomImage, Text } from "../../atoms";
import { Button } from "../../molecules"
import bg_maskgroup from "../../../media/Maskgroup_bg.png";
import calaender from "../../../media/Icon awesome-calendar-check.svg";
import location from "../../../media/Icon material-location-on.svg";
import Aos from 'aos'
import 'aos/dist/aos'
export const VenueDetail = props => {
    useEffect(()=>{
      Aos.init({duration:2200})
    },[])
    const { button, text1,text2,text3,text4 } = props;
  return (
    <Division divVariant="grid-container w-full flex flex-row justify-center overflow-hidden items-center h-65-0 bg-blue-20">
        <Division divVariant="flex flex-col w-full max-w-1920px mix-blend-lighten drop-shadow-custom"> 
             <Division divVariant="flex flex-row w-full max-w-1920px h-65-0">
                <CustomImage imageVariant="relative" href={bg_maskgroup} />
            </Division>
            <Division divVariant="flex flex-col absolute z-10 lg:w-84-0 md:w-50-0  h-42-1 lg:left-[250px] md:left-[150px]  top-[100px]" data-aos="fade-left">
                <Division  divVariant="flex flex-row max-w-84-0 relative top-3">
                    <Text textVariant="font-extrabold lg:text-60px text-40px text-white text-left w-11/12 font-worksans">The Venue</Text>
                </Division>
                <Division divVariant="flex flex-col max-w-84-0 relative top-2">
                    <Text textVariant="font-normal leading-tight lg:text-36px text-18px text-white text-left w-10/12 font-worksans">{text1}</Text>
                    {/* About The City */}
                    <Text textVariant="   font-normal lg:text-18px text-18px text-white  w-11/12 font-worksans">
                        {text2}{/* Santa Clara Is Located In The Center Of Silicon Valley And Is Home To The Headquarters Of Several High-Tech Companies Such As Intel. */}
                    </Text>
                </Division>
                <Division divVariant="flex flex-col max-w-84-0 relative top-0">
                    <Text textVariant="font-normal lg:text-36px text-18px text-white text-left w-11/12 font-worksans">{text3}</Text>
                    {/* Santa Clara Convention Centre */}
                    <Text textVariant="font-normal lg:text-18px text-18px text-white text-left w-11/12 font-worksans">
                        {text4}{/* Between The Flexible Space, Friendly Staff, Additional Services And Multiple Accommodations, Our Event Will Certainly Be A Success. */}
                    </Text>
                </Division>
                { button &&
                <Division divVariant="flex flex-row max-w-84-0 relative top-[25px]">
                    <Division divVariant="flex flex-row gap-1">
                        <Button className="text-hr font-semibold w-34-3 h-5-9 bg-white rounded-xl text-20px px-2 flex items-center justify-center font-worksans" > 
                            More about the venue
                        </Button>
                    </Division>
                </Division>
                }
            </Division>
        </Division>
    </Division>
  );
};
