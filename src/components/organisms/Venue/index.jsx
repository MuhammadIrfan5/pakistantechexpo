import { Division, Text } from "../../atoms";

export const Venue = () => {
    return (
        // <Division divVariant="flex flex-col justify-center items-center py-5 lg:gap-3 gap-2 bg-white">
        //     <Division divVariant="flex flex-col justify-center items-center w-full sm:w-4/5 md:w-6-68 lg:w-65-0">
        //         <Division divVariant="flex flex-row w-full place-content-center">
        //             <Text textVariant="font-extrabold lg:text-60px md:text-40px text-30px text-blue-20 text-center md:w-full w-2/3">VENUE & BOOKINGS</Text>
        //         </Division>

        //         <Division divVariant="flex flex-col justify-center items-center list-disc px-3 md:text-18px">
        //             <ul className="flex flex-col gap-1">
        //                 <li>
        //                     Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry Standard Dummy . Lorem Ipsum Has Been The Industrys Standard Dummy Text Ever Since The 1500S.
        //                 </li>
        //                 <li>
        //                     Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry Standard Dummy . Lorem Ipsum Has Been The Industrys Standard Dummy Text Ever Since The 1500S.
        //                 </li>
        //                 <li>
        //                     Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry Standard Dummy . Lorem Ipsum Has Been The Industrys Standard Dummy Text Ever Since The 1500S.
        //                 </li>
        //             </ul>
        //         </Division>
        //     </Division>
        // </Division>



        <Division divVariant="flex flex-col justify-center items-center py-5 lg:gap-3 gap-2 bg-white">
            <Division divVariant="flex flex-col justify-center items-center w-full sm:w-4/5 md:w-6-68 lg:w-65-0">
                <Division divVariant="flex flex-row w-full place-content-center">
                    <Text textVariant="font-extrabold lg:text-60px md:text-40px text-30px text-blue-20 text-center md:w-full w-2/3">VENUE & BOOKINGS</Text>
                </Division>

                <Division divVariant="flex flex-col justify-center items-center list-disc px-3 md:text-18px">
                    <ul className="flex flex-col gap-1">
                        <li>
                            WANZ GLOBAL BUSINESS IS ORGANIZING THE PAKISTAN TECH EXPO GLOBAL INFORMATION TECHNOLOGY TRADE SHOW AT SANTA CLARA CONVENTION CENTRE (SCCC) HALL-A, SILICON VALLEY, CA, USA. THE EVENT WILL RUN FROM 17TH – 19TH SEP 2022.
                        </li>
                    </ul>
                </Division>
            </Division>
        </Division>
    );
};
