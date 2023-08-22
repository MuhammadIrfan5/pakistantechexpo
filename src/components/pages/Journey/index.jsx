import React, { useEffect, useState } from "react";
import { Header, Footer, Insights, TentativeArena, Participants, Leadership, Organizeby, StrategicPartners, Aims, Networking, Venue, EventHero, Announcement, AnnouncementSecondary, VenueDetail, Benefits, Relations, EventSnaps, Articles, OrganizerHero, CarouselComponent } from '../../organisms';
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



export function Journey() {
  const [navigationRender, setNavigationRender] = useState(false);
  return (
    <Division divVariant="bg-blue-20 overflow-x-auto">
      <Header data-aos="fade-down" HeaderPositionProperty="absolute w-full bg-transparent z-10" navigationRender={navigationRender} setNavigationRender={setNavigationRender} />
      {/* <Header HeaderPositionProperty="absolute w-full bg-transparent z-10 " className="animation-data " /> */}
      <div className="">
        <OrganizerHero image={Image21} text1="Pakistan tech expo events snaps" text2="Pakistan Tech Expo Global Technology Show Is Being Organized At Santa Clara Convention Center With A Total Covered Area Of 21000+ Sqft. The Show Will Host 120 Technology Exhibitors From Pakistan, Canada, UAE, Malaysia, And USA." />
      </div>
      {/* <Insights Image1={MaskGroup} Image2={MaskGroup} Image3={MaskGroup} Image4={MaskGroup} Image5={MaskGroup} /> */}

      <EventSnaps Image1={uit} Image2={event12} Image4={event13} />

      <Division divVariant="md:flex hidden">
        <Articles
          Image1={maskgroup1} text1="GM IT - EFU Life Insurance"
          Image2={maskgroup2} text2="Local Companies To Further Their Digital Advancement"
          Image3={maskgroup3} text3="CIO - Pakistan Stock Exchange" />
      </Division>
      {/* <div className="px-10">
       <Announcement/>
       </div> */}

      <Division divVariant="my-10">
        <AnnouncementSecondary />
      </Division>



      {/* <EventSnaps Image1={uit} Image2={event12} /> */}
      {/* <CarouselComponent /> */}
      {/* <Articles
        Image1={maskgroup1} text1="Wanz information technology management meetup with alumni of sir syed university of engineering & technology at board room of ssuet."
        Image2={maskgroup2} text2="Wanz international technology (wint) and hazza institute of technology have signed memorandum of understanding (mou)"
        Image3={maskgroup3} text3="Intra-Departmental Programming Competition “Wanz Code Bit” And Symposium Was Organized By Department Of Computer Science, Karachi University In Collaboration With Wanz Business Group." /> */}
      {/* <Announcement bg_color="bg-navyBlue" text1="" text2="" /> */}
      {/* <VenueDetail button={false} text1="Santa Clara Is Located In The Center Of Silicon Valley And Is Home To The Headquarters Of Several High-Tech Companies Such As Intel." text2="More Than 12,000 Businesses And An Employment Base Of Over 106,000 Have Come To Santa Clara To Find Their Mission. Low Utility Rates, Innovative Infrastructure And Dynamic Development Are Just A Few Reasons Businesses Thrive In The Center Of What’s Possible." text3="" text4="" /> */}
      <Footer />

    </Division>
  )
}