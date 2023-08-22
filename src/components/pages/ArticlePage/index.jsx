import React, { useEffect, useState } from "react";
import { Header, Footer,Articles,CarouselArticles,CustomImage,Text} from '../../organisms';
import { Division } from '../../atoms';
import Image from 'next/image'
import header_event3 from "../../../media/header_event3.png";
import uit from "../../../media/UIT-University-11.png";
import event12 from "../../../media/event12.png";
import maskgroup2 from "../../../media/Maskgroup2.png";
import maskgroup3 from "../../../media/Maskgroup4.png";
import maskgroup4 from "../../../media/Maskgroup3.png";
import fbs from "../../../media/facebook-1.svg";
import twitters from "../../../media/youtube-1.svg";
import instas from "../../../media/instagram-1.svg";
import Link from "next/link";
// import {ImFacebook} from 'react-icons/im'
// import {GrInstagram} from 'react-icons/gr'
// import {AiFillYoutube} from 'react-icons/ai'
export function ArticlePage() {
  const [navigationRender, setNavigationRender] = useState(false);
  return (
    <Division>

      <Header HeaderPositionProperty="absolute w-full bg-transparent z-10 " navigationRender={navigationRender} setNavigationRender={setNavigationRender} />
       <section className="bg-blue-20  h-auto">
          <div className="articles pt-14 px-15 ">
           <div className="flex text-red-400">
           <div>
           <Link  href="">
            Insights
            </Link>
           </div>
           <div className="pl-1">
           <Link href="">
            Journey
            </Link>
           </div>
            
           </div>
           <h1 className="text-[40px]  text-white font-black leading-tight">
           Wanz international technology recently signed a  memorandum of understanding (mou) with uit  university.</h1>
          </div>
       </section>
      
       <div className="bg-blue-20">
       <CarouselArticles/>
     </div>
     <div className="bg-blue-20">
     
     <section className=" relative lg:px-12 md:px-5 sm:px-4">
        <div className="px-12 md:px-5 sm:px-4 bg-blue-20 lg:mx-7  absoulte -mt-9  z-20">
         <h1 className="text-white text-[30px] pt-5  leading-tight">As Part Of Its Continuous Efforts To Support The Technology Sector And Advance Comprehensive Development In The Country Through Global Exhibitions, WANZ International Technology Recently Signed A Memorandum Of Understanding (MoU) With UIT University.</h1>
         <p className="text-white pt-1">As Part Of Its Continuous Efforts To Support The Technology Sector And Advance Comprehensive Development In The Country Through Global Exhibitions, WANZ International Technology Recently Signed A Memorandum Of Understanding (MoU) With UIT University.</p>
        </div>
     </section>
     
     </div>
    
     <section className=" bg-blue-20 ">
     <div className="w-4/5  pl-29 pt-4">
     <div className="flex items-center border-t-2 border-b-2">
     <div className=" py-4">
        <h2 className="text-white text-[30px]">Share</h2>
      </div>
       <div className="px-3 py-4  pt-6 flex">
        <a className="  p-1" href=""><Image  src={fbs}  width={30} height={30}/></a>
        <a className=" mx-1 p-1" href=""><Image  src={twitters} width={30} height={30}  /></a>
        <a className=" p-1" href=""><Image  src={instas} width={30} height={30}  /></a>
      </div> 
     </div>
     
     </div>
     
     </section>

      <div className="bg-blue-20">
      <h1 className="pl-20 pt-5 text-white text-[36px]">Related Articles</h1>
      <Articles Image1={maskgroup2} text1=" Local Companies To Further Their Digital Advancement" Image2={maskgroup3} text2=" Local Companies To Further Their Digital Advancement" Image3={maskgroup4} text3=" Meetup with alumni of computer science department university of Karachi.  "/>
      </div>
      <div className="bg-blue-20"> 
      <Footer />
      </div>
     
  
    </Division>
  )
}