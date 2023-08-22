import React, { useEffect, useState } from "react";
import { Header, Footer, OrganizerHero, Announcement, TentativeArena, VenueDetail, AnnouncementSecondary, TabsSlider } from '../../organisms';
import Image21 from "../../../media/bg_header.png";
// import Image21 from "../../../media/Image21.png";
import uit from "../../../media/insight-featuerd-article.png";
import event12 from "../../../media/p-wanz.png";
import event13 from "../../../media/p-wanz.png";
import maskgroup1 from "../../../media/gm-efu.png";
import maskgroup2 from "../../../media/local-companies.png";
import maskgroup3 from "../../../media/cio-pse.png";
import videourl from "../../../media/video.jpg";
import wanzorganizerimage from "../../../media/organizerslogos1.png";
import { Division } from '../../atoms';
import Aos from 'aos'
import 'aos/dist/aos'

// import bg_header from "../src/media/bg_header.png";
// import { motion } from "framer-motion";
// import { fadeIn } from "../../varients";
// const Section = styled.section`
// .ouuter-section{
//   /* width: 70%; */
//   padding:120px;
//   padding-left:200px ;
//   h1{
//     color: #fff;
//     font-size:54px ;
//     font-weight:900 ;
//   }
//   h3{
//     color:#fff;
//     font-weight:600 ;
//     font-size: 30px;
//     padding-top:20px;
//   }
//   p{
//     color:#fff;
//   }
// }


// `;
// const Div = styled.div`



