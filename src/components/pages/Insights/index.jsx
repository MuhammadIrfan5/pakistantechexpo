import React, { useEffect, useState } from "react";
import { Header, Footer, TentativeArena, Participants, Leadership, Organizeby, StrategicPartners, Aims, Networking, Venue, EventHero, Announcement, VenueDetail, Benefits, Relations, EventSnaps, Articles, OrganizerHero, CarouselComponent } from '../../organisms';
import { Division } from '../../atoms';
import header_event3 from "../../../media/header_event3.png";
import Image21 from "../../../media/header-event 2 (1).png";
import uit from "../../../media/UIT-University-11.png";
import event12 from "../../../media/event12.png";
import event13 from "../../../media/p-wanz.png";
import maskgroup1 from "../../../media/Maskgroup3.png";
import maskgroup2 from "../../../media/Maskgroup2.png";
import maskgroup3 from "../../../media/Maskgroup4.png";
import calaender from "../../../media/Icon awesome-calendar-check.svg";
import location from "../../../media/Icon material-location-on.svg";
import Image2 from "../../../media/MaskGroup21.png";
import Image3 from "../../../media/MaskGroup31.png";
import MaskGroup1 from "../../../media/MaskGroup291.png";
import AshfaqAhmed from "../../../media/MaskGroup11.png";
import MaskGroup from "../../../media/MaskGroup.png";



export function Insights() {
  return (
    <Division divVariant="bg-blue-20">
      <Header HeaderPositionProperty="absolute w-full bg-transparent z-10 " className="animation-data " />
      <div className="">
      <OrganizerHero image={Image21} text1="Pakistan tech expo events snaps" text2="Pakistan Tech Expo Global Technology Show Is Being Organized At Santa Clara Convention Center With A Total Covered Area Of 21000+ Sqft. The Show Will Host 120 Technology Exhibitors From Pakistan, Canada, UAE, Malaysia, And USA." />
      </div>
     

      <EventSnaps Image1={uit} Image2={event12} Image4={event13} />

      <Division divVariant="md:flex hidden">
        <Articles
          Image1={maskgroup1} text1="GM IT - EFU Life Insurance"
          Image2={maskgroup2} text2="Local Companies To Further Their Digital Advancement"
          Image3={maskgroup3} text3="CIO - Pakistan Stock Exchange" />
      </Division>
       <div className="px-10">
       <Announcement/>
       </div>
    

    
      <Footer />

    </Division>
  )
}