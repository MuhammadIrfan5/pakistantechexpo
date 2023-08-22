import React, { useEffect, useState } from "react";
import { Header, Footer, Insights, TentativeArena, Participants, Leadership, Organizeby, StrategicPartners, Aims, Networking, Venue, EventHero, Announcement, VenueDetail, Benefits, Relations, EventSnaps, Articles, OurLeadership, MultiHeadingComponent, ContactUsFrom, OfficeAddress, RegisterFoam } from '../../organisms';
import { Division } from '../../atoms';

export function Register() {
  return (
    <Division divVariant="bg-blue-20">
      <Header HeaderPositionProperty="" className="" />
      <MultiHeadingComponent headingText="Last Date of Application Submission is 15th august 2022" headingVariant="font-bold font-worksans text-30px sm:text-40px md:text-50px lg:text-60px text-white leading-none" desText="Silicon Valley, Santa Clara California USA 2022 September 15th to 17th, 2022" desVariant=" font-bold font-worksans sm:text-18px md:text-20px leading-none text-tentative_btn" />
      <RegisterFoam />
      <Footer />
    </Division>
  )
}