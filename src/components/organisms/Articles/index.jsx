import { useEffect, useState } from "react";
import Link from 'next/link';
import { Division, CustomImage, Anchor, Text } from "../../atoms";
import { Button } from "../../molecules"
import event12 from "../../../media/event12.png";
import Aos from 'aos'
import "aos/dist/aos"
export const Articles = props => {
    useEffect(() => {
        Aos.init({ duration: 2200 })
    }, [])
    const { Image1, Image2, Image3, text1, text2, text3 } = props;
    return (
        <Division divVariant="grid-container w-full flex flex-row justify-center overflow-hidden items-center lg:gap-2 gap-1 py-2 bg-blue-20 ">
            <Division divVariant="flex flex-col w-full max-w-1140px gap-2">
                <Division divVariant="flex flex-row place-content-left gap-2">
                    <Division divVariant="flex flex-col place-content-left w-42-1 bg-blue-10 ">
                        <CustomImage imageVariant="" href={Image1} />
                        <Division divVariant="flex flex-col place-content-center py-2 px-4">
                            <h2 className="insights-tags">#shoutouts</h2>
                            <Text textVariant="font-bold lg:text-20px text-12px text-white text-left leading-[23px] w-3/4 font-worksans">{text1}</Text>
                            {/* Wanz information technology management meetup with alumni of sir syed university of engineering & technology at board room of ssuet. */}
                        </Division>
                    </Division>
                    <Division divVariant="flex flex-col place-content-left w-42-1 bg-blue-10 ">
                        <CustomImage imageVariant="" href={Image2} />
                        <Division divVariant="flex flex-col place-content-center py-2 px-4">
                            <h2 className="insights-tags">#INSIGHTS</h2>
                            <Text textVariant="font-bold lg:text-20px text-12px text-white text-left leading-[23px] w-3/4 font-worksans">{text2}</Text>
                            {/* Wanz international technology (wint) and hazza institute of technology have signed memorandum of understanding (mou) */}
                        </Division>
                    </Division>
                    <Division divVariant="flex flex-col place-content-left w-42-1 bg-blue-10 ">
                        <CustomImage imageVariant="" href={Image3} />
                        <Division divVariant="flex flex-col place-content-center py-[2rem] px-4">
                            <h2 className="insights-tags">#shoutouts</h2>
                            <Text textVariant="font-bold lg:text-20px text-12px text-white text-left leading-[23px] w-3/4 font-worksans">{text3}</Text>
                            {/* Meetup with alumni of computer science department university of Karachi */}
                        </Division>
                    </Division>
                </Division>
                <Division divVariant="flex flex-row place-content-center">
                    <Link href="/">
                        <Button className="buttonSecondaryAnimation text-hr font-semibold w-23-3 h-5-9 bg-bg-blue-20 border border-blue-40 rounded-xl text-20px px-2 flex items-center justify-center font-robotoCondensed cursor-pointer" >
                            READ MORE
                        </Button>
                    </Link>



                    {/* <Button className="text-hr font-semibold w-23-3 h-5-9 bg-bg-blue-20 border border-blue-40 rounded-xl text-20px px-2 flex items-center justify-center font-robotoCondensed " > 
                    READ MORE
                </Button> */}
                </Division>
            </Division>
        </Division>





        // {/* <Division divVariant="grid-container w-full flex flex-row justify-center overflow-hidden items-center lg:gap-2 gap-1 py-2 bg-blue-20 ">
        // <Division divVariant="flex flex-col w-full max-w-1140px gap-2"> 
        //     <Division divVariant="flex flex-row place-content-left gap-2">
        //         <Division data-aos="zoom-in" divVariant="flex flex-col place-content-left w-42-1 bg-blue-10 ">
        //             <CustomImage data-aos="fade-up"
        // data-aos-anchor-placement="center-bottom" imageVariant="" href={Image1} />
        //             <Division divVariant="flex flex-col place-content-center py-2 px-4">
        //                 <h2 className="insights-tags">#shoutouts</h2>
        //                 <Text textVariant="font-bold lg:text-20px text-12px text-white text-left leading-[23px] w-3/4 font-worksans">{text1}</Text>
        //             </Division>
        //         </Division>
        //         <Division data-aos="zoom-in-up" divVariant="flex flex-col place-content-left w-42-1 bg-blue-10 ">
        //             <CustomImage imageVariant="" href={Image2} />
        //             <Division divVariant="flex flex-col place-content-center py-2 px-4">
        //                 <h2 className="insights-tags">#INSIGHTS</h2>
        //                 <Text textVariant="font-bold lg:text-20px text-12px text-white text-left leading-[23px] w-3/4 font-worksans">{text2}</Text>
        //             </Division>
        //         </Division>
        //         <Division data-aos="zoom-in" divVariant="flex flex-col place-content-left w-42-1 bg-blue-10 ">
        //             <CustomImage data-aos="zoom-in-down" imageVariant="" href={Image3} />
        //             <Division divVariant="flex flex-col place-content-center py-[2rem] px-4">
        //                 <h2 className="insights-tags">#shoutouts</h2>
        //                 <Text textVariant="font-bold lg:text-20px text-12px text-white text-left leading-[23px] w-3/4 font-worksans">{text3}</Text>
        //             </Division>
        //         </Division>
        //     </Division>
        //     <Division data-aos="zoom-out-left" divVariant="flex flex-row place-content-center">
        //         <Button className="text-hr font-semibold w-23-3 h-5-9 bg-bg-blue-20 border border-blue-40 rounded-xl text-20px px-2 flex items-center justify-center font-robotoCondensed" > 
        //             READ MORE
        //         </Button>
        //     </Division>
        // </Division>
        // </Division> */}
    );
};
