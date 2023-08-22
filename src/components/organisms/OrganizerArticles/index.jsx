import { useEffect, useState } from "react";
import Link from 'next/link';
import { Division, CustomImage, Anchor, Text } from "../../atoms";
import { Button } from "../../molecules"
import event12 from "../../../media/event12.png";
import Aos from 'aos'

export const OrganizerArticles = props => {
    useEffect(() => {
        Aos.init({ duration: 2200 })
    }, [])
    const { Image1, Image2, Image3, text1, text2, text3, texthdng, textslogan } = props;
    return (
        <Division divVariant="grid-container w-full flex flex-row justify-center overflow-hidden items-center lg:gap-2 gap-1 py-2 bg-blue-20 ">
            <Division divVariant="flex flex-col max-w-1140px gap-2">
                <Division divVariant="flex flex-col max-w-1/3 lg:max-w-1/2 w-full text-white gap-2">
                    <Division data-aos="fade-left" divVariant="">
                        <Text textVariant="font-worksans organize-hero-inner-hdng ">{texthdng}</Text>
                    </Division>
                    <Division data-aos="fade-left" divVariant="">
                        <Text textVariant="font-worksans organize-hero-inner-text">{textslogan}</Text>
                    </Division>
                </Division>
                <Division divVariant="flex md:flex-row flex-col gap-2 organizer-article-wrapper">
                    <Division data-aos="fade-right" divVariant="organizer-featured-article-item">
                        <CustomImage imageVariant="featured-article-item-image" href={Image1} />
                        <Division divVariant="flex justify-center">
                            <Text textVariant="featured-article-item-title text-white font-worksans">{text1}</Text>
                        </Division>
                    </Division>
                    <Division divVariant="flex flex-col bg-blue-10 max-w-365 w-full">
                        <CustomImage data-aos="fade-left" imageVariant=" article-item-image" href={Image2} />
                        <Division data-aos="fade-left" divVariant="py-2 px-1">
                            <Text textVariant="article-item-title text-white font-worksans">{text2}</Text>
                        </Division>
                    </Division>
                </Division>
                <Division divVariant="flex flex-row justify-center items-center">
                    <Link href="/">
                        <Button className="buttonSecondaryAnimation text-hr font-semibold w-23-3 h-5-9 bg-bg-blue-20 border border-blue-40 rounded-xl text-20px px-2 flex items-center justify-center font-robotoCondensed cursor-pointer" >
                            READ MORE
                        </Button>
                    </Link>
                </Division>
            </Division>
        </Division>
    );
};