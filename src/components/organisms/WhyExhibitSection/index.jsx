import { Division, CustomImage, Text } from "../../atoms";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

export const WhyExhibitSection = () => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + "</span>";
    }
  };
  return (

    // why-exhibit-col

    <Division divVariant="why-exhibit-section">
      <Division className="why-exhibit-wrapper flex items-center">
        <Swiper
          pagination={pagination}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Division className="grid-container why-exhibit-col cursor-pointer">
              <h2>LETTER OF APPRECIATION</h2>
              <p className="exhibit-qout font-worksans font-extrabold"> I extend my heartflet wishes to WANZ International Technology, the organizers, participants and attendees for a successful tradeshow. </p>
              <p className="exhibit-author-loc font-worksans font-bold">Lisa M.GillmorMayor, City of Santa Clara</p>
            </Division>
          </SwiperSlide>
          <SwiperSlide>
            <Division className="grid-container why-exhibit-col cursor-pointer">
              <h2>LETTER OF APPRECIATION</h2>
              <p className="exhibit-qout font-worksans font-extrabold"> I extend my heartflet wishes to WANZ International Technology, the organizers, participants and attendees for a successful tradeshow. </p>
              <p className="exhibit-author-loc font-worksans font-bold">Lisa M.GillmorMayor, City of Santa Clara</p>
            </Division>
          </SwiperSlide>
          <SwiperSlide>
            <Division className="grid-container why-exhibit-col cursor-pointer">
              <h2>LETTER OF APPRECIATION</h2>
              <p className="exhibit-qout font-worksans font-extrabold"> I extend my heartflet wishes to WANZ International Technology, the organizers, participants and attendees for a successful tradeshow. </p>
              <p className="exhibit-author-loc font-worksans font-bold">Lisa M.GillmorMayor, City of Santa Clara</p>
            </Division>
          </SwiperSlide>
          <SwiperSlide>
            <Division className="grid-container why-exhibit-col cursor-pointer">
              <h2>LETTER OF APPRECIATION</h2>
              <p className="exhibit-qout font-worksans font-extrabold"> I extend my heartflet wishes to WANZ International Technology, the organizers, participants and attendees for a successful tradeshow. </p>
              <p className="exhibit-author-loc font-worksans font-bold">Lisa M.GillmorMayor, City of Santa Clara</p>
            </Division>
          </SwiperSlide>
          <SwiperSlide>
            <Division className="grid-container why-exhibit-col cursor-pointer">
              <h2>LETTER OF APPRECIATION</h2>
              <p className="exhibit-qout font-worksans font-extrabold"> I extend my heartflet wishes to WANZ International Technology, the organizers, participants and attendees for a successful tradeshow. </p>
              <p className="exhibit-author-loc font-worksans font-bold">Lisa M.GillmorMayor, City of Santa Clara</p>
            </Division>
          </SwiperSlide>
          <SwiperSlide>
            <Division className="grid-container why-exhibit-col cursor-pointer">
              <h2>LETTER OF APPRECIATION</h2>
              <p className="exhibit-qout font-worksans font-extrabold"> I extend my heartflet wishes to WANZ International Technology, the organizers, participants and attendees for a successful tradeshow. </p>
              <p className="exhibit-author-loc font-worksans font-bold">Lisa M.GillmorMayor, City of Santa Clara</p>
            </Division>
          </SwiperSlide>
        </Swiper>


        {/* <h2>LETTER OF APPRECIATION</h2>
          <p className="exhibit-qout font-worksans font-extrabold"> I extend my heartflet wishes to WANZ International Technology, the organizers, participants and attendees for a successful tradeshow. </p>
          <p className="exhibit-author-loc font-worksans font-bold">Lisa M.GillmorMayor, City of Santa Clara</p>
          <Division className="exhibit-slider-dots-wrapper flex flex-row">
            <Division className="exhibit-slider-dots"></Division>
            <Division className="exhibit-slider-dots"></Division>
            <Division className="exhibit-slider-dots active"></Division>
            <Division className="exhibit-slider-dots"></Division>
          </Division> */}
      </Division>
    </Division>



    // <Division divVariant="why-exhibit-section">
    //    <Division className="why-exhibit-wrapper flex items-center">
    //     <Division className="grid-container why-exhibit-col">
    //       <h2>LETTER OF APPRECIATION</h2>
    //       <p className="exhibit-qout font-worksans font-extrabold"> I extend my heartflet wishes to WANZ International Technology, the organizers, participants and attendees for a successful tradeshow. </p>
    //       <p className="exhibit-author-loc font-worksans font-bold">Lisa M.GillmorMayor, City of Santa Clara</p>
    //       <Division className="exhibit-slider-dots-wrapper flex flex-row">
    //         <Division className="exhibit-slider-dots"></Division>
    //         <Division className="exhibit-slider-dots"></Division>
    //         <Division className="exhibit-slider-dots active"></Division>
    //         <Division className="exhibit-slider-dots"></Division>
    //       </Division>
    //     </Division>
    //    </Division>
    // </Division>
  );
};
