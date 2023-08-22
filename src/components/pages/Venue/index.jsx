import React, { useEffect, useState } from "react";
import { Header, Footer, EventHero, Announcement, EventSnaps, Articles, CarouselComponent, Venue, VenueDetail, TextComponent } from '../../organisms';
import { Division } from '../../atoms';
import header_event3 from "../../../media/header_event3.png";
import uit from "../../../media/UIT-University-11.png";
import event12 from "../../../media/event12.png";
import maskgroup1 from "../../../media/Maskgroup3.png";
import maskgroup2 from "../../../media/Maskgroup2.png";
import maskgroup3 from "../../../media/Maskgroup4.png";
import calaender from "../../../media/Icon awesome-calendar-check.svg";
import location from "../../../media/Icon material-location-on.svg";
import Aos from 'aos'
import 'aos/dist/aos'

export function VenuePage() {
  useEffect(()=>{
   Aos.init({duration:2200})
  },[])
  const [navigationRender, setNavigationRender] = useState(false);
  return (
    <Division>

      <Header navigationRender={navigationRender} setNavigationRender={setNavigationRender} HeaderPositionProperty="absolute w-full bg-transparent z-10" />
    <div className="bg-blue-20">
    <VenueDetail button={false} text1="Santa Clara Is Located In The Center Of Silicon Valley And Is Home To The Headquarters Of Several High-Tech Companies Such As Intel." text2="More Than 12,000 Businesses And An Employment Base Of Over 106,000 Have Come To Santa Clara To Find Their Mission. Low Utility Rates, Innovative Infrastructure And Dynamic Development Are Just A Few Reasons Businesses Thrive In The Center Of What’s Possible." text3="" text4=""/>
    </div>
      {/* <EventHero  image={header_event3} text1="Pakistan tech expo events snaps" text2="Pakistan Tech Expo Global Technology Show Is Being Organized At Santa Clara Convention Center With A Total Covered Area Of 21000+ Sqft. The Show Will Host 120 Technology Exhibitors From Pakistan, Canada, UAE, Malaysia, And USA."
       icon1={false} icon2={false} icontext1="" icontext2="" /> */}
      {/* <EventSnaps Image1={uit} Image2={event12}/> */}
     <div className="bg-blue-20 ">
     <CarouselComponent   data-aos="fade-left" />
     </div>
     
      <div className="bg-blue-20">
      <TextComponent />
      </div>
     
      {/* <Articles 
       Image1={maskgroup1} text1="Wanz information technology management meetup with alumni of sir syed university of engineering & technology at board room of ssuet." 
       Image2={maskgroup2} text2="Wanz international technology (wint) and hazza institute of technology have signed memorandum of understanding (mou)" 
       Image3={maskgroup3} text3="Intra-Departmental Programming Competition “Wanz Code Bit” And Symposium Was Organized By Department Of Computer Science, Karachi University In Collaboration With Wanz Business Group."/> */}
        <div className="bg-blue-20 py-6">
        <div  data-aos="fade-left" className="grid-container aim-section2 flex flex-col text-white">
          <h2 className="font-worksans font-extrabold">EXPO Features</h2>
          <ul>
            <li>Stall size specification (10’w x 10’h x 10’d) at hall d silicon valley, santa clara, california, usa </li>
            <li>10’d) at hall d silicon valley, santa clara,</li>
            <li> Breakout rooms for private meetings</li>
            <li>  Arrange b2b meetings with potential clients</li>
            <li>  Pr / media /marketing activities before and after expo</li>
            <li> Publish book/magazine pre-exhibition with complete details of exhibitors and sponsor for investors/buyers</li>
            <li> Provide all the details of the visitor including contact details</li>
            <li>Free parking and 24 hours security </li>
            <li> Crowd management facility </li>
            <li>Airport pick and drop</li>
            <li>Return ticket (economy)</li>
            <li> Hotel stay 5 nights</li>
            <li>City tour</li>
           
          </ul>
        </div>
        </div>
      <Announcement bg_color="bg-navyBlue" text1="" text2=""/>
      
      <Footer />
  
    </Division>
  )
}