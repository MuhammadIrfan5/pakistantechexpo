import React, { useEffect, useState } from "react";
import { Header, Footer, Venue, EventHero, Announcement, EventSnaps, Articles, OurLeadership, OrganizedBy, TentativeArena, Participants, WhyExhibitSection, StrategicPartners, MOU, TabsSlider, VideoDev, AnnouncementSecond } from '../../organisms';
import { Division, CustomImage, Text } from '../../atoms';
// import { LeadershipCard } from '../../molecules';
import Image21 from "../../../media/Image21.png";
import uit from "../../../media/insight-featuerd-article.png";
import event12 from "../../../media/p-wanz.png";
import event13 from "../../../media/p-wanz.png";
import maskgroup1 from "../../../media/gm-efu.png";
import maskgroup2 from "../../../media/local-companies.png";
import maskgroup3 from "../../../media/cio-pse.png";
import calaender from "../../../media/calender-icon.png";
import location from "../../../media/location-icon.png";
import wanzorganizerimage from "../../../media/organizerslogos1.png";


import Aos from 'aos';
import "aos/dist/aos";
export function Home() {


  useEffect(() => {
    Aos.init({ duration: 2200 })
  }, [])
  const [navigationRender, setNavigationRender] = useState(false);
  return (
    <Division divVariant="bg-blue-20 overflow-x-auto">
      <Header data-aos="fade-down" HeaderPositionProperty="absolute w-full bg-transparent z-10" navigationRender={navigationRender} setNavigationRender={setNavigationRender} />
      {/* <Header data-aos="fade-down"  HeaderPositionProperty="absolute w-full bg-transparent z-10  " /> */}
      <div data-aos="fade-right">
        <EventHero image={Image21} text1="PAKISTAN'S BIGGEST TECHNOLOGY EXPO"
          icon1={calaender} icon2={location} icontext1="17th - 19th Sep 2022" icontext2="Silicon Valley, Santa Clara USA" CounterSloganText="Early Bird" />
      </div>

      <div className="below-event-hero-wrapper pt-12" >
        {/* <div className="video-box" data-aos="fade-up"
          data-aos-duration="2200" >
          <CustomImage imageVariant="video-poster" href={videourl} />
        </div> */}


        <div className="video-box relative mb-12" data-aos="fade-up"
          data-aos-duration="2200" >

          {/* <CustomImage imageVariant="video-poster"  href={videourl} /> */}
          <VideoDev />
          <div className="second-announce">
            <AnnouncementSecond />
          </div>


        </div>



        <div data-aos="fade-up-right" className="wanz-section wanz-section-bg">
          <div className="flex flex-col items-start about-wanz-wrapper">
            <h3>Organizer</h3>
            <h2 className="font-worksans font-extrabold">WANZ GLOBAL BUSINESS IS AN <br />EVENTS MANAGEMENT COMPANY</h2>
            <p className="font-worksans">It Organizes Exhibitions, Trade Shows, Fashion Shows, And Product-Specific Expos – Hosting Several<br /> Delegations From Across The World. It Also Conducts B2B Meetings And Seminars. Wanz Global Business <br />Has Set Its Foot Firmly In The North American Markets Viz A Viz Working With Top Companies In The US,<br /> Canada, UK And Japan.</p>
            <a href="#" className="cta-about-wanz hover:text-hr cursor-pointer duration-500 nav-molecule">Learn More</a>
            <CustomImage imageVariant="wanz-organizer-image" href={wanzorganizerimage} />
          </div>
        </div>
      </div>
      {/* <div  data-aos="fade-right" className="offer-tab-section">
          <h2 className="font-worksans font-extrabold text-white tab-hndg">WHAT WE OFFER</h2>
          <div className="offer-tab">
          <a onClick={sliderimageone} className="offer-tab-button  hover:text-hr cursor-pointer duration-500 nav-molecule text-white">EXHIBITION</a>
          <a onClick={sliderimagetwo} className="offer-tab-button hover:text-hr cursor-pointer duration-500 nav-molecule">CROWD ENGAGEMENT</a>
          <a onClick={sliderimagethree} className="offer-tab-button hover:text-hr cursor-pointer duration-500 nav-molecule">EVENT MANAGEMENT</a>
          </div>
          <div id="exhibition" className="tabcontent text-white">
            <div className="tab-content-wrapper absolute">
            <h3 className="tab-content-hdng font-worksans font-extrabold font-extrabold-2">SHOWCASE YOUR BUSINESS</h3>
            <p className="tab-content-desc font-worksans">To IT Industry Leaders And Investors Of The Silicon Valley. The Wanz Tech Expo Offers The Perfect Platform To Launch New Initiatives And Associate Your Brand With Cutting-Edge IT Technology.</p>
            </div>
          </div>

          {/* <div id="crowd-engagment" className="tabcontent">
            <h3>Paris</h3>
            <p>Paris is the capital of France.</p> 
          </div> */}

      {/* <div id="event-management" className="tabcontent">
            <h3>Tokyo</h3>
            <p>Tokyo is the capital of Japan.</p>
          </div> */}
      {/* </div> */}
      <TabsSlider />
      <Division data-aos="fade-left" divVariant="grid-container aim-section flex flex-col gap-3 lg:gap-1 text-white">
        <Division divVariant="flex flex-col">
          <Text textVariant="font-worksans font-extrabold text-30px md:text-36px text-hr">AIMS & <br />OBJECTIVES</Text>
          <Text textVariant="font-worksans">To take pakistan’s IT <br />industry $20 Billion by 2025</Text>
        </Division>
        <Division>
          <Text textVariant="font-worksans">The Pakistan Tech Expo Global IT Tradeshow Aims To Create A Platform For Local Companies To Further Their Digital Advancement, Match-Making, Networking, And Business Growth Opportunities. The Tradeshow Aims To Bridge The Gap Between The Local IT Companies And The IT Giants For Startups, IT Professionals, Smes, And Experts, The Tradeshow Will Be A Great Opportunity To Connect With Other Key Players In The IT Industry.</Text>
        </Division>
      </Division>
      <div data-aos="fade-right" id="nbopportunities" className="tabcontent text-white">
        <div className="tab-content-wrapper absolute flex flex-col gap-2">
          <h3 className="tab-content-hdng font-worksans font-extrabold">NETWORKING & BUSINESS OPPORTUNITIES</h3>
          <p className="tab-content-desc font-worksans">In Order To Amplify The Bilateral  Trade Between Pakistan And The US, Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industrys Standard Dummy Text Ever Since The 1500S, When An Unknown Printer Took A Galley Of Type And Scrambled It To Make A Type Specimen Book.</p>
        </div>
      </div>
      <div className="">
        <TentativeArena />
      </div>

      <div data-aos="zoom-in" className="partciipants-home-sec">
        <Participants />
      </div>
      <div data-aos="zoom-out-up" >
        <WhyExhibitSection />
      </div>

      <OurLeadership leaderhdng="OUR LEADERSHIP" />
      <EventSnaps Image1={uit} Image2={event12} Image4={event13} />
      <Division divVariant="md:flex hidden">
        <Articles
          Image1={maskgroup1} text1="GM IT - EFU Life Insurance"
          Image2={maskgroup2} text2="Local Companies To Further Their Digital Advancement"
          Image3={maskgroup3} text3="CIO - Pakistan Stock Exchange" />
      </Division>
      <div data-aos="fade-right">
        <Announcement bg_color="bg-navyBlue" text1="" text2="" />
      </div>

      <Venue />

      <OrganizedBy />
      <StrategicPartners />
      {/* <div data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"> */}
      <MOU />
      {/* </div> */}

      <Footer />
      {/* <VenueDetail button={false} text1="Santa Clara Is Located In The Center Of Silicon Valley And Is Home To The Headquarters Of Several High-Tech Companies Such As Intel." text2="More Than 12,000 Businesses And An Employment Base Of Over 106,000 Have Come To Santa Clara To Find Their Mission. Low Utility Rates, Innovative Infrastructure And Dynamic Development Are Just A Few Reasons Businesses Thrive In The Center Of What’s Possible." text3="" text4="" /> */}
    </Division>
  )
}