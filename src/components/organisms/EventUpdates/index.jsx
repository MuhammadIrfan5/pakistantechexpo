import { useEffect, useState } from "react";
import { Division, CustomImage, Anchor, Text } from "../../atoms";
import { Button } from "../../molecules"
import MaskGroup from "../../../media/MaskGroup.png";
import MaskGroup1 from "../../../media/MaskGroup291.png";
import AshfaqAhmed from "../../../media/MaskGroup11.png";
import Image2 from "../../../media/MaskGroup21.png";
import Image3 from "../../../media/MaskGroup31.png";

import Aos from 'aos';
import 'aos/dist/aos'


export const EventUpdates = props => {
    useEffect(()=>{
        Aos.init({duration:2200})
    })
    const { Image1, Image2, Image3, Image4, Image5 } = props;

    return (
        <Division divVariant="flex flex-col justify-center items-center bg-navyBlue  gap-2   mx-5  pt-6-5 pb-8 sm:pb-12 gap-2">
            {/* <Division divVariant="flex flex-row">  */}
            <Division data-aos="fade-left" divVariant="flex flex-col ">
                <Text textVariant="font-extrabold text-white lg:text-5xl text-left sm:text-2xl font-worksans">INSIGHTS</Text>
            </Division>
            {/* </Division> */}

            <Division divVariant="flex flex-col lg:flex-row gap-2">
                <Division  data-aos="fade-left"  divVariant="flex flex-row relative max-w-754 w-full">
                    <CustomImage imageVariant="cover" href={Image1} />
                    <Text textVariant="absolute bottom-1 lg:bottom-5 px-1 sm:px-3 md:px-4 lg:px-5 text-14px xs:text-20px sm:text-25px md:text-30px lg:text-30px xs:leading-7 md:leading-10 text-white font-worksans font-bold"> Wanz international technology recently signed a memorandum of understanding (mou) with UIT university. </Text>
                </Division>
                <Division divVariant="flex flex-col max-w-365 w-full bg-blue-10">
                    <Division divVariant="flex flex-row relative">
                        <CustomImage imageVariant="cover" href={Image1} />
                    </Division>
                    <Division divVariant="flex flex-row ">
                        <Text textVariant="bottom-1 lg:bottom-5 px-1 md:px-3 py-1 text-14px xs:text-16px sm:text-18px md:text-18px lg:text-20px xs:leading-7 md:leading-8 text-white font-worksans font-bold"> Meetup with alumni of computer science department university of Karachi </Text>
                    </Division>
                </Division>
            </Division>
            

            {/* <Division divVariant="flex flex-col lg:flex-row gap-2">
                <Division divVariant="flex flex-row relative max-w-754 w-full">
                    <CustomImage imageVariant="cover" href={Image1} />
                    <Text textVariant="absolute bottom-1 lg:bottom-5 px-1 sm:px-3 md:px-4 lg:px-5 text-14px xs:text-20px sm:text-25px md:text-30px lg:text-30px xs:leading-7 md:leading-10 text-white font-worksans font-bold"> Wanz international technology recently signed a memorandum of understanding (mou) with UIT university. </Text>
                </Division>
                <Division divVariant="flex flex-col max-w-365 w-full bg-blue-10">
                    <Division divVariant="flex flex-row relative">
                        <CustomImage imageVariant="cover" href={Image1} />
                    </Division>
                    <Division divVariant="flex flex-row ">
                        <Text textVariant="bottom-1 lg:bottom-5 px-1 md:px-3 py-1 text-14px xs:text-16px sm:text-18px md:text-18px lg:text-20px xs:leading-7 md:leading-8 text-white font-worksans font-bold"> Meetup with alumni of computer science department university of Karachi </Text>
                    </Division>
                </Division>
            </Division> */}

            {/* <Carousel
                swipeable={true}
                draggable={true}
                showDots={false}
                responsive={responsive}
                deviceType={'desktop'}
                ssr={true} // means to render carousel on server-side.
                infinite={false}
                autoPlaySpeed={3000}
                keyBoardControl={true}
                customTransition="transform 900ms ease-in-out"
                transitionDuration={900}
                containerClass="carousel-container flex flex-row"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                arrows = {true}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
            > */}









            {/* <Division divVariant="flex flex-wrap justify-center gap-2 w-full">
                <Division divVariant="flex flex-col max-w-365 w-full bg-blue-10">
                    <Division divVariant="flex flex-row relative">
                        <CustomImage imageVariant="cover" href={Image1} />
                    </Division>
                    <Division divVariant="flex flex-row ">
                        <Text textVariant="bottom-1 lg:bottom-5 px-1 md:px-3 py-1 text-14px xs:text-16px sm:text-18px md:text-18px lg:text-20px xs:leading-7 md:leading-8 text-white font-worksans font-bold"> Meetup with alumni of computer science department university of Karachi </Text>
                    </Division>
                </Division>
                <Division divVariant="flex flex-col max-w-365 w-full bg-blue-10">
                    <Division divVariant="flex flex-row relative">
                        <CustomImage imageVariant="cover" href={Image1} />
                    </Division>
                    <Division divVariant="flex flex-row ">
                        <Text textVariant="bottom-1 lg:bottom-5 px-1 md:px-3 py-1 text-14px xs:text-16px sm:text-18px md:text-18px lg:text-20px xs:leading-7 md:leading-8 text-white font-worksans font-bold"> Meetup with alumni of computer science department university of Karachi </Text>
                    </Division>
                </Division>
                <Division divVariant="flex flex-col max-w-365 w-full bg-blue-10">
                    <Division divVariant="flex flex-row relative">
                        <CustomImage imageVariant="cover" href={Image1} />
                    </Division>
                    <Division divVariant="flex flex-row ">
                        <Text textVariant="bottom-1 lg:bottom-5 px-1 md:px-3 py-1 text-14px xs:text-16px sm:text-18px md:text-18px lg:text-20px xs:leading-7 md:leading-8 text-white font-worksans font-bold"> Meetup with alumni of computer science department university of Karachi </Text>
                    </Division>
                </Division>
                <Division divVariant="flex flex-col max-w-365 w-full bg-blue-10">
                    <Division divVariant="flex flex-row relative">
                        <CustomImage imageVariant="cover" href={Image1} />
                    </Division>
                    <Division divVariant="flex flex-row ">
                        <Text textVariant="bottom-1 lg:bottom-5 px-1 md:px-3 py-1 text-14px xs:text-16px sm:text-18px md:text-18px lg:text-20px xs:leading-7 md:leading-8 text-white font-worksans font-bold"> Meetup with alumni of computer science department university of Karachi </Text>
                    </Division>
                </Division>
                <Division divVariant="flex flex-col max-w-365 w-full bg-blue-10">
                    <Division divVariant="flex flex-row relative">
                        <CustomImage imageVariant="cover" href={Image1} />
                    </Division>
                    <Division divVariant="flex flex-row ">
                        <Text textVariant="bottom-1 lg:bottom-5 px-1 md:px-3 py-1 text-14px xs:text-16px sm:text-18px md:text-18px lg:text-20px xs:leading-7 md:leading-8 text-white font-worksans font-bold"> Meetup with alumni of computer science department university of Karachi </Text>
                    </Division>
                </Division>
                <Division divVariant="flex flex-col max-w-365 w-full bg-blue-10">
                    <Division divVariant="flex flex-row relative">
                        <CustomImage imageVariant="cover" href={Image1} />
                    </Division>
                    <Division divVariant="flex flex-row ">
                        <Text textVariant="bottom-1 lg:bottom-5 px-1 md:px-3 py-1 text-14px xs:text-16px sm:text-18px md:text-18px lg:text-20px xs:leading-7 md:leading-8 text-white font-worksans font-bold"> Meetup with alumni of computer science department university of Karachi </Text>
                    </Division>
                </Division>
                <Division divVariant="flex flex-col max-w-365 w-full bg-blue-10">
                    <Division divVariant="flex flex-row relative">
                        <CustomImage imageVariant="cover" href={Image1} />
                    </Division>
                    <Division divVariant="flex flex-row ">
                        <Text textVariant="bottom-1 lg:bottom-5 px-1 md:px-3 py-1 text-14px xs:text-16px sm:text-18px md:text-18px lg:text-20px xs:leading-7 md:leading-8 text-white font-worksans font-bold"> Meetup with alumni of computer science department university of Karachi </Text>
                    </Division>
                </Division>
            </Division> */}

            {/* </Carousel> */}



            {/* <Division divVariant="flex flex-row max-w-1140px w-full gap-2 border border-white">
            <Division divVariant="flex flex-row items-end max-w-75-2">
                <CustomImage imageVariant="bg-cover" href={Image1} width={752} height={450}/>
                <Text textVariant="font-normal text-mainText lg:text-lg md:text-sm-custom text-sm-small absolute lg:py-16 py-6 lg:px-4 px-2">INSIGHTS</Text>
                <Text textVariant="font-worksans lg:max-w-2/5 max-w-3/4 w-full font-extrabold text-white lg:text-3xl text-sm-custom absolute lg:py-3 lg:px-4 px-2">
                INSIGHTS
                Local Companies To Further Their Digital Advancement
                </Text>
            </Division>
            <Division divVariant="flex flex-col max-w-36-4 bg-blue-10 ">
                <CustomImage imageVariant="" href={Image2}/>
                <Division divVariant="flex flex-col justify-center items-center py-2 gap-2">
                    <Text textVariant="font-bold lg:text-24px text-12px text-hashtag text-left leading-[23px] max-w-3/4 font-robotoMono">#shoutouts</Text>
                    <Text textVariant="font-normal lg:text-24px text-12px text-white text-left leading-[23px] max-w-3/4 font-worksans">President WANZ Group</Text>
                </Division>
            </Division>
        </Division> */}
            {/* <Articles Image1={AshfaqAhmed} text1="GM IT - EFU Life Insurance" Image2={Image2} text2="Local Companies To Further Their Digital Advancement" Image3={Image3} text3="CIO - Pakistan Stock Exchange" /> */}
            {/* <Division divVariant="flex flex-row max-w-1140px gap-2">
            <Division divVariant="flex flex-col max-w-36-4 bg-blue-10 ">
                <CustomImage imageVariant="" href={Image3}/>
                <Division divVariant="flex flex-col justify-center items-center py-2 gap-2">
                    <Text textVariant="font-bold lg:text-24px text-12px text-hashtag text-left leading-[23px] max-w-3/4 font-robotoMono">#shoutouts</Text>
                    <Text textVariant="font-normal lg:text-24px text-12px text-white text-left leading-[23px] max-w-3/4 font-worksans">GM IT - EFU Life Insurance</Text>
                </Division>
            </Division>
            <Division divVariant="flex flex-col max-w-36-4 bg-blue-10 ">
                <CustomImage imageVariant="" href={Image4}/>
                <Division divVariant="flex flex-col justify-center items-center py-2 gap-2">
                    <Text textVariant="font-bold lg:text-24px text-12px text-hashtag text-left leading-[23px] max-w-3/4 font-robotoMono">#shoutouts</Text>
                    <Text textVariant="font-normal lg:text-24px text-12px text-white text-left leading-[23px] max-w-3/4 font-worksans">Local Companies To Further Their Digital Advancement</Text>
                </Division>
            </Division>
            <Division divVariant="flex flex-col max-w-36-4 bg-blue-10 ">
                <CustomImage imageVariant="" href={Image5}/>
                <Division divVariant="flex flex-col justify-center items-center py-2 gap-2">
                    <Text textVariant="font-bold lg:text-24px text-12px text-hashtag text-left leading-[23px] max-w-3/4 font-robotoMono">#shoutouts</Text>
                    <Text textVariant="font-normal lg:text-24px text-12px text-white text-left leading-[23px] max-w-3/4 font-worksans">CIO - Pakistan Stock Exchange</Text>
                </Division>
            </Division>
        </Division> */}
            {/* <Division divVariant="flex flex-row place-content-center">
            <Button className="text-hr font-semibold max-w-23-3 h-5-9 bg-bg-blue-20 border border-blue-40 rounded-xl text-20px px-2 flex items-center justify-center font-robotoCondensed" > 
                READ MORE
            </Button>
        </Division> */}
        </Division>
    );
};
