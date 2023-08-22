import React, { useEffect } from "react";
import { Division, CustomImage, Anchor, Text } from "../../atoms";
import { LeadershipCard } from "../../molecules";
import Yousuf_amin from "../../../media/Amin-Yousuf 1.png";
import FAROOQ from "../../../media/MUHAMMAD-FAROOQ.png";
import Shahida from "../../../media/Shahida.png";
import SyedAmin from "../../../media/Syed-Amin.png";
import WaseemAhmed from "../../../media/Waseem-Ahmed.png";
import ZainUlAbidin from "../../../media/Zain-Ul-Abidin.png";
import ShoaibAhmad from "../../../media/ShoaibAhmadRemovebg.png"
import EngineerDarooKhan from "../../../media/EngineerDarooKhanRemovebg.png"




// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
// import Aos from 'aos'
// import 'aos/dist/aos'
import { Pagination, Navigation } from "swiper";

export const OurLeadership = props => {
    // useEffect(()=>{
    //     Aos.init({duration:2200})
    //   },[])
    const { leaderhdng } = props;
    return (


        <Division divVariant="leadership-carousel-wrapper flex flex-wrap w-full justify-center items-center bg-blue-20 px-5 sm:px-10 md:px-16 lg:px-20 3xl:px-39 gap-2 pt-10 overflow-hidden">

        <Swiper
            modules={[Navigation, Pagination]}
            slidesPerView={3}
            spaceBetween={13}
            slidesPerGroup={1}
            loop={true}
            // loopFillGroupWithBlank={true}
            centeredSlides={false}
            fade='true'
            grabCursor={true}
            pagination={false}
            // pagination={{
            //     clickable: false,
            //     dynamicBullets: true
            // }}
            navigation={true}
            breakpoints={{
                0: {
                    slidesPerView: 1
                },
                400: {
                    slidesPerView: 2
                },
                1200: {
                    slidesPerView: 3
                }

            }}

        >
            <Text textVariant="leadership-hdng text-white font-worksans"> {leaderhdng} </Text>
            <SwiperSlide className="flex flex-row justify-center items-center">
                <LeadershipCard picture={Yousuf_amin} Title="MUHAMMAD AMIN YOUSUF" Decs="President Wanz International Technology Group Of Companies" />
            </SwiperSlide>
            <SwiperSlide className="flex flex-row justify-center items-center">
                <LeadershipCard picture={FAROOQ} Title="MAJ GENERAL FAROOQ" Decs="Rtrd. Patron In Chief Wanz International Technology Group Of Companies" />
            </SwiperSlide>
            <SwiperSlide className="flex flex-row justify-center items-center">
                <LeadershipCard picture={Shahida} Title="MS. SHAHIDA QAISER" Decs="EXECUTIVE DIRECTOR/ADVISER TO BOARD" />
            </SwiperSlide>
            <SwiperSlide className="flex flex-row justify-center items-center">
                <LeadershipCard picture={SyedAmin} Title="Mr. Aminullah Hussaini" Decs="CEO" />
            </SwiperSlide>
            <SwiperSlide className="flex flex-row justify-center items-center">
                <LeadershipCard picture={WaseemAhmed} Title="MR. WASEEM AHMED" Decs="EXECUTIVE DIRECTOR/ADVISER TO BOARD" />
            </SwiperSlide>
            <SwiperSlide className="flex flex-row justify-center items-center">
                <LeadershipCard picture={ZainUlAbidin} Title="Mr. Zain ul Abidin" Decs="DIRECTOR PLANNING & OPERATIONS" />
            </SwiperSlide>


            <SwiperSlide className="flex flex-row justify-center items-center">
                <LeadershipCard picture={ShoaibAhmad} Title="Shoaib Ahmad" Decs="Chairman" />
            </SwiperSlide>
            <SwiperSlide className="flex flex-row justify-center items-center">
                <LeadershipCard picture={EngineerDarooKhan} Title="Engineer Daroo Khan" Decs="Senior Vice President Former President FPCCI" />
            </SwiperSlide>
            {/* <SwiperSlide className="flex flex-row justify-center items-center">
                <LeadershipCard picture={ZainUlAbidin} Title="Mr. Zain ul Abidin" Decs="DIRECTOR PLANNING & OPERATIONS" />
            </SwiperSlide>
            <SwiperSlide className="flex flex-row justify-center items-center">
                <LeadershipCard picture={ZainUlAbidin} Title="Mr. Zain ul Abidin" Decs="DIRECTOR PLANNING & OPERATIONS" />
            </SwiperSlide> */}
        </Swiper>
    </Division>



        // <Division divVariant="leadership-carousel-wrapper flex flex-wrap w-full justify-center items-center bg-blue-20 px-5 sm:px-10 md:px-16 lg:px-20 3xl:px-39 gap-2 py-10 overflow-hidden">
        
        //     <Swiper
        //         modules={[Navigation, Pagination]}
        //         slidesPerView={3}
        //         spaceBetween={13}
        //         slidesPerGroup={3}
        //         loop={true}
        //         // loopFillGroupWithBlank={true}
        //         centeredSlides={false}
        //         fade='true'
        //         grabCursor={true}
        //         pagination={{
        //             clickable: false,
        //             dynamicBullets: false
        //         }}
        //         navigation={true}
        //         breakpoints={{
        //             0: {
        //                 slidesPerView: 1
        //             },
        //             400: {
        //                 slidesPerView: 2
        //             },
        //             1200: {
        //                 slidesPerView: 3
        //             }
                    
        //         }}

        //     >
        //         <Text textVariant="leadership-hdng text-white font-worksans"> {leaderhdng} </Text>
        //         {/* <Division divVariant="mySwiper flex flex-row"> */}
        //         <SwiperSlide data-aos="fade-right" className="flex flex-row justify-center items-center">
        //             <LeadershipCard picture={Yousuf_amin} />
        //         </SwiperSlide>
        //         <SwiperSlide data-aos="fade-up" className="flex flex-row justify-center items-center">
        //             <LeadershipCard picture={Yousuf_amin} />
        //         </SwiperSlide>
        //         <SwiperSlide   data-aos="fade-right"  className="flex flex-row justify-center items-center">
        //             <LeadershipCard picture={Yousuf_amin} />
        //         </SwiperSlide>
        //         <SwiperSlide className="flex flex-row justify-center items-center">
        //             <LeadershipCard picture={Yousuf_amin} />
        //         </SwiperSlide>
        //         <SwiperSlide className="flex flex-row justify-center items-center">
        //             <LeadershipCard picture={Yousuf_amin} />
        //         </SwiperSlide>
        //         <SwiperSlide className="flex flex-row justify-center items-center">
        //             <LeadershipCard picture={Yousuf_amin} />
        //         </SwiperSlide>
        //         <SwiperSlide className="flex flex-row justify-center items-center">
        //             <LeadershipCard picture={Yousuf_amin} />
        //         </SwiperSlide>
        //         <SwiperSlide className="flex flex-row justify-center items-center">
        //             <LeadershipCard picture={Yousuf_amin} />
        //         </SwiperSlide>
        //         <SwiperSlide className="flex flex-row justify-center items-center">
        //             <LeadershipCard picture={Yousuf_amin} />
        //         </SwiperSlide>
        //         {/* </Division> */}


        //     </Swiper>
        // </Division>
    );
};
