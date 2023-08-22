import { useEffect, useState } from "react";
import { Division, CustomImage, Anchor, Text } from "../../atoms";
import { Button } from "../../molecules"
import parking from "../../../media/expo_parking1.png";
import crowd from "../../../media/expo_crowd_management1.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
export const CarouselComponent = props => {
    const { Image1 } = props;

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 2500, min: 1500 },
          items: 1
        },
        desktop: {
          breakpoint: { max: 1500, min: 1024 },
          items: 1
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

      const deviceType = {
        desktop : "desktop"
      }



  return (
    <Division divVariant="grid-container w-full flex flex-row overflow-hidden	 justify-center items-center lg:gap-2 gap-1 py-2 bg-blue-20 ">
        <Division divVariant="flex flex-row max-w-1140px">
          <Carousel
              swipeable={true}
              draggable={true}
              showDots={false}
              responsive={responsive}
              deviceType={'desktop'}
              ssr={true} // means to render carousel on server-side.
              infinite={true}
              autoPlaySpeed={3000}
              keyBoardControl={true}
              customTransition="transform 900ms ease-in-out"
              transitionDuration={900}
              containerClass="carousel-container"
              removeArrowOnDeviceType={["tablet", "mobile"]}
              // arrows = {false}
              dotListClass="custom-dot-list-style"
              itemClass="carousel-item-padding-40-px"
              >

              <Division divVariant="flex flex-row gap-2 w-full"> 
                  <Division divVariant="flex flex-col place-items-center ">
                      <Division divVariant="flex flex-row ">
                          <CustomImage imageVariant="object-cover" href={parking} />
                      </Division>
                      <Division divVariant="flex flex-row absolute top-[415px]">
                      {/*  */}
                          <Text textVariant="font-normal text-white lg:text-36px font-worksans leading-[42.23px]">FREE PARKING AND 24 HOURS SECURITY</Text>
                      </Division>
                  </Division>
              </Division>

              <Division divVariant="flex flex-row gap-2"> 
                  <Division divVariant="flex flex-col place-items-center ">
                      <Division divVariant="flex flex-row">
                          <CustomImage imageVariant="object-cover" href={crowd} />
                      </Division>
                      <Division divVariant="flex flex-row absolute top-[415px]">
                      {/* absolute top-[415px] */}
                          <Text textVariant="font-normal text-white lg:text-36px font-worksans leading-[42.23px]">Crowd management facility</Text>
                      </Division>
                  </Division>
              </Division>
              <Division divVariant="flex flex-row gap-2"> 
                  <Division divVariant="flex flex-col place-items-center ">
                      <Division divVariant="flex flex-row">
                          <CustomImage imageVariant="object-cover" href={parking} />
                      </Division>
                      <Division divVariant="flex flex-row absolute top-[415px]">
                      {/* absolute top-[415px] */}
                          <Text textVariant="font-normal text-white lg:text-36px font-worksans leading-[42.23px]">Airport pick and drop, Return ticket (economy)</Text>
                      </Division>
                  </Division>
              </Division>
          </Carousel>
        </Division>
    </Division>
  );
};