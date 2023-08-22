import React from 'react'
import { Division,Text } from "../../atoms";
import { Button, CircleButton } from "../../molecules"
export const AnnouncementSecond = () => {
  return (
    <div className=''>
     <Division divVariant=" text-center announce-last-date">
    <div className='mt-19 mb-14 header-last'>
    <Text textVariant="font-extrabold text-white submission-text font-worksans">Last Date of <br/>Application Submission <br/> is 15th august 2022</Text>
    </div>
    </Division>
  <div className=''>
  <Division divVariant="   flex  lg:flex-row md:flex-row xs:flex-col sm:flex-col justify-evenly bg-white py-2 px-30 announcement-ticket-container">
                <Division divVariant="flex flex-col announcement-ticket-col1">
                    <Division divVariant="flex flex-row md:justify-end justify-center items-center gap-1 lg:gap-4 py-1 sm:py-0">
                        <Division divVariant="flex flex-col justify-center items-center lg:leading-8">
                            <Text textVariant="font-extrabold text-26px lg:text-[40px] text-black">89</Text>
                            <Text textVariant="font-bold counter-slogan text-date_color">DAYS</Text>
                        </Division>
                        <Division divVariant="flex flex-col justify-center items-center lg:leading-8">
                            <Text textVariant="font-extrabold text-26px lg:text-[40px] text-black">11</Text>
                            <Text textVariant="font-bold counter-slogan text-date_color">HOURS</Text>
                        </Division>
                        <Division divVariant="flex flex-col justify-center items-center lg:leading-8">
                            <Text textVariant="font-extrabold text-26px lg:text-[40px] text-black">11</Text>
                            <Text textVariant="font-bold counter-slogan text-date_color">MINUTES</Text>
                        </Division>
                        <Division divVariant="flex flex-col justify-center items-center lg:leading-8">
                            <Text textVariant="font-extrabold text-26px lg:text-[40px] text-black">25</Text>
                            <Text textVariant="font-bold counter-slogan text-date_color">SECONDS</Text>
                        </Division>
                    </Division>                
                </Division>
                <Division divVariant=" ">                                  
                        <Button className="font-bold font-robotoCondensed bg-blue-20 rounded btn-bn-announce-video text-[26px]">
                            BOOK NOW
                        </Button>                    
                </Division>
            </Division>
  </div>
  </div>
  )
}