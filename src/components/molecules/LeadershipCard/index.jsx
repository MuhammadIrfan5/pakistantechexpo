import { useEffect, useState } from "react";
import { Division, CustomImage, Anchor, Text } from "../../atoms";
import Yousuf_amin from "../../../media/Amin-Yousuf 1.png";
import Pattern1 from "../../../media/patterns 1.png";

export const LeadershipCard = props => {
  const { picture, Title, Decs } = props;
  return (
    <Division divVariant={`flex flex-row jusityf-center bg-leadership cursor-pointer relative`}>
      <Division divVariant="max-w-300 w-full leadership-hover leadership-molecule">
        <Division divVariant="flex flex-row justify-center leader-background">
          {/* <CustomImage imageVariant="" href={Pattern1} layout="fill" /> */}
          <CustomImage imageVariant="p-3" width={260} height={270} href={picture} />
        </Division>
        <Division divVariant="flex flex-col py-1 md:px-2 px-1">
          <Text textVariant="font-worksans font-bold md:text-30px text-20px text-white text-left"> {Title} </Text>
          <Text textVariant="font-robotoMono text-16px text-tentative_btn text-left md:pb-5 pb-3 leading-6"> {Decs} </Text>
        </Division>
      </Division>
    </Division>


    // <Division divVariant={`flex flex-row jusityf-center bg-leadership cursor-pointer leadership-molecule`}>
    //   <Division divVariant="max-w-300 w-full leadership-hover">
    //     <Division divVariant="flex flex-row justify-center leader-background"> 
    //       {/* <CustomImage imageVariant="" href={Pattern1} layout="fill" /> */}
    //       <CustomImage imageVariant="p-3" width={260} height={270} href={picture} />
    //     </Division>
    //     <Division divVariant="flex flex-col py-1 md:px-2 px-1">
    //       <Text textVariant="font-worksans font-bold md:text-30px text-20px text-white text-left"> MUHAMMAD AMIN YOUSUF </Text>
    //       <Text textVariant="font-robotoMono text-16px text-tentative_btn text-left md:pb-5 pb-3 leading-6">President Wanz International Technology Group Of Companies</Text>
    //     </Division>
    //   </Division>
    // </Division>
  );
};