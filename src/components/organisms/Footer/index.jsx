import { useEffect, useState } from "react";
import { Division, CustomImage, Anchor, Text} from "../../atoms";
import Logo from "../../../media/Logo.svg";
import fb from "../../../media/facebook-1.svg"
import twitter from "../../../media/youtube-1.svg"
import insta from "../../../media/instagram-1.svg"
import Link from "next/link";

export const Footer = props => {
  return (
    <Division divVariant="grid-container flex md:flex-row md:gap-0 flex-col gap-4 md:justify-between md:items-center py-8">
      <Division divVariant="flex flex-col gap-1">
        <Division divVariant="flex flex-col gap-0-5">
          <Text textVariant="text-14px font-worksans text-mainText">PAKISTAN: +92-336-365-2365</Text>
          <Text textVariant="text-14px font-worksans text-mainText">CANADA: +92-336-365-2365</Text>
          <Text textVariant="text-14px font-worksans text-mainText">UNITED KINGDOM: +92-336-365-2365</Text>
        </Division>

        <Division divVariant="flex flex-row gap-2">
          <CustomImage imageVariant="" href={fb} width={30} height={30} />
          <CustomImage imageVariant="" href={insta} width={30} height={30} />
          <CustomImage imageVariant="" href={twitter} width={30} height={30} />
        </Division>
      </Division>


      <Division divVariant="flex flex-row md:justify-between gap-5">
        <Division divVariant="flex flex-col gap-1">
          <Text textVariant="font-14px font-worksans font-normal text-mainText hover:text-hr duration-500 cursor-pointer">About Us</Text>
          <Link href="/venue">
          <Text textVariant="font-14px font-worksans font-normal text-mainText hover:text-hr duration-500 cursor-pointer">Event Details</Text>
          </Link>
          <Text textVariant="font-14px font-worksans font-normal text-mainText hover:text-hr duration-500 cursor-pointer">Journey</Text>
         <Link href="/articlespage">
         <Text textVariant="font-14px font-worksans font-normal text-mainText hover:text-hr duration-500 cursor-pointer">Articles</Text>
         </Link>
        </Division>
        <Division divVariant="flex flex-col gap-1">
          <Text textVariant="font-14px font-worksans font-normal text-mainText hover:text-hr duration-500 cursor-pointer">Organizers</Text>
         <Link href="/insights">
         <Text textVariant="font-14px font-worksans font-normal text-mainText hover:text-hr duration-500 cursor-pointer ">Insights</Text>
         </Link>
          <Text textVariant="font-14px font-worksans font-normal text-mainText hover:text-hr duration-500 cursor-pointer">Get In Touch</Text>
        </Division>
      </Division>

      <Division divVariant="flex flex-col md:items-end gap-2 md:gap-0">
        <Division divVariant="flex flex-row">
          <CustomImage imageVariant="" href={Logo} width={300} height={100} />
        </Division>
        <Division divVariant="flex flex-col md:text-right">
          <Text textVariant="font-worksans text-14px font-light text-mainText">&copy; 2022 Terms & Conditions</Text>
          <Text textVariant="font-worksans text-14px font-light text-mainText">Privacy & Cookie Policy</Text>
        </Division>
      </Division>







      {/* <Division divVariant="grid-container flex lg:flex-col flex-row gap-2">
        <Division divVariant="grid-container flex lg:flex-row flex-col text-left gap-2 lg:gap-8">
            <Text textVariant="font-normal text-mainText">About Us</Text>
            <Text textVariant="font-normal text-mainText">Organizers</Text>
        </Division>
        <Division divVariant="grid-container flex lg:flex-row flex-col text-left gap-2 lg:gap-8">
            <Text textVariant="font-normal text-mainText">Event Details</Text>
            <Text textVariant="font-normal text-mainText ">Insights</Text>
        </Division>
        <Division divVariant="grid-container flex lg:flex-row flex-col text-left gap-2 lg:gap-8">
            <Text textVariant="font-normal text-mainText">Journey</Text>
            <Text textVariant="font-normal text-mainText">Get In Touch</Text>
        </Division>
      </Division> */}
      {/* <Division divVariant="grid-container flex lg:flex-col">
          <Division divVariant="flex flex-row">
            <CustomImage imageVariant="" href={Logo} width={300} height={100} />
          </Division>
          <Division divVariant="flex flex-col place-content-end text-right">
              <Text textVariant=" text-mainText">2022 Terms & Conditions</Text>
              <Text textVariant=" text-mainText">Privacy & Cookie Policy</Text>
          </Division>
      </Division> */}
    </Division>
  );
};
