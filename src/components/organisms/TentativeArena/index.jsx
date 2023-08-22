import { Division, Text } from "../../atoms";
import { Button } from "../../molecules"

export const TentativeArena = props => {
  return (
    <Division divVariant="grid-container pb-7 w-full flex flex-row justify-center bg-navyBlue items-center lg:gap-2 gap-1">
      <Division divVariant="flex flex-col justify-center items-center">
        <Division divVariant="flex flex-row justify-center items-center">
          <Text textVariant="font-extrabold lg:text-70px text-40px text-white text-center lg:w-full md:w-2/3 font-worksans">TENTATIVE IT ARENAS</Text>
        </Division>
        <Division divVariant="flex flex-wrap place-content-center lg:w-4/5 w-full overflow-x-hidden gap-1">
          <Button className="text-blue-20 font-robotoMono lg:text-16px text-14px font-bold bg-tentative_btn rounded-full px-2 py-1 text-center cursor-pointer" >
            Website Development
          </Button>
          <Button className="text-blue-20 font-robotoMono lg:text-16px text-14px font-bold bg-tentative_btn rounded-full px-2 py-1 text-center cursor-pointer" >
            E-Commerce
          </Button>
          <Button className="text-blue-20 font-robotoMono lg:text-16px text-14px font-bold bg-tentative_btn rounded-full px-2 py-1 text-center cursor-pointer" >
            App Development
          </Button>
          <Button className="text-blue-20 font-robotoMono lg:text-16px text-14px font-bold  bg-tentative_btn rounded-full px-2 py-1 text-center cursor-pointer" >
            Game Development
          </Button>
          <Button className="text-blue-20 font-robotoMono lg:text-16px text-14px font-bold bg-tentative_btn rounded-full px-2 py-1 text-center cursor-pointer" >
            Search Engine Optimization
          </Button>
          {/* </Division>
      <Division divVariant="flex flex-wrap place-content-center py-1 lg:w-3/4 w-full overflow-x-hidden gap-1"> */}
          <Button className="text-blue-20 font-robotoMono lg:text-16px text-14px font-bold bg-tentative_btn rounded-full px-2 py-1 text-center cursor-pointer" >
            Blockchain
          </Button>
          <Button className="text-blue-20 font-robotoMono lg:text-16px text-14px font-bold bg-tentative_btn rounded-full px-2 py-1 text-center cursor-pointer" >
            Digital Marketing
          </Button>
          <Button className="text-blue-20 font-robotoMono lg:text-16px text-14px font-bold bg-tentative_btn rounded-full px-2 py-1 text-center cursor-pointer" >
            E-Learning
          </Button>
          <Button className="text-blue-20 font-robotoMono lg:text-16px text-14px font-bold bg-tentative_btn rounded-full px-2 py-1 text-center cursor-pointer" >
            ERP Portals
          </Button>
          <Button className="text-blue-20 font-robotoMono lg:text-16px text-14px font-bold bg-tentative_btn rounded-full px-2 py-1 text-center cursor-pointer" >
            Artificial Intelligence
          </Button>
          <Button className="text-blue-20 font-robotoMono lg:text-16px text-14px font-bold bg-tentative_btn rounded-full px-2 py-1 text-center cursor-pointer" >
            IOT
          </Button>
          {/* </Division divVariant="flex flex-wrap place-content-center lg:w-3/4 w-full overflow-x-hidden gap-1"> */}
          <Button className="text-blue-20 font-robotoMono lg:text-16px text-14px font-bold bg-tentative_btn rounded-full px-2 py-1 text-center cursor-pointer" >
            Hotel/Restaurant Manaagement
          </Button>
          <Button className="text-blue-20 font-robotoMono lg:text-16px text-14px font-bold bg-tentative_btn rounded-full px-2 py-1 text-center cursor-pointer" >
            Fintech
          </Button>
          <Button className="text-blue-20 font-robotoMono lg:text-16px text-14px font-bold bg-tentative_btn rounded-full px-2 py-1 text-center cursor-pointer" >
            SAAS Integration Plateform
          </Button>
        </Division>
        <Division divVariant="flex flex-wrap place-content-center py-1 lg:w-3/4 w-full overflow-x-hidden gap-1">
          <Button className="text-blue-20 font-robotoMono lg:text-16px text-14px font-bold bg-tentative_btn rounded-full px-2 py-1 text-center cursor-pointer" >
            SAAS Application For Services & Education
          </Button>
        </Division>
      </Division>
    </Division>



    // <Division divVariant="grid-container pb-7 w-full flex flex-row justify-center bg-navyBlue items-center lg:gap-2 gap-1">
    //   <Division divVariant="flex flex-col w-full place-items-center">
    //     <Division divVariant="flex flex-row place-content-center">
    //       <Text textVariant="font-extrabold lg:text-70px text-40px text-white text-center lg:w-full md:w-2/3 w-full font-worksans">TENTATIVE IT ARENAS</Text>
    //     </Division>
    //     <Division divVariant="flex flex-wrap place-content-center lg:w-4/5 w-full overflow-x-hidden gap-1">
    //       <Button className="text-blue-20 font-robotoMono lg:text-16px text-14px font-bold bg-tentative_btn rounded-full text-center h-4-9 px-2 py-1 " >
    //         Website Development
    //       </Button>
    //       <Button className="text-blue-20 font-robotoMono lg:text-16px text-14px font-bold bg-tentative_btn rounded-full  h-4-9 px-2 py-1 text-center" >
    //         E-Commerce
    //       </Button>
    //       <Button className="text-blue-20 font-robotoMono lg:text-16px text-14px font-bold bg-tentative_btn rounded-full  h-4-9 px-2 py-1 text-center" >
    //         App Development
    //       </Button>
    //       <Button className="text-blue-20 font-robotoMono lg:text-16px text-14px font-bold  bg-tentative_btn rounded-full  h-4-9 px-2 py-1 text-center" >
    //         Game Development
    //       </Button>
    //       <Button className="text-blue-20 font-robotoMono lg:text-16px text-14px font-bold bg-tentative_btn rounded-full  h-4-9 px-2 py-1 text-center" >
    //         Search Engine Optimization
    //       </Button>
    //     </Division>
    //     <Division divVariant="flex flex-wrap place-content-center py-1 lg:w-3/4 w-full overflow-x-hidden gap-1">
    //       <Button className="text-blue-20 font-robotoMono lg:text-16px text-14px font-bold bg-tentative_btn rounded-full  h-4-9 px-2 py-1 text-center" >
    //         Blockchain
    //       </Button>
    //       <Button className="text-blue-20 font-robotoMono lg:text-16px text-14px font-bold bg-tentative_btn rounded-full  h-4-9 px-2 py-1 text-center" >
    //         Digital Marketing
    //       </Button>
    //       <Button className="text-blue-20 font-robotoMono lg:text-16px text-14px font-bold bg-tentative_btn rounded-full  h-4-9 px-2 py-1 text-center" >
    //         E-Learning
    //       </Button>
    //       <Button className="text-blue-20 font-robotoMono lg:text-16px text-14px font-bold bg-tentative_btn rounded-full  h-4-9 px-2 py-1 text-center" >
    //         ERP Portals
    //       </Button>
    //       <Button className="text-blue-20 font-robotoMono lg:text-16px text-14px font-bold bg-tentative_btn rounded-full  h-4-9 px-2 py-1 text-center" >
    //         Artificial Intelligence
    //       </Button>
    //       <Button className="text-blue-20 font-robotoMono lg:text-16px text-14px font-bold bg-tentative_btn rounded-full  h-4-9 px-2 py-1 text-center" >
    //         IOT
    //       </Button>
    //     </Division>
    //     <Division divVariant="flex flex-wrap place-content-center lg:w-3/4 w-full overflow-x-hidden gap-1">
    //       <Button className="text-blue-20 font-robotoMono lg:text-16px text-14px font-bold bg-tentative_btn rounded-full  h-4-9 px-2 py-1 text-center" >
    //         Hotel/Restaurant Manaagement
    //       </Button>
    //       <Button className="text-blue-20 font-robotoMono lg:text-16px text-14px font-bold bg-tentative_btn rounded-full  h-4-9 px-2 py-1 text-center" >
    //         Fintech
    //       </Button>
    //       <Button className="text-blue-20 font-robotoMono lg:text-16px text-14px font-bold bg-tentative_btn rounded-full  h-4-9 px-2 py-1 text-center" >
    //         SAAS Integration Plateform
    //       </Button>
    //     </Division>
    //     <Division divVariant="flex flex-wrap place-content-center py-1 lg:w-3/4 w-full overflow-x-hidden gap-1">
    //       <Button className="text-blue-20 font-robotoMono lg:text-16px text-14px font-bold bg-tentative_btn rounded-full  h-4-9 px-2 py-1 text-center" >
    //         SAAS Application For Services & Education
    //       </Button>
    //     </Division>
    //   </Division>
    // </Division>
  );
};