// `;
export function Event() {
  useEffect(() => {
    Aos.init({ duration: 2200 })
  }, [])
  const [navigationRender, setNavigationRender] = useState(false);
  return (
    <Division divVariant="bg-blue-20 overflow-x-auto">
      {/* <motion.div  */}
      {/* > */}
      <Header HeaderPositionProperty="absolute w-full bg-transparent z-10" navigationRender={navigationRender} setNavigationRender={setNavigationRender} />
      {/* </motion.div> */}

      <OrganizerHero data-aos="fade-left" image={Image21} text1="PAKISTAN'S BIGGEST TECHNOLOGY EXPO " text2="Last Date of Application Submission is 15th august 2022" />

      <div className="bg-blue-20 p-3 pb-4">
        <div className="grid-container aim-section flex flex-col text-white" data-aos="fade-right" >
          <div class="grid grid-cols-1 md:grid-cols-1  lg:grid-cols-1">
            <div class="flex text-6xl ">
              <div className="flex items-center">
                <h2 className="font-worksans font-extrabold">AIMS & <br />OBJECTIVES</h2>
              </div>
            </div>
            <div class="  text-6">
              <p className="font-worksans">The Pakistan Tech Expo Global IT Tradeshow Aims To Create A Platform For Local Companies To Further Their Digital Advancement, Match-Making, Networking, And Business Growth Opportunities. The Tradeshow Aims To Bridge The Gap Between The Local IT Companies And The IT Giants For Startups, IT Professionals, Smes, And Experts, The Tradeshow Will Be A Great Opportunity To Connect With Other Key Players In The IT Industry.</p>
            </div>

          </div>
        </div>
        <div className="techno lg:mx-24 md:mx-6 sm:mx-10">
          <h1 className="text-30px sm:text-36px lg:text-50px xl:text-[70px] font-black text-white py-2">BENEFITS OF PAKISTAN <br></br> TECH EXPO 2022</h1>
          <div className="flex flex-col flex-wrap w-full gap-2">
            <div className="flex md:flex-row flex-col justify-between w-full gap-2 md:gap-0">
              <h3 className="text-white text-25px font-bold md:font-semibold">Growth in economic <br />activity</h3>
              <p className="text-white w-2/3">Pakistan Tech Expo Aims To Brand Pakistan As An Emerging Technology Services Hub. It Aims To Create Linkages And Serve As A Platform For Pakistan’s IT  Industry To Get Access To Various US  IT Firms. Around 80 Exhibitors Will Be On The Lookout For Joint-Ventures And Collaborating Partners Who Will Play An Important Role In Reviving The Economic Activity That Has Slowed Down During The Ongoing Pandemic.</p>
            </div>
            <div className="flex md:flex-row flex-col justify-between w-full gap-2 md:gap-0">
              <h3 className="text-white text-25px font-bold md:font-semibold">Networking & business <br />opportunities</h3>
              <p className="text-white w-2/3">In Order To Amplify The Bilateral  Trade Between Pakistan And The US, Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500S, When An Unknown Printer Took A Galley Of Type And Scrambled It To Make A Type Specimen Book.</p>
            </div>


            {/* <div className="flex flex-row justify-between lg:w-7/12 sm:w-full">
              <h3 className="text-white text-[25px] font-semibold">Networking & business <br />opportunities</h3>
              <p className="text-white">In Order To Amplify The Bilateral  Trade Between Pakistan And The US, Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500S, When An Unknown Printer Took A Galley Of Type And Scrambled It To Make A Type Specimen Book.</p>
            </div> */}
          </div>



          {/* <div className="inner lg:flex sm:flex-wrap">
            <div className="lg:w-5/12 sm:w-12/12">
              <h3 className="text-white text-[25px] font-semibold">Growth in economic <br />activity</h3>
              <h3 className="text-white text-[25px] font-semibold">Networking & business <br />opportunities</h3>
            </div>
            <div className=" lg:w-7/12 sm:w-12/12">
              <p className="text-white">Pakistan Tech Expo Aims To Brand Pakistan As An Emerging Technology Services Hub. It Aims To Create Linkages And Serve As A Platform For Pakistan’s IT  Industry To Get Access To Various US  IT Firms. Around 80 Exhibitors Will Be On The Lookout For Joint-Ventures And Collaborating Partners Who Will Play An Important Role In Reviving The Economic Activity That Has Slowed Down During The Ongoing Pandemic.</p>
              <p className="text-white">In Order To Amplify The Bilateral  Trade Between Pakistan And The US, Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500S, When An Unknown Printer Took A Galley Of Type And Scrambled It To Make A Type Specimen Book.</p>
            </div>
          </div> */}
        </div>

        <div className="grid-container aim-section3 text-white" data-aos="fade-right">
          <Division divVariant="absolute bottom-1 md:bottom-4 lg:bottom-8 px-1 lg:px-6">
            <h2 className="font-worksans font-extrabold text-26px md:text-40px lg:text-60px">strengthen<br /> bilateral relations</h2>
            <p className="font-worksans text-16px lg:text-24px"> wanz trade show is integral for the promotion of trade and investment between US & Pakistan. IT aims to target the leading businesses of both the countries.</p>
          </Division>
        </div>

        <TabsSlider />
        {/* <div className="offer-tab-section2 pt-3 pb-5 mt-0">
          <h2 className="font-worksans  font-extrabold text-white tab-hndg">WHAT WE OFFER</h2>
          <div className="offer-tab">
            <a href="#" className="offer-tab-button hover:text-hr cursor-pointer duration-500 nav-molecule text-white">EXHIBITION</a>
            <a href="#" className="offer-tab-button hover:text-hr cursor-pointer duration-500 nav-molecule">CROWD ENGAGEMENT</a>
            <a href="#" className="offer-tab-button hover:text-hr cursor-pointer duration-500 nav-molecule">EVENT MANAGEMENT</a>
          </div>
          <div id="exhibition" className="tabcontent text-white">
            <div className="tab-content-wrapper absolute" data-aos="fade-right">
              <h3 className="tab-content-hdng font-worksans font-extrabold">SHOWCASE YOUR BUSINESS</h3>
              <p className="tab-content-desc font-worksans">To IT Industry Leaders And Investors Of The Silicon Valley. The Wanz Tech Expo Offers The Perfect Platform To Launch New Initiatives And Associate Your Brand With Cutting-Edge IT Technology.</p>
            </div>
          </div>
        </div> */}


      </div>
      {/* <Div>
          <div className="events">
            <div>hello</div>
            <div>hello</div>
          </div>
      </Div> */}
      {/* <section  className="">
        <div className="container"> 
           <div className="row flex">
              <div className="col-md-4 w-5/12">
                 <div className="images-wht bg">
                    <div className="flex pt-3">
                      <div className="w-5/12 pb-1">
                        <div className="flex items-center pl-3">
                          <h1 className="text-[54px] text-white font-black">3</h1>
                          <p className="pl-1 text-white">DAYS <br/> EVENT</p>
                        </div>
                      </div>
                      <div className="w-6/12">
                      <div className="flex items-center ">
                          <h1 className="text-[54px] text-white font-black">120</h1>
                          <p className=" pl-1 text-white">Exihibitors</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex pb-23">
                      <div className="w-5/12">
                        <div className="flex items-center pl-3">
                          <h1 className="text-[54px] text-white font-black">8</h1>
                          <p className="pl-1 text-white">DAYS <br/> EVENT</p>
                        </div>
                      </div>
                      <div className="w-6/12">
                      <div className="flex items-center ">
                          <h1 className="text-[54px] text-white font-black">1000</h1>
                          <p className=" pl-1 text-white">Exihibitors</p>
                        </div>
                      </div>
                    </div>
                 </div>
              </div>
              <div className="col-md-7 w-8/12">
                   <div className="images10">
                       <div className="py-5 w-8/12 pl-6">
                        <h1 className="text-[70px] text-white font-black">WHY EXHIBIT?</h1>
                        <p className="text-[18px] text-white pb-2">USA Market Is Yet Not Fully Explored By Pakistani Technology Exporters. Whereas The USA Culture Is Very Receptive And Welcomes New Technology/New Products. This Technology Expo Would Be Very Useful For Existing Technology Exporters/Exhibitors To Revive Their Contacts With Buyers Or Establish New Contacts. Technology Expo Would Offer An Opportunity To Establish Your Future Business Or Expand Your Existing Marketability In North American Region.</p>
                       </div>
                   </div>
              </div>
              
           </div>
        </div>
      </section> */}

      <TentativeArena />

      <section>
        {/* <div class=""> */}
        <div class="grid grid-cols-1 md:grid-cols-2">
          <div class="flex justify-center">
            <div class="flex flex-row justify-center images-wht">

              <div className="flex flex-col gap-2 mt-5">

                <div className="flex flex-row gap-2">
                  <div class="flex justify-center items-start text-6xl  ">
                    <div className="flex items-center" data-aos="fade-up"
                      data-aos-anchor-placement="center-bottom">
                      <h1 className="text-[54px] text-white font-black">3</h1>
                      <p className="pl-1 text-white text-[18px]">DAYS <br /> EVENT</p>
                    </div>
                  </div>
                  <div class="flex justify-center items-start text-6">
                    <div className="flex items-center" data-aos="fade-up"
                      data-aos-anchor-placement="center-bottom">
                      <h1 className="text-[54px] text-white font-black">120</h1>
                      <p className="pl-1 text-white text-[18px]">DAYS <br /> EVENT</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-row gap-2">
                  <div class="flex justify-center items-start text-6xl  ">
                    <div className="flex items-center" data-aos="fade-up"
                      data-aos-anchor-placement="center-bottom">
                      <h1 className="text-[54px] text-white font-black">3</h1>
                      <p className="pl-1 text-white text-[18px]">DAYS <br /> EVENT</p>
                    </div>
                  </div>
                  <div class="flex justify-center items-start text-6">
                    <div className="flex items-center" data-aos="fade-up"
                      data-aos-anchor-placement="center-bottom">
                      <h1 className="text-[54px] text-white font-black">120</h1>
                      <p className="pl-1 text-white text-[18px]">DAYS <br /> EVENT</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="flex justify-center text-6xl ">

            <div className="images10">
              <div data-aos="fade-right" className="py-5 pl-6" >
                <h1 className="text-[70px] text-white font-black">WHY EXHIBIT?</h1>
                <p className="text-[18px] text-white pb-2">USA Market Is Yet Not Fully Explored By Pakistani Technology Exporters. Whereas The USA Culture Is Very Receptive And Welcomes New Technology/New Products. This Technology Expo Would Be Very Useful For Existing Technology Exporters/Exhibitors To Revive Their Contacts With Buyers Or Establish New Contacts. Technology Expo Would Offer An Opportunity To Establish Your Future Business Or Expand Your Existing Marketability In North American Region.</p>
              </div>
            </div>
          </div>

        </div>
        {/* </div> */}
      </section>

      <section className="venue_map bg-blue-20">
        <div className="ouuter-section px-12 py-9">
          <h1 className="text-[50px] text-white">The Venue</h1>
          <h3 className="text-[20px] text-white pt-2">About The City</h3>
          <p className="text-white">Santa Clara Is Located In The Center Of  Silicon Valley And Is Home To The Headquarters Of <br /> Several High-Tech Companies Such As Intel.</p>
          <h3 className="text-[30px] pt-2 text-white">Santa Clara Convention Centre</h3>
          <p className="text-white">Santa Clara Convention Centre Between The Flexible Space, Friendly Staff, Additional Services And Multiple Accommodations,<br /> Our Event Will Certainly Be A Success.</p>
        </div>
      </section>
      {/* <div className="bg-blue-20 pt-4" >
        <TentativeArena />
      </div> */}

      <div className="pt-10" data-aos="zoom-in">
        <AnnouncementSecondary />
      </div>


      {/* <EventHero  image={header_event3}/> */}
      {/* <Insights/>
      <TentativeArena/>
      <Participants/>
      <Leadership/>
      <Organizeby/>
      <StrategicPartners/>
      <Aims/>
      <Networking/>
      <Venue/>
      <Announcement/>
      
      <VenueDetail />
      <Benefits />
      <Relations />
      <EventSnaps />
      <Articles /> */}
      <Footer />
    </Division>
  )
}
