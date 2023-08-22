import React, { useEffect, useState } from "react";
import { Header, Footer, OrganizerHero, Announcement, AnnouncementSecondary, OrganizerArticles, OurLeadership, SponseredSection } from '../../organisms';
import { Division } from '../../atoms';
// import { LeadershipCard } from '../../molecules';
// import header_event2 from "../../../media/header-event 2organizerhero.jpg";
import Image21 from "../../../media/header_event2.png";
// import uit from "../../../media/UIT-University-11.png";
// import event12 from "../../../media/event12.png";
import maskgroup1 from "../../../media/UIT-University-11.png";
import maskgroup2 from "../../../media/Maskgroup2.png";
import maskgroup3 from "../../../media/Maskgroup4.png";
import calaender from "../../../media/Icon awesome-calendar-check.svg";
import location from "../../../media/Icon material-location-on.svg";
import image1 from  "../../../media/global_logo.jpg";
import image2 from  "../../../media/cocktail1.jpg";
import image3 from  "../../../media/wanz1.jpg";
import Aos from 'aos'
import 'aos/dist/aos';
export function Organizer() {
  return (
    <Division divVariant="bg-blue-20 organizer-page">
      <Header className="" HeaderPositionProperty="absolute w-full bg-transparent z-10" />
      <OrganizerHero image={Image21} text1="Pakistan tech expo organizers" text2="Last Date of Application Submission is 15th august 2022" />
      <SponseredSection  data-aos="fade-left" image1={image1} image2={image2} image3={image3} 
        hdng1="Wanz global business forum pakistan" 
        text1="Pakistan Tech Expo Aims To Brand Pakistan As An Emerging Technology Services Hub. It Aims To Create Linkages And Serve As A Platform For Pakistan’s IT  Industry To Get Access To Various US  IT Firms. Around 80 Exhibitors Will Be On The Lookout For Joint-Ventures And Collaborating Partners Who Will Play An Important Role In Reviving The Economic Activity That Has Slowed Down During The Ongoing Pandemic."
        hdng2="Cocktail"
        text2="Cocktail international group is a canada export listed company providing full event management & media services in north america. With offices in canada, uae, brazil, and pakistan, cocktail group is the largest canadian event management company working globally."
        hdng3="Wanz international technology"
        text3="Wanz international technology pakistan is a brainchild organization of wanz international technology which was established with the aim to promote it exports of pakistan and make our country an active market player of global it arena."
      />
      <OrganizerArticles
        texthdng="Pakistan tech expo events snaps"
        textslogan="Pakistan Tech Expo Global Technology Show Is Being Organized At Santa Clara Convention Center With A Total Covered Area Of 21000+ Sqft."
        Image1={maskgroup1} text1="Wanz information technology management meetup with alumni of sir syed university of engineering & technology at board room of ssuet."
        Image2={maskgroup2} text2="Meetup with alumni of computer science department university of Karachi"
        />
      <OurLeadership leaderhdng="Our Leadership" />
      {/* <div  data-aos="fade-up"
     data-aos-anchor-placement="center-bottom"> */}
      {/* <Announcement/> */}
      {/* </div> */}
      <AnnouncementSecondary />
     
      
      <Footer />
    </Division>
  )
}