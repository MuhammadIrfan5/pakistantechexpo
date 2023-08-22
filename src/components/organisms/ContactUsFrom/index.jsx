import React, { useEffect, useState } from "react";
import { Division, CustomImage, Anchor, Text, Input } from "../../atoms";
import { Button } from "../../molecules"
import bg_maskgroup from "../../../media/maps.svg";
import Aos from 'aos'
import 'aos/dist/aos'
export const ContactUsFrom = props => {
    useEffect(()=>{
       Aos.init({duration:2200})
    },[])
    return (
        <Division divVariant="flex flex-col justify-center items-center bg-blue-40 px-5 sm:px-10 md:px-16 lg:px-20 3xl:px-39 py-10">
            <Division divVariant="flex flex-col lg:flex-row">

                <Division data-aos="fade-right" divVariant="flex flex-col lg:w-full gap-2">
                    <Division divVariant="">
                        <Text textVariant="font-worksans text-36px font-normal text-white"> Fillout The Form  </Text>
                    </Division>

                    <Division data-aos="fade-right" divVariant="flex flex-col gap-0-5">
                        <Text textVariant="font-worksans text-sm-custom font-normal text-white"> Name </Text>
                        <Input inputType="text" inputVariant="font-worksans rounded py-0-5 px-0-6 focus:outline-none" inputPlaceholder="Please enter your name..." />
                    </Division>
                    <Division divVariant="flex flex-col gap-0-5">
                        <Text textVariant="font-worksans text-sm-custom font-normal text-white"> Email Address </Text>
                        <Input inputType="email" inputVariant="font-worksans rounded py-0-5 px-0-6 focus:outline-none" inputPlaceholder="Please enter your email address..." />
                    </Division>
                    <Division divVariant="flex flex-col gap-0-5">
                        <Text textVariant="font-worksans text-sm-custom font-normal text-white"> Message  </Text>
                        <Input inputType="text" inputVariant="text-start font-worksans rounded px-0-6 h-10 focus:outline-none" inputPlaceholder="Enter Your message..." />
                    </Division>

                    <Button className="buttonPrimaryAnimation font-robotoCondensed text-hr lg:text-20px text-16px font-bold bg-blue-20 rounded px-2 py-1 text-center cursor-pointer" >
                        Submit
                    </Button>
                </Division>

                <Division  divVariant="hidden lg:flex flex-row lg:relative">
                    <Division divVariant="flex flex-col absolute top-0 left-10">
                        <Text textVariant="font-worksans text-36px font-normal text-white "> Contact Us By Mail. </Text>
                        <Text textVariant="font-worksans text-20px font-normal text-white"> 2nd floor, phololight studio building, plot # 432-c, allama iqbal road, block 2, pechs, karachi, pakistan. </Text>
                    </Division>
                    <Division divVariant="flex relative mix-blend-lighten top-0" >
                        <CustomImage imageVariant="absolute scale-150 2xl:scale-175" href={bg_maskgroup} />
                    </Division>
                </Division>
            </Division>
        </Division>
    );
};
