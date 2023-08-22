import { Division, CustomImage, Anchor, Text } from "../../atoms";
import wanzGlobal from "../../../media/wanzGlobal.svg";
import wanz from "../../../media/wanz.png";
import cocktail from "../../../media/cocktail.png";

export const OrganizedBy = props => {
    const { navigationRender, setNavigationRender } = props;
    return (
        // <Division divVariant="bg-white" data-aos="fade-up"
        // data-aos-anchor-placement="top-center">
        //     <Division divVariant="grid-container flex flex-col place-items-center gap-2 py-10 strategic-partner-wrapper"> 
        //         <Division divVariant="place-content-center">
        //             <Text textVariant="font-extrabold md:text-40px sm:text-30px xs:text-20px text-blue-30 text-left ">ORGANIZED BY</Text>
        //         </Division>
        //         <Division divVariant="strategic-partner-icons flex flex-wrap flex-row  py-1 items-center gap-5">
        //             <Division>
        //                 <CustomImage imageVariant="" href={wanzGlobal}/>
        //             </Division>
        //             <Division>
        //                 <CustomImage imageVariant="" href={wanz}/>
        //             </Division>
        //             <Division>
        //                 <CustomImage imageVariant="" href={cocktail}/>
        //             </Division>
        //         </Division>
        //     </Division>
        // </Division>

        <Division divVariant="bg-white">
            <Division divVariant="grid-container flex flex-col place-items-center gap-2 py-4 strategic-partner-wrapper">
                <Division divVariant="place-content-center">
                    <Text textVariant="font-extrabold md:text-40px sm:text-30px xs:text-20px text-blue-30 text-left ">ORGANIZED BY</Text>
                </Division>
                <Division divVariant="strategic-partner-icons flex flex-wrap flex-row  py-1 items-center gap-5">
                    <Division>
                        <CustomImage imageVariant="" href={wanzGlobal} />
                    </Division>
                    <Division>
                        <CustomImage imageVariant="" href={wanz} />
                    </Division>
                    <Division>
                        <CustomImage imageVariant="" href={cocktail} />
                    </Division>
                </Division>
            </Division>
        </Division>
    );
};
