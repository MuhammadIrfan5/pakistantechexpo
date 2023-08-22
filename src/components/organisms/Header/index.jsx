import { useEffect, useState } from "react";
import { Division, CustomImage, Anchor, Text } from "../../atoms";
import { Button } from "../../molecules"
import Logo from "../../../media/Logo.svg";
import close from "../../../media/Line 76.svg";
// import Hamburger from "../../../media/hamburger.svg"
import Hamburger from "../../../media/menu-icon.svg";
import Link from 'next/link';

export const Header = props => {
  // const { HeaderPositionProperty, navigationRender } = props;

  const { HeaderPositionProperty = "", navigationRender } = props;
  function onToggleShowMobileNav() {
    typeof (props.setNavigationRender) === "function" && props.setNavigationRender(!navigationRender);
  }

  return (
    <Division divVariant={`main-header flex flex-row justify-between animation-data  items-center py-2     ${HeaderPositionProperty}`} >
      <Division divVariant="logo-section">
        <CustomImage imageVariant="pet-logo" href={Logo} width={270} height={80} />
      </Division>

      <Division divVariant="flex flex-row justify-center items-center gap-4">
        <Division divVariant="hidden lg:flex flex-row gap-2 text-md text-white check">

          <Link href="/">
            <Anchor anchorVariant="font-robotoCondensed font-normal leading-21px cursor-pointer duration-500 hover:text-hr nav-molecule">
              HOME
            </Anchor>
          </Link>
          <Link href="/event">
            <Anchor anchorVariant="font-robotoCondensed font-normal leading-21px  cursor-pointer duration-500 hover:text-hr nav-molecule">
              EVENT
            </Anchor>
          </Link>
          <Link href="/journey">
            <Anchor anchorVariant="font-robotoCondensed font-normal leading-21px  cursor-pointer duration-500 hover:text-hr nav-molecule">
              JOURNEY
            </Anchor>
          </Link>

          <Link href="/organizer">
            <Anchor anchorVariant="font-robotoCondensed font-normal leading-21px  cursor-pointer duration-500 hover:text-hr nav-molecule">
              ORGANIZERS
            </Anchor>
          </Link>
          <Link href="/getintouch">
            <Anchor anchorVariant="font-robotoCondensed font-normal leading-21px  cursor-pointer duration-500 hover:text-hr nav-molecule ">
              GET IN TOUCH
            </Anchor>
          </Link>
        </Division>

        <Link href="/register">
          <Button className="hidden lg:flex justify-center items-center font-robotoCondensed font-extrabold px-2 py-1 text-navyBlue bg-white rounded-xl text-md cursor-pointer hover:bg-hr duration-500 hover:text-white" >
            BOOK NOW
          </Button>
        </Link>
      </Division>
      <Division divVariant="flex lg:hidden justify-center items-center" >
        <CustomImage
          id="hamburger"
          imageVariant="cursor-pointer"
          width={30}
          height={30}
          href={Hamburger}
          // onClick={() => handleBreadcrumClick()}
          onClick={onToggleShowMobileNav}
        />
      </Division>


      {/* <Division divVariant={`grid-container relative z-0 transition duration-700 ease-in-out ${navigationRender ? "flex" : "hidden"} flex-col justify-between items-center bg-blue-20 pt-11-5 pb-21-2 border w-full border-white`}> */}
      <Division divVariant={`grid-container mobile-nav-back-image fixed h-screen top-0 bottom-0 left-0 right-0 z-1 ${navigationRender ? "flex" : "hidden"} flex-col  bg-blue-20 py-4`}>
        <Division divVariant="flex justify-between">
          <CustomImage imageVariant="" href={Logo} width={200} height={50} />
          <CustomImage imageVariant="cursor-pointer" href={close} width={20} height={20} onClick={onToggleShowMobileNav} />
        </Division>

        {/* <Division divVariant="flex flex-col mobile-nav-back-image opacity-70 w-full h-full relative top-0 bottom-0" style={{ zIndex: -1 }} > */}
        <Division divVariant="lg:hidden place-items-center text-center text-bold flex flex-col text-xl text-white pt-10">

          <Link href="/">
            <Anchor anchorVariant="font-worksans lg:py-2 py-0-5 hover:text-whiteShade text-30px font-bold cursor-pointer duration-500 text-white">
              HOME
            </Anchor>
          </Link>

          <Link href="/event">
            <Anchor anchorVariant="font-worksans lg:py-2 py-0-5 hover:text-whiteShade text-30px font-bold cursor-pointer duration-500 text-white">
              EVENT
            </Anchor>
          </Link>

          <Link href="/journey">
            <Anchor anchorVariant="font-worksans lg:py-2 py-0-5 hover:text-whiteShade text-30px font-bold cursor-pointer duration-500 text-white">
              JOURNEY
            </Anchor>
          </Link>

          <Link href="/organizer">
            <Anchor anchorVariant="font-worksans lg:py-2 py-0-5 hover:text-whiteShade text-30px font-bold cursor-pointer duration-500 text-white">
              ORGANIZERS
            </Anchor>
          </Link>

          <Link href="/getInTouch">
            <Anchor anchorVariant="font-worksans lg:py-2 py-0-5 hover:text-whiteShade text-30px font-bold cursor-pointer duration-500 text-white">
              GET IN TOUCH
            </Anchor>
          </Link>


          {/* <Division divVariant="px-2 py-1 mt-4"> */} {/* w-28-8 h-5-5 */}
          <Anchor anchorVariant="flex justify-center items-center max-w-300 w-full px-2 py-1 mt-4  text-navyBlue rounded-xl bg-white font-bold lg:text-md text-sm-custom cursor-pointer hover:bg-hr duration-500 hover:text-white font-robotoCondensed" onClick={() => console.log('Check')}>
            BOOK NOW
          </Anchor>
          {/* </Division> */}

        </Division>
        {/* </Division> */}


      </Division>
    </Division>
  );
};