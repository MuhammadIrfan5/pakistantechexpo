import { useEffect, useState } from "react";
import Link from 'next/link';
import { Division, CustomImage, Anchor, Text } from "../../atoms";
import { Button } from "../../molecules"
// import { gsap } from "gsap";
// import calaender from "../../../media/Icon awesome-calendar-check.svg";
// import location from "../../../media/Icon material-location-on.svg";
export const EventHero = props => {
    // var tl = gsap.timeline();
    const { image, text1, text2, icon1, icon2, icontext1, icontext2, CounterSloganText } = props;

    useEffect(() => {
        // tl.fromTo(".content", {x: -20}, {duration: 2, x: 50});
    });

    return (
        <Division divVariant="flex flex-row overflow-hidden justify-center items-center relative z-1 main-hero">
            <Division divVariant="flex flex-col bg-Linear-gradient-custom drop-shadow-[0px 4px 4px rgba(0, 0, 0, 0.25)]">
                <Division divVariant="flex flex-row">
                    {/* mix-blend-overlay */}
                    <CustomImage imageVariant="relative object-cover hero-bg-desktop" href={image} />
                </Division>
                <Division divVariant="grid-container flex flex-row justify-center absolute gap-2 main-hero-hdng-wrapper">
                    {/* static */}
                    <Division divVariant="flex flex-col justify-center">
                        <Text textVariant="font-extrabold text-white text-left font-worksans main-hero-hdng">{text1}</Text>
                        <Text textVariant="font-semibold sm:text-18px md:text-22px lg:text-25px 3xl:text-36px text-white text-left w-4/5	font-worksans">
                            {text2}
                        </Text>
                        <Division divVariant="flex flex-col justify-center">
                            <Division divVariant="event-row-wrapper flex lg:flex-row flex-col">
                                <Division divVariant="event-row flex flex-row items-center gap-1 mr-[50px]">
                                    {icon1 && <CustomImage imageVariant="event-icon relative" href={icon1} />}
                                    <Text textVariant="event-icon-text text-white">{icontext1}</Text>
                                </Division>
                                <Division divVariant="event-row flex flex-row items-center gap-1">
                                    {icon2 && <CustomImage imageVariant="event-icon relative" href={icon2} />}
                                    <Text textVariant="event-icon-text  text-white">{icontext2}</Text>
                                </Division>
                            </Division>
                        </Division>
                    </Division>
                    {/**/}
                    <Division divVariant="days-counter text-center">
                        <Division divVariant="top-slogan">{CounterSloganText}</Division>
                        <p className="ticket-price"><span>$</span>99.99</p>
                        <Link href="/register">
                            <a href="#" className="hero-cta-btn cursor-pointer">Book Now</a>
                        </Link>
                    </Division>
                </Division>
            </Division>
        </Division>
    );
};
